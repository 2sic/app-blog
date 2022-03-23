let Pristine = require('../../node_modules/pristinejs')
declare let $2sxc: any;

interface Comment {
  pseudonym?: string;
  content: string;
  parentComment?: number;
  target?: number;
}

function initDiscussion({ moduleId, targetId, defaultError }: { moduleId: number, targetId: number, defaultError: string }) {
  const discussionWrapper = document.querySelector(`[app-blog5-discussion-${moduleId}]`);
  const discussionFormWrapper = discussionWrapper.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionFormWrapper.querySelector('[app-blog5-submit-comment-button]');

  const commentSvc = $2sxc(moduleId).data('Comment');

  setDraftValue(discussionWrapper, 'main');
  addDraftHandler(discussionWrapper, 'main');
  
  commentButton.addEventListener('click', () => {
    const pristine = new Pristine(discussionFormWrapper);
    const isValid = pristine.validate();
    if (!isValid) return;

    const comment: Comment = {
      target: targetId,
      ...getFormValues(discussionFormWrapper)
    };

    $2sxc(moduleId).webApi.fetchJson('comment/create', comment)
      .then((res: any) => {
        discussionFormWrapper.querySelector('[app-blog5-discussion-pseudonym]')?.setAttribute('disabled', 'true');
        discussionFormWrapper.querySelector('[app-blog5-discussion-content]').setAttribute('disabled', 'true');
        (commentButton as HTMLElement).style.display = "none";
        if (res.Created) {
          const successMessage = (discussionWrapper.querySelector('[app-blog5-comment-success-template]') as HTMLTemplateElement).content.cloneNode(true);
          discussionFormWrapper.appendChild(successMessage);
          clearDraft('main');
          return;
        }

        let errorMessage = (discussionWrapper.querySelector('[app-blog5-comment-error-template]') as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;
        errorMessage.querySelector('span').textContent = res.Message;
        discussionFormWrapper.appendChild(errorMessage);
      });
  });

  discussionWrapper.querySelectorAll("[app-blog5-show-all]")
    .forEach(showAllButton => {
      if (showAllButton) {
        showAllButton.addEventListener('click', () => {
          const parentId = showAllButton.getAttribute("app-blog5-show-id");
          discussionWrapper.querySelectorAll(`[app-blog5-parent-id="${parentId}"]`).forEach(comment => comment.classList.remove('d-none'));
          showAllButton.classList.toggle('d-none')
        });
      }
  });

  discussionWrapper.querySelectorAll('[app-blog5-reply-button]')
    .forEach((replyButton: HTMLButtonElement) => {

    replyButton.addEventListener('click', () => {
      if (replyButton.parentElement.classList.contains("reply-form-active")) return;
      
      discussionWrapper.querySelectorAll(".reply-form-active").forEach(discussionFormWrapper => discussionFormWrapper.classList.toggle("reply-form-active"))
      discussionWrapper.querySelectorAll("[app-blog5-reply-form-wrapper]").forEach(form => form.remove())
      
      const replyFormWrapper = (discussionWrapper.querySelector('[app-blog5-reply-template]') as HTMLTemplateElement).content.cloneNode(true) as Element;
      const replyForm = replyFormWrapper.querySelector('[app-blog5-reply-form]');
      const submitReplyButton = replyFormWrapper.querySelector("[app-blog5-submit-reply-button]");
      const cancelReplyButton = replyFormWrapper.querySelector("[app-blog5-cancel-reply-button]");
      const replyWrapper = replyButton.closest('[app-blog5-reply-wrapper]')
      replyWrapper.appendChild(replyFormWrapper);
      const parentCommentId = replyForm.closest("[app-blog5-comment-id]").getAttribute("app-blog5-comment-id");

      setDraftValue(replyForm, parentCommentId);
      addDraftHandler(replyForm, parentCommentId);

      replyButton.parentElement.classList.toggle("reply-form-active")
      
      submitReplyButton.addEventListener('click', () => {
        const pristine = new Pristine(replyForm);
        const isValid = pristine.validate();
        if (!isValid) return;

        const comment: Comment = {
          parentComment: +parentCommentId,
          target: targetId,
          ...getFormValues(replyForm)
        };
  
        $2sxc(moduleId).webApi.fetchJson('comment/create', comment)
          .then((res: any) => {
            replyForm.querySelector('[app-blog5-discussion-pseudonym]')?.setAttribute('disabled', 'true');
            replyForm.querySelector('[app-blog5-discussion-content]').setAttribute('disabled', 'true');
            (submitReplyButton as HTMLElement).style.display = "none";
            (cancelReplyButton as HTMLElement).style.display = "none";
            if (res.Created) {
              const successMessage = (discussionWrapper.querySelector('[app-blog5-comment-success-template]') as HTMLTemplateElement).content.cloneNode(true);
              replyForm.appendChild(successMessage);
              clearDraft(parentCommentId);
              return;
            }
    
            let errorMessage = (discussionWrapper.querySelector('[app-blog5-comment-error-template]') as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;
            errorMessage.querySelector('span').textContent = res.Message;
            replyForm.appendChild(errorMessage);
          });
      })

      cancelReplyButton.addEventListener('click', () => {
        replyWrapper.querySelector('[app-blog5-reply-form-wrapper]').remove()
        replyButton.parentElement.classList.toggle("reply-form-active")
      });
    });
  })

  discussionWrapper.querySelectorAll('[app-blog5-deny-button]')
    .forEach((denyButton: HTMLButtonElement) => {
      const commentId = denyButton.closest('[app-blog5-comment-id]').getAttribute('app-blog5-comment-id');
      denyButton.addEventListener('click', () => {
        commentSvc.delete(commentId).then(() => location.reload());
      });
    });
    
  discussionWrapper.querySelectorAll('[app-blog5-publish-button]')
    .forEach((publishButton: HTMLButtonElement) => {
      publishButton.addEventListener('click', () => {
        const commentId = publishButton.closest('[app-blog5-comment-id]').getAttribute('app-blog5-comment-id');
        commentSvc.update(commentId, {
          PublishState: true
        }).then((res: any) => {
          if (res.Modified) {
            location.reload();
            return;
          }

          alert(defaultError)
        });
      });
    })
}

function setDraftValue(wrapper: Element, itemId: string) {
  const pseudonymInput = (wrapper.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement); 
  const contentInput = (wrapper.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement); 
  
  const pseudonymValue = window.localStorage.getItem(`draft-pseudonym-${itemId}`);
  const contentValue = window.localStorage.getItem(`draft-content-${itemId}`);

  if (pseudonymInput) pseudonymInput.value = pseudonymValue
  if (contentInput) contentInput.value = contentValue
}

function clearDraft(itemId: string) {
  window.localStorage.removeItem(`draft-pseudonym-${itemId}`)
  window.localStorage.removeItem(`draft-content-${itemId}`)
}

function addDraftHandler(wrapper: Element, itemId: string) {
  const pseudonymInput = (wrapper.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement); 
  const contentInput = (wrapper.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement); 
  
  if (pseudonymInput) pseudonymInput.addEventListener('keyup', () => window.localStorage.setItem(`draft-pseudonym-${itemId}`, pseudonymInput.value));
  if (contentInput) contentInput.addEventListener('keyup', () => window.localStorage.setItem(`draft-content-${itemId}`, contentInput.value));
}

function getFormValues(discussionFormWrapper: Element): { pseudonym?: string, content: string} {
  const pseudonymInput = (discussionFormWrapper.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement);

  let formValues: { pseudonym?: string, content: string } = {
    content: (discussionFormWrapper.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement).value
  };

  if(pseudonymInput != null) formValues.pseudonym = pseudonymInput.value;
  return formValues
}

export default initDiscussion;