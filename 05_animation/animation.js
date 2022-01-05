$(function () {
  // ------------------ effet de fondu en jquery
  // $("#b1").click(function() === $("#b1").on("click",function()
  $("#b1").click(function () {
    $("#h1Fondu").fadeOut(2000); //le temps en milisseconde
  });

  $("#b2").click(function () {
    $("#h1Fondu").fadeIn(2000);
  });

  $("#b3").click(function () {
    $("#h1Fondu").fadeToggle(2000);
  });

  $("#b4").click(function () {
    $("#h1Fondu").fadeTo(1000, 0.3); //fondu j'usquà un niveau d'opacité 0.3
  });

  // ------------------ effet de slide en jquery
  //replie le titre
  $("#b1Slide").click(function () {
    $("#h1Slide").slideUp(2000);
  });

  $("#b2Slide").click(function () {
    $("#h1Slide").slideDown(20000);
  });

  $("#b3Slide").click(function () {
    $("#h1Slide").slideToggle(1000);
  });

  //-------------------- show() hide()
  //cacher
  $("#b1Hide").click(function () {
    $("#h1HideShow").hide(5000, "linear", function () {
      alert("Titre bien caché");
    });
  });
  //rendre visible
  $("#b2Show").click(function () {
    $("#h1HideShow").show();
  });

  //--------------------toggle
  $("#b1Toggle").click(function () {
    $("#h2Toggle").toggle();
  });

  $("#b2Toggle").click(function () {
    $("#h2Toggle").toggle(2000, function () {
      alert("etat de visibilité changé");
    });
  });

  //--------------------animation
  $("#b1Animate").click(function () {
    $("#h1Animate").animate({ width: "-20%" }, 1000);
  });
});
