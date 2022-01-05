// alert("hello");

//1 autre façon d écrire la fonction d attente de chargement de la page
$(function () {
  //----------------------SELECTION BALISE----------------------

  //ici tt mn code jquery
  //$permet d attraper 1 élément
  let maBaliseSpan = $("span");
  console.log(maBaliseSpan);
  $(maBaliseSpan).css("color", "purple"); //je selectionne l élément span
  maBaliseSpan.css("background", "lightBlue"); //changement de la propriété css
  console.log("coucou");

  //----------------------SELECTION ID----------------------
  let monID = $("#masection"); //je selctionne l element #masection
  console.log(monID);
  $(monID).css("color", "red"); //changement de la propriété css

  //----------------------SELECTION CLASSE----------------------
  let maClasse = $(".voiture"); //je selct ls elements .voiture
  console.log(maClasse);
  $(maClasse).css("color", "blue");
  $(maClasse).first().css("color", "green"); //pr select le 1er element voiture
  $(maClasse).last().css("color", "red"); //pr select le dernier element voiture
  $(maClasse).eq(2).css("color", "yellow"); //pr select le 3eme element voiture

  //----------------------SELECTION MULTIPLE----------------------
  let mesElements = $("h1, article, aside");
  console.log(mesElements);
  $(mesElements).css("color", "orange");

  //----------------------SELECTION PARENTS OU ANCETRE----------------------
  $("li").parent().css("border", "2px solid red"); //on select le parent directe de nos li
  $("li").parents("div").css("border", "2px dashed red"); //on select ls ancetres  div du li

  //----------------------SELECTION ENFANTS OU DESCENDANT----------------------
  $(".conteneur").children().css("font-weight", "700"); //on selectionne ts ls enfants du conteneur
  $(".conteneur").children("#enfants").css("color", "red");
  $(".conteneur").find(".find").css("border", "2px dashed purple");

  //----------------------SELECTION FRERES----------------------
  $("li:first-child").siblings().css("text-align", "right");

  // -------- RESUME DES PRINCIPAUX SELECTEURS
  /*
      	selection de balise : $('span')
      	selection d'un #id : $('#id')
      	selection d'une classe .class : $('.classe')
      	selection d'un élément par lui-même : $(this)
      	selection d'un élément par sa balise et son type : $('input:text')
      	selection d'un élément par son type (tous les types radio) : $(':radio')
      	selection d'un élément par son attribut : $('img[alt]')
      	selection d'un élément par son attribut (tous les attributs) : $('[alt]')
      	selection d'un élément par le nom de l’attribut ET sa valeur : $("img[title='paris']")
      	sélectionner plusieurs sélecteurs en même temps : $("h1, p, #id")
      */
});
