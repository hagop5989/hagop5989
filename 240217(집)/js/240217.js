window.onload = function () {
  $(".section0").show();
  $(".nav").hide();
  $(".section1").hide();
};

// 이하 제이쿼리
$(function () {
  $(".home").on("click", function () {
    $(".section0").show();
    $(".nav").hide();
    $(".section1").hide();
    $(".section2").hide();
  })
  $(".section0 p").on("click", function () {
    $(".section0").hide();
    $(".nav").show();
    $(".section1").show();
  });

  $("header a").on("click", function () {
    $(".section1").hide();
  });
});
