//$(function () {} pr attendre que la page html sois charger avnt de lancer ls scripts
$(function () {
  $("h1").on("click", function () {
    $(this).css("color", "green");
    $(this).css("font-size", "80px");
    $(this).css("text-align", "center");
    // $(this).css({ textAlign: "center", fontSize: "80px", color: "green" }); //pr tt cumuler sur 1 seul ligne
  });

  //exo 2
  $(".zone2").on("click", function (event) {
    event.preventDefault(); //pr empecher de recharger(reload) la page (e = event)
    $("body").css("background", "blue");
  });

  //exo 3
  $(".zone3").on("click", function (e) {
    e.preventDefault(); //pr empecher de recharger(reload) la page (e = event)
    $("body").css("background", "yellow");
  });

  //exo 4
  $(".zone5").on("click", function (pageChargement) {
    pageChargement.preventDefault(); //pr empecher le submit le rechargemnt(reload) de la page
    let color = $(".zone4").val();
    console.log(color);
    $("body").css("background", color);
  });

  //exo 5
  $(".zone6").on("change", function () {
    let couleurs = $(this).val();
    console.log(couleurs);
    $("body").css("background", couleurs); //retourne la couleur
  });

  //exo 6
  $(".zone8").on("click", function () {});

  //exo 7
  $(".zone9").on("click", function () {
    $(".zone9").css("background", "yellow");
    $(this).css("background", "green"); //this cible 1 seul zone9 sur les 3 zone9
  });
});
