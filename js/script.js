$(document).ready(function () {
  $("#toggleButton").click(function () {
    $(this).toggleClass("rotated");

    $("#collapseContent").slideToggle("fast");
  });

  $(".toggle-button").click(function () {
    $(this).toggleClass("text-primary");
    $(this).next(".collapse-content").slideToggle("fast");
  });

  $(".how-to-use.toggle-button").click(function () {
    $(".svg-dropdown").toggleClass("rotated");
  });
  $(".toggle-fa-button").click(function () {
    $(".collapse-fa-content").not($(this).next()).slideUp("fast");
    $(".toggle-fa-button").not($(this)).removeClass("text-primary");

    $(this).toggleClass("text-primary");
    $(this).next(".collapse-fa-content").slideToggle("fast");
  });

  $("#navToggleButton").click(function () {
    $("#navMobile").toggleClass("hidden");
  });

  $("#navCloseButton").click(function () {
    $("#navMobile").toggleClass("hidden");
  });

  $(".cookies-close").click(function () {
    $("#cookies").hide();
  });

  $(".lang-dropdown .collapse-content button").click(function () {
    $(".lang-dropdown .collapse-content").slideToggle("fast");

    $(".lang-dropdown .collapse-content button").removeClass(
      "active font-semibold"
    );
    $(this).addClass("active font-semibold");
    $(".lang-dropdown .collapse-content button .check").addClass("hidden");
    $(this).find(".check").removeClass("hidden");
  });

  $(".smooth-scroll").click(function (event) {
    event.preventDefault();
    var target = $(this).attr("href");
    var offset = $(target).offset().top;

    $("html, body").animate(
      {
        scrollTop: offset,
      },
      800
    );
  });

  $(window).scroll(function () {
    const navbar = $(".navbar");
    const logoImg = $(".logo-container img");
    const mobileNav = $(".navToggleButton img");
    const content = $(".about");
    const svg = $(".svg-dropdown svg path");
    if ($(this).scrollTop() > content.offset().top - 200) {
      navbar.addClass("fixed bg-white py-4 shadow");
      navbar.removeClass("text-white");
      svg.addClass("stroke-black");
      logoImg.attr("src", "assets/navigation-logo-img-black.svg");
      mobileNav.attr("src", "assets/bar3-black.svg");
    } else {
      navbar.removeClass("fixed bg-white py-4 shadow");
      navbar.addClass("text-white");
      svg.removeClass("stroke-black");

      logoImg.attr("src", "assets/navigation-logo-img-white.svg");
      mobileNav.attr("src", "assets/bars-3-bottom-right.png");
    }
  });
});
