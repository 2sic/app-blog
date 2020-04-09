declare var StickySidebar: any;

/* 2sxc Blog-App by 2sxc */
$(function() {
  new StickySidebar('#sidebar', {
    containerSelector: '.app-blog',
    innerWrapperSelector: '.sidebar__inner',
    topSpacing: 160,
		bottomSpacing: 20,
  });
});
