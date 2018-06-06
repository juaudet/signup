$(function () {
	$.get("sidebar-site.html", function(data) {
	  	$("#sidebar-site").html(data.activeElement);
	});
	$.get("sidebar-ad.html", function(data) {
	  	$("#sidebar-ad").html(data.activeElement);
	});
	$.get("header.html", function(data) {
	  	$("#header").html(data.activeElement);
	});
});