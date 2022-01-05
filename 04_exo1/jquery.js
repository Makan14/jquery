$(function () {
  $("h1").on("click", function () {
    $(this).css("color", "green");
    $(this).css("text-align", "center");
    $(this).css("font-size", "80px");
  });

  $("fieldset").on("click", function () {
    $(this).css("background", "red");
  });
});
