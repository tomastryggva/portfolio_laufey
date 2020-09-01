const $ = window.$;

$(document).ready(function () {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  $(window).scroll(function () {
    $(".scroll-animations .animated").each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("fadeInRightBig");
      }
    });
  });
  $(window).scroll(function () {
    $(".lol .animate__animated").each(function () {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass("animate__backInLeft animate__delay-2s");
      }
    });
  });
  $(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= 500) {
      $(".fixme").css({
        position: "fixed",
        top: "0",
        left: "0",
      });
      $(".fixme2").css({
        position: "fixed",
        top: "95px",
        left: "601px",
      });
    } else {
      $(".fixme").css({
        position: "static",
      });
      $(".fixme2").css({
        position: "static",
      });
    }
  });
});
