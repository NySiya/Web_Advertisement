$(document).ready(function() {
  $('.close-expanded').hide();

  $('.open-expandable').click(function() {
    $('.expandable-item').css({
      height: '440px',
      transition: 'height 0.5s',
    });
    $(this).hide();
    $('.close-expanded').show();
  });

  $('.close-expanded').click(function() {
    $('.expandable-item').css({
      height: '150px',
      transition: 'height 0.5s',
    });
    $(this).hide();
    $('.open-expandable').show();
  });
});
