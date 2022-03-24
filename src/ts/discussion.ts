let Pristine = require('../../node_modules/pristinejs')
declare let $2sxc: any;

interface Comment {
  pseudonym?: string;
  content: string;
  parentComment?: number;
  target?: number;
}

function initDiscussion({ moduleId, targetId, defaultError }: { moduleId: number, targetId: number, defaultError: string }) {
  // Get DOM Elements
  const discussionWrapper = document.querySelector(`[app-blog5-discussion-${moduleId}]`);
  const discussionFormWrapper = discussionWrapper.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionFormWrapper.querySelector('[app-blog5-submit-comment-button]');

  const commentSvc = $2sxc(moduleId).data('Comment');

  setLocalDraftValue(discussionWrapper, 'main');
  addLocalDraftHandler(discussionWrapper, 'main');
  
  commentButton.addEventListener('click', () => {
    if (!isFormValid(discussionFormWrapper)) return;

    const comment: Comment = {
      target: targetId,
      ...getFormValues(discussionFormWrapper)
    };

    $2sxc(moduleId).webApi.fetchJson('comment/create', comment)
      .then((res: any) => {
        // Disable inputs
        disableFormInputs(discussionFormWrapper);
        (commentButton as HTMLElement).style.display = "none";
        
        handleCreateResponse(res, discussionFormWrapper, discussionWrapper, defaultError, 'main')
      });
  });

  discussionWrapper.querySelectorAll("[app-blog5-show-all]").forEach(showAllButton => {
    if (!showAllButton) return;
    
    showAllButton.addEventListener('click', () => {
      const parentId = showAllButton.getAttribute("app-blog5-show-id");
      // Show all comments
      discussionWrapper.querySelectorAll(`[app-blog5-parent-id="${parentId}"]`)
        .forEach(comment => comment.classList.remove('d-none'));
      showAllButton.classList.toggle('d-none')
    });
  });

  discussionWrapper.querySelectorAll('[app-blog5-reply-button]')
    .forEach((replyButton: HTMLButtonElement) => {
      replyButton.addEventListener('click', () => {
        if (replyButton.parentElement.classList.contains("reply-form-active")) return;
        
        // Clear and remove other active reply forms
        discussionWrapper.querySelectorAll(".reply-form-active")
          .forEach(discussionFormWrapper => discussionFormWrapper.classList.toggle("reply-form-active"))
        discussionWrapper.querySelectorAll("[app-blog5-reply-form-wrapper]")
          .forEach(form => form.remove())
        
        // Get form template 
        const formTemplate = (discussionWrapper.querySelector('[app-blog5-reply-template]') as HTMLTemplateElement);
        console.log(formTemplate)
        
        // Clone template
        const replyFormWrapper = formTemplate.content.cloneNode(true) as Element;
        const replyWrapper = replyButton.closest('[app-blog5-reply-wrapper]')

        const replyForm = replyFormWrapper.querySelector('[app-blog5-reply-form]');

        // Get Buttons
        const submitReplyButton = replyFormWrapper.querySelector("[app-blog5-submit-reply-button]");
        const cancelReplyButton = replyFormWrapper.querySelector("[app-blog5-cancel-reply-button]");
        
        // Append form to replyWrapper
        replyWrapper.appendChild(replyFormWrapper);

        const parentCommentId = getClosestCommentId(replyForm);

        // Handle drafts
        setLocalDraftValue(replyForm, parentCommentId);
        addLocalDraftHandler(replyForm, parentCommentId);

        // Mark form as active
        replyButton.parentElement.classList.toggle("reply-form-active")
        
        // Handle submit
        submitReplyButton.addEventListener('click', () => {
          if (!isFormValid(replyForm)) return;

          const comment: Comment = {
            parentComment: +parentCommentId,
            target: targetId,
            ...getFormValues(replyForm)
          };
    
          $2sxc(moduleId).webApi.fetchJson('comment/create', comment)
            .then((res: any) => {
              // Disable inputs
              disableFormInputs(replyForm);
              (submitReplyButton as HTMLElement).style.display = "none";
              (cancelReplyButton as HTMLElement).style.display = "none";

              handleCreateResponse(res, replyForm, discussionWrapper, defaultError, parentCommentId)
            });
        })

        // Remove and deactivate form when canceled  
        cancelReplyButton.addEventListener('click', () => {
          replyWrapper.querySelector('[app-blog5-reply-form-wrapper]').remove()
          replyButton.parentElement.classList.toggle("reply-form-active")
        });
      });
    })

  discussionWrapper.querySelectorAll('[app-blog5-deny-button]')
    .forEach((denyButton: HTMLButtonElement) => {
      const commentId = getClosestCommentId(denyButton);
      denyButton.addEventListener('click', () => {
        commentSvc.delete(commentId).then(() => location.reload());
      });
    });
    
  discussionWrapper.querySelectorAll('[app-blog5-publish-button]')
    .forEach((publishButton: HTMLButtonElement) => {
      publishButton.addEventListener('click', () => {
        const commentId = getClosestCommentId(publishButton);
        commentSvc.update(commentId, {
          PublishState: true
        }).then((res: any) => {
          if (res.Modified) {
            location.reload();
            return;
          }

          alert(`${defaultError}: ${res.Message}`)
        });
      });
    })
}

function setLocalDraftValue(wrapper: Element, itemId: string) {
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

function addLocalDraftHandler(wrapper: Element, itemId: string) {
  const pseudonymInput = (wrapper.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement); 
  const contentInput = (wrapper.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement); 
  
  if (pseudonymInput) 
    pseudonymInput.addEventListener('keyup', () => window.localStorage.setItem(`draft-pseudonym-${itemId}`, pseudonymInput.value));
  if (contentInput) 
    contentInput.addEventListener('keyup', () => window.localStorage.setItem(`draft-content-${itemId}`, contentInput.value));
}

function getFormValues(discussionFormWrapper: Element): { pseudonym?: string, content: string} {
  const pseudonymInput = (discussionFormWrapper.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement);

  let formValues: { pseudonym?: string, content: string } = {
    content: (discussionFormWrapper.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement).value
  };

  if(pseudonymInput != null) formValues.pseudonym = pseudonymInput.value;
  return formValues
}

function disableFormInputs(form: Element): void {
  form.querySelector('[app-blog5-discussion-pseudonym]')?.setAttribute('disabled', 'true');
  form.querySelector('[app-blog5-discussion-content]').setAttribute('disabled', 'true');
}

function handleCreateResponse(res: any, form: Element, discussionWrapper: Element, defaultError: string, draftId: string) {
  if (res.Created) {
    const successMessage = (discussionWrapper.querySelector('[app-blog5-comment-success-template]') as HTMLTemplateElement).content.cloneNode(true);
    form.appendChild(successMessage);
    clearDraft(draftId);
    return;
  }

  let errorMessage = (discussionWrapper.querySelector('[app-blog5-comment-error-template]') as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;
  errorMessage.querySelector('span').textContent = `${defaultError}: ${res.Message}`;
  form.appendChild(errorMessage);
}

function isFormValid(form: Element): boolean {
  const pristine = new Pristine(form);
  return pristine.validate();
}

function getClosestCommentId(form: Element): string {
  return form.closest('[app-blog5-comment-id]').getAttribute('app-blog5-comment-id')
}

export default initDiscussion;