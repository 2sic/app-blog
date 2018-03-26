/* 2sxc Blog-App by 2sxc */
$(document).ready(function () {

    // create a sort by alphabet button
    var sortabc = $('<a href="javascript:void(0)" class="app-blog-btn">Sort alphabetically&nbsp;<span>&#8645;</span></a>').toggle(
		function () {
		    $(".app-blog-tagcloud").addClass("sorted");
		    $(".app-blog-tagcloud ul li").tsort({ order: "asc" });
		},
		function () {
		    $(".app-blog-tagcloud ul li").tsort({ order: "desc" });
		}
		);
    $('.app-blog-tagcloud').append(sortabc);

    // create a sort by alphabet button	
    var sortstrength = $('<a href="javascript:void(0)" class="app-blog-btn">Sort by strength&nbsp;<span>&#8645;</span></a>').toggle(
		function () {
		    $(".app-blog-tagcloud").addClass("sorted");
		    $(".app-blog-tagcloud ul li").tsort({ order: "desc", attr: "class" });
		},
		function () {
		    $(".app-blog-tagcloud ul li").tsort({ order: "asc", attr: "class" });
		}
		);
	$('.app-blog-tagcloud').append(sortstrength);
	
	var sidebar = new StickySidebar('#sidebar', {
        containerSelector: '.app-blog',
        innerWrapperSelector: '.sidebar__inner',
        topSpacing: 160,
		bottomSpacing: 20,
    });
});
