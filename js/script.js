// ナビゲーションメニューをクリックした時の動作

jQuery("#js-menu-button").on("click", function(e) {
  e.preventDefault();
  jQuery(".header__menu-contents").addClass("is-hide");
  jQuery(".header__close-icon").removeClass("is-hide");
  jQuery(".header__inner").addClass("header__inner-sp");
  jQuery(".sp-header").addClass("sp-header__is-active");
  jQuery("body").addClass("no-scroll");
});

jQuery("#js-close-button").on("click", function(e) {
  e.preventDefault();
  jQuery(".header__menu-contents").removeClass("is-hide");
  jQuery(".header__close-icon").addClass("is-hide");
  jQuery(".header__inner").removeClass("header__inner-sp");
  jQuery(".sp-header").removeClass("sp-header__is-active");
  jQuery("body").removeClass("no-scroll");
});

jQuery(".sp-header__nav-link").on("click", function(e) {
  e.preventDefault();
  jQuery(".header__menu-contents").removeClass("is-hide");
  jQuery(".header__close-icon").addClass("is-hide");
  jQuery(".header__inner").removeClass("header__inner-sp");
  jQuery(".sp-header").removeClass("sp-header__is-active");
  jQuery("body").removeClass("no-scroll");
});

// スムーススクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});
