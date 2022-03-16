let Pristine = require('../../node_modules/pristinejs')
declare let $2sxc: any;

interface Comment {
  pseudonym?: string;
  content: string;
  parentComment?: number;
  blogPostFK?: number;
}

function initDiscussion({ moduleId, blogPostId }: { moduleId: number, blogPostId: number }) {
  const discussionWrapper = document.querySelector(`[app-blog5-discussion-${moduleId}]`);
  const discussionFormWrapper = discussionWrapper.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionFormWrapper.querySelector('[app-blog5-discussion-button]');
  
  commentButton.addEventListener('click', () => {
    const pristine = new Pristine(discussionFormWrapper);
    const isValid = pristine.validate();
    if (!isValid) return;

    const comment: Comment = {
      blogPostFK: blogPostId,
      ...getFormValues(discussionFormWrapper)
    };

    const commentSvc = $2sxc(moduleId).data('BlogComment');
    commentSvc.create(comment)
      .then((res: any) => {
        if (res.Created) {
          location.reload();
          return;
        }

        alert("Something went wrong, please contact the Admin.")
      });
  });
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