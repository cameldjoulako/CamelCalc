/**
 * calculatrice
 * par #TheCamelGeek
 * Novembre 2017
 */
var ecran = document.getElementById('ecranResultat');
var syntaxError = "Division par 0 impossible";
var nombre1 = []; /* tableau qui va contenir les boutons selectioner a l'ecran*/
var nombre2 = [];
var resultat;
var i = 0;
var nbr1 = "";
var nbr2 = "";
var operateur;
var ecranOn = 1;

/*mise a 0 de l'ecran d'affichage*/
ecran.innerHTML = 0;

function effacerEcran() {
  nombre1 = [];
  nombre2 = [];
  i = 0;
  nbr1 = "";
  nbr2 = "";
  ecranOn = 1;
  ecran.innerHTML = 0;
}


function effacerCaractere() {

	if (ecran.innerHTML == syntaxError) {
		effacerEcran();
		ecran.style.color="black";
  }

  if (ecran.innerHTML == resultat) {
    effacerEcran();
  }
  else if (ecranOn === 1) {
    nbr1 = nbr1.slice(0, nbr1.length - 1);
    if (nbr1 === "") {
      ecran.innerHTML = 0;
    }
    else {
      ecran.innerHTML = nbr1;
    }
  }
  else {
    nbr2 = nbr2.slice(0, nbr2.length - 1);
    if (nbr2 === "") {
      ecran.innerHTML = 0;
    }
    else {
      ecran.innerHTML = nbr2;
    }
  }
}



/*fonction qui recupere le label du bouton au clic*/
function selection(valSelect) {
	ecran.style.color="black";
  if(ecran.innerHTML == resultat) {
    effacerEcran();
    nbr1 = valSelect;
    ecran.innerHTML = nbr1;
  }
  else if (ecranOn === 1) {
    nombre1.push(valSelect);
    nbr1 = nbr1 + "" + nombre1[i];
    i++;
    ecran.innerHTML = nbr1;
  }
  else {
    nombre2.push(valSelect);
    nbr2 = nbr2 + "" + nombre2[i];
    i++;
    ecran.innerHTML = nbr2;
  }
}


function pourcentage() {
  if (ecran.innerHTML == resultat) {
    nbr1 = resultat / 100;
    ecran.innerHTML = nbr1;
  }
  else if (ecranOn === 1) {
    nbr1 = parseFloat(nbr1 / 100);
    ecran.innerHTML = nbr1;
  }
  else {
    if (operateur === 'addition' || operateur === 'soustraction') {
      nbr2 = parseFloat(nbr1 * (nbr2 / 100));
      ecran.innerHTML = nbr2;
    }
    else {
      nbr2 = parseFloat(nbr2 / 100);
      ecran.innerHTML = nbr2;
    }
  }
}


function egal() {
  nbr1 = parseFloat(nbr1);
  nbr2 = parseFloat(nbr2);

if (operateur === 'addition') {

    resultat = nbr1 + nbr2;

  }else if (operateur === 'multiplication') {

    resultat = nbr1 * nbr2;

  }else if (operateur === 'soustraction') {

    resultat = nbr1 - nbr2;

  }else if (operateur === 'division') {

  	if(nbr2 != 0){

  		resultat = nbr1 / nbr2;

  	}else if(nbr2 == 0){

  		ecran.style.color="red";
  		ecran.innerHTML = syntaxError;
  		eclan.style.color="red";
  	}
    
  }
  resultat = Math.round(resultat*100)/100;
  ecran.innerHTML = resultat;
    nbr1 = resultat;   
    nombre2 = []; 
    nbr2 = "";
}



function saveCalcul(operator) {
  if (ecranOn === 2 && nbr2){
    egal();
    operateur = operator;
    i = 0;
  }
  else if (!nbr1) {
    effacerEcran();
  }
  else {
    operateur = operator;
    ecranOn = 2;
    i = 0;
  }
  if (operator === "addition") {
    operator = "+";
  }
  else if (operator === "soustraction") {
    operator = "-";
  }
  else if (operator === "multiplication") {
    operator = "x";
  }
  else {
    operator = "/";
  }
ecran.innerHTML = nbr1 + " " + operator;
  operator = operator;
}

function factoriel1() {
  if (ecran.innerHTML == resultat) {
    nbr1 = factoriel(resultat);
    ecran.innerHTML = nbr1;
  }
  else if (ecranOn === 1) {
    nbr1 = parseFloat(factoriel(resultat));
    ecran.innerHTML = nbr1;
  }
  else {
    if (operateur === 'addition' || operateur === 'soustraction') {
      nbr2 = parseInt(nbr1 * (factoriel(nbr2)));
      ecran.innerHTML = nbr2;
    }
    else {
      nbr2 = parseInt(factoriel(nbr2));
      ecran.innerHTML = nbr2;
    }
  }
}


function factoriel(n){
  var fact = 1;
  var nb = parseInt(n);
  if (nb === 0 || nb === 1) {

    return fact;

  }else{

    for (var i = 1; i <= nb; i++) {

      fact = fact*i;

    }

    return fact;
  }
}