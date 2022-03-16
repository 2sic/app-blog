let Pristine = require('../../node_modules/pristinejs')

function initDiscussion({ domAttribute }: { domAttribute: string }) {
  const discussionElement = document.querySelector(`[${domAttribute}]`);
  console.log(discussionElement)
  const discussionForm = discussionElement.querySelector('[app-blog5-discussion-form]');
  const commentButton = discussionForm.querySelector('[app-blog5-discussion-button]');
  
  commentButton.addEventListener('click', () => {
    const pristine = new Pristine(discussionForm);
    pristine.validate();
  });
}

export default initDiscussion;