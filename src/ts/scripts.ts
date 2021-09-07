declare var StickySidebar: any;

// TODO: DROP JQUERY
// change inner-class thingy to start with .app-blog... and not .sidebar__

$(function() {
  new StickySidebar('#sidebar', {
    containerSelector: '.app-blog',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 160,
		bottomSpacing: 20,
  });
});
