$(function () {
  //ici mn code jquery

  //---------------------------EVENEMENTS MOUSEOVER
  $(".zone1").on("mouseover", function () {
    $(this).css("background", "red"); //$(this) === $(".zone1")
    $("#info").text("je suis sur la zone 1");
  });

  //---------------------------EVENEMENTS MOUSEMOVE
  $(".zone2").on("mousemove", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis dns la zone 2");
  });

  //---------------------------EVENEMENTS MOUSEOUT
  $(".zone3").on("mouseout", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis dns la zone 3");
  });

  //---------------------------EVENEMENTS MOUSEENTER et MOUSELEAVE
  $(".zone4").on("mouseenter", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis sortie de la zone 4");
  });

  //---------------------------EVENEMENTS MOUSEEUP et MOUSEDOWN
  $(".zone5").on("mouseeup", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis sortie de la zone 5");
  });

  $(".zone6").on("mousedown", function (event) {
    $(this).text("pageX: " + event.pageX + ", pageY: " + event.pageY);
    $("#info").text("je suis sortie de la zone 6");
  });

  //---------------------------EVENEMENTS CLICK
  $(".zone7").on("click", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 7");
  });

  //---------------------------EVENEMENTS DBLCLICK
  $(".zone8").on("dblclick", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 8");
  });

  //---------------------------EVENEMENTS CLICKDROIT
  $(".zone9").contextmenu("click", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 9");
  });

  //---------------------------EVENEMENTS BLUR
  //lorsque ns allons cliquer ailleurs après avoir cliquer sur l element
  $(".zone10").on("blur", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 10");
  });

  //---------------------------EVENEMENTS CHANGE
  //lorsque ns allons changer l option d un element select
  $(".zone11").on("change", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 11");
  });

  //---------------------------EVENEMENTS KEYDOWN et KEYUP
  $(".zone12").on("keydown", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 12");
  });

  $(".zone12").on("keyup", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("je suis dns la zone 12");
  });
});
