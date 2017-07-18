var $overlay = $('<div id="overlay"></div>');
var $img = $("<img>");
var $caption = $("<p></p>");

$overlay.append($img);

$overlay.append($caption);



$(".gallery img").click(function(event){
event.preventDefault();
var imageLocation = $(this).attr("src");
$img.attr("src", imageLocation);
var captionText = $(this).attr("alt");
$caption.text(captionText);
$("body").append($overlay);
$overlay.show();
});

$overlay.click(function(){
	$overlay.hide();
});