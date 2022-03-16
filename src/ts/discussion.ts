let Pristine = require('../../node_modules/pristinejs')
declare let $2sxc: any;

interface Comment {
  pseudonym?: string;
  content: string;
  parentComment?: number;
  blogPostFK?: number;
}

function initDiscussion({ moduleId, blogPostId }: { moduleId: number, blogPostId: number }) {
  const discussionElement = document.querySelector(`[app-blog5-discussion-${moduleId}]`);
  const discussionForm = discussionElement.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionForm.querySelector('[app-blog5-discussion-button]');
  
  commentButton.addEventListener('click', () => {
    const pristine = new Pristine(discussionForm);
    const isValid = pristine.validate();
    if (!isValid) return;

    const comment: Comment = {
      blogPostFK: blogPostId,
      ...getFormValues(discussionForm)
    };

    const commentSvc = $2sxc(moduleId).data('BlogComment');
    commentSvc.create(comment)
      .then((res: any) => {
        if (res.Created) return;
        alert("Something went wrong, please contact the Admin.")
      });
  });
}

function getFormValues(discussionForm: Element): { pseudonym?: string, content: string} {
  const pseudonymInput = (discussionForm.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement);

  let formValues: { pseudonym?: string, content: string } = {
    content: (discussionForm.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement).value
  };
  
  if(pseudonymInput != null) formValues.pseudonym = pseudonymInput.value;
  return formValues
}

export default initDiscussion;