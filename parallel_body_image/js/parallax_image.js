$(document).ready(function() {
  imageParallax();
});

$(window).scroll(function(){
  imageParallax();
})

function imageParallax() {
  var parallax = $('.parallax');
  var difference = $(window).scrollTop() - parallax.offset().top;
  var half = (difference / 2) + 'px';
  parallax.find('.img-parallax').css('top', half);
}
