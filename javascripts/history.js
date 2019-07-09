$(function() {
  $('nav').on('click', 'a', function (e) {
    e.preventDefault();

    const $e = $(e.target);
    const idx = $e.attr('href');

    switchPage(idx);
  });

  function switchPage(idx) {
    $('.active').removeClass('active');
    $(`nav a[href="${idx}"]`).addClass('active');
    $('article').hide().filter(idx).show();
  }
});
