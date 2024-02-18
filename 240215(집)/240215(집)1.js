window.onload = function () {};

$(function () {
  $(".btn0").on("click", function () {
    $(".btn_text").animate({ left: "-900px" }, 1000);
  });

  $(".btn1").on("click", function () {
    $(".btn_text").animate({ left: "0" }, 1000);
  });
});
