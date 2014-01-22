
$(document).ready(function(){
  $('nav').localScroll({duration:700});

  causeRepaintsOn = $("h1, h2, h3, p");

  $(window).resize(function() {
    causeRepaintsOn.css("z-index", 1);
  });
});