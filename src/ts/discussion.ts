let Pristine = require('../../node_modules/pristinejs')
declare let $2sxc: any;

interface Comment {
  pseudonym?: string;
  content: string;
  parentCommentFK?: number;
}

function initDiscussion({ moduleId }: { moduleId: string }) {
  const discussionElement = document.querySelector(`[app-blog5-discussion-${moduleId}]`);
  const discussionForm = discussionElement.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionForm.querySelector('[app-blog5-discussion-button]');
  
  commentButton.addEventListener('click', () => {
    const pristine = new Pristine(discussionForm);
    const isValid = pristine.validate();
    if (!isValid) return;

    const comment = getCommentValue(discussionForm);

    const commentSvc = $2sxc(moduleId).data('BlogComment');
    commentSvc.create(comment)
      .then((res: any) => {
        if (res.Created) return;
        alert("Something went wrong, please contact the Admin.")
      });
  });
}

function getCommentValue(discussionForm: Element): Comment {
  return {
    pseudonym: (discussionForm.querySelector('[app-blog5-discussion-pseudonym]') as HTMLInputElement).value,
    content: (discussionForm.querySelector('[app-blog5-discussion-content]') as HTMLTextAreaElement).value,
  }
}

export default initDiscussion;