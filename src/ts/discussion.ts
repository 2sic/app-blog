let Pristine = require('../../node_modules/pristinejs')
declare let $2sxc: any;

interface Comment {
  pseudonym?: string;
  content: string;
  target?: number;
  blogPostFK?: number;
}

function initDiscussion({ moduleId, blogPostId }: { moduleId: number, blogPostId: number }) {
  const discussionWrapper = document.querySelector(`[app-blog5-discussion-${moduleId}]`);
  const discussionFormWrapper = discussionWrapper.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionFormWrapper.querySelector('[app-blog5-submit-comment-button]');

  setDraftValue(discussionWrapper, 'main');
  addDraftHandler(discussionWrapper, 'main');
  
  commentButton.addEventListener('click', () => {
    const pristine = new Pristine(discussionFormWrapper);
    const isValid = pristine.validate();
    if (!isValid) return;

    const comment: Comment = {
      blogPostFK: blogPostId,
      ...getFormValues(discussionFormWrapper)
    };

    const commentSvc = $2sxc(moduleId).data('Comment');
    commentSvc.create(comment)
      .then((res: any) => {
        if (res.Created) {
          clearDraft('main');
          location.reload();
          return;
        }

        alert("Something went wrong, please contact the Admin.")
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
      replyButton.parentElement.appendChild(replyFormWrapper);
      const targetId = replyForm.closest("[app-blog5-comment-id]").getAttribute("app-blog5-comment-id");
      console.log(targetId)

      setDraftValue(replyForm, targetId);
      addDraftHandler(replyForm, targetId);

      replyButton.parentElement.classList.toggle("reply-form-active")
      
      submitReplyButton.addEventListener('click', () => {
        const pristine = new Pristine(replyForm);
        const isValid = pristine.validate();
        if (!isValid) return;

        const comment: Comment = {
          target: +targetId,
          blogPostFK: blogPostId,
          ...getFormValues(replyForm)
        };
  
        const commentSvc = $2sxc(moduleId).data('Comment');
        commentSvc.create(comment)
          .then((res: any) => {
            if (res.Created) {
              clearDraft(targetId);
              location.reload();
              return;
            }
  
            alert("Something went wrong, please contact the Admin.")
          });
      })

      cancelReplyButton.addEventListener('click', () => {
        replyButton.parentElement.querySelector('[app-blog5-reply-form-wrapper]').remove()
        replyButton.parentElement.classList.toggle("reply-form-active")
      });
    });
  })
}

function setDraftValue(wrapper: Element, itemId: string) {
  const pseudonymInput = (wrapper.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement); 
  const contentInput = (wrapper.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement); 
  console.log(pseudonymInput)
  console.log(contentInput)
  
  const pseudonymValue = window.localStorage.getItem(`draft-pseudonym-${itemId}`);
  const contentValue = window.localStorage.getItem(`draft-content-${itemId}`);
  console.log(contentValue)

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