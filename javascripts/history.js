$(function() {
  $('nav').on('click', 'a', function (e) {
    e.preventDefault();

    const $e = $(e.target);
    const idx = $e.attr('href');

    switchPage(idx);

    window.history.pushState(
      { idx },
      $e.text(),
      `${window.location.pathname}${idx}`
    );
  });

  $(window).on('popstate', function (e) {
    const state = e.originalEvent.state;

    switchPage(state === null ? '#page_1' : state.idx);
  });

  if (window.location.hash) {
    switchPage(location.hash);
  }

  function switchPage(idx) {
    $('.active').removeClass('active');
    $(`nav a[href="${idx}"]`).addClass('active');
    $('article').hide().filter(idx).show();
  }
});
