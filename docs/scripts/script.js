


document.getElementById("inputEcriture").disabled = true
// Fonction pour afficher le popup
function afficherPopup() {
  let spanCorrect = document.querySelector(".correct span").innerText;
  let spanErreur = document.querySelector(".erreur span").innerText;
  let spanPourcentage = document.querySelector(".pourcentage span").innerText;
  let tempsEcoule = document.getElementById("temps").textContent;
  
  document.getElementById("popup").style.display = "block";

  let g = document.getElementById("scorePopup");
  g.innerText = spanCorrect;

  let lm = document.getElementById("erreurPopup");
  lm.innerText = spanErreur;

  let pourcent = document.getElementById("pourcentagePopup");
  pourcent.innerText = spanPourcentage;

  let tempsPopup = document.getElementById("tempsEcoulePopup");
  tempsPopup.innerText = tempsEcoule;
}

// Fonction pour afficher le résultat
function afficherResultat(score, nbreProposes) {
  let spanScore = document.querySelector(".zoneScore span");
  let affichageScore = `${score}/${nbreProposes}`;
  spanScore.innerText = affichageScore;
}

// Fonction pour afficher correct
function afficherCorrect(score) {
  let spanCorrect = document.querySelector(".correct span");
  spanCorrect.innerText = score;
}

// Fonction pour afficher erreur
function afficherErreur(i, score) {
  let spanErreur = document.querySelector(".erreur span");
  let erreur = i - score;
  spanErreur.innerText = -erreur;
}

// Fonction pour afficher le pourcentage
function afficherPourcentage(score, i) {
  let spanPourcentage = document.querySelector(".pourcentage span");
  let pourcentage = Math.floor( (score / i) * 100);
  spanPourcentage.innerText = `${pourcentage}%`;
}

// Fonction pour afficher le minuteur
let tempsRestant = 60;
let tempsEcoule = 60 - tempsRestant
let intervalId;

// Fonction pour afficher le temps restant
function afficherTempsRestant() {
  if (tempsRestant > 0) {
    tempsRestant--;
    document.getElementById("temps").textContent = `00:${tempsRestant}`;
  } else {
    clearInterval(intervalId);
    afficherPopup();
  }
}

// Fonction pour fermer le popup
function fermerPopup() {
  document.getElementById("popup").style.display = "none";
}

/*/ Evénement sur le bouton "Lancer le minuteur"
document.getElementById("btnLancerMinuteur").addEventListener("click", () => {
  document.getElementById("inputEcriture").disabled = false
  intervalId = setInterval(afficherTempsRestant, 1000);
}); 



// Evénement sur le bouton "Fermer" du popup
document.getElementById("btnFermerPopup").addEventListener("click", () => {
  fermerPopup();
  score = 0;
  i = 0; // Assuming 'i' tracks the number of words attempted

  // Reflect the reset scores in the UI
  afficherResultat(score, i);
  afficherCorrect(score);
  afficherErreur(score, i);
  afficherPourcentage(score, i); 
  // Reinitialize the timer variables
  tempsRestant = 60;
  clearInterval(intervalId); // Stop any existing timer
  document.getElementById("temps").textContent = "1:00"; // Reset the timer display
  document.getElementById("inputEcriture").disabled = true

  //self.location = "index.html"
}); */
  
   
 //proposition
 function afficherProposition(proposition) {
  let zoneProposition = document.querySelector (".zoneProposition")
    zoneProposition.innerText = proposition
 }
 // Fonction pour générer un mot aléatoire à partir de la liste des mots
function genererMotAleatoire(listeMots) {
  const index = Math.floor(Math.random() * listeMots.length);
  return listeMots[index];
}

function lancerJeu() {
  let score = 0;
  let nbMotsProposes = 0;
  let i = 0;
  let listeProposition = listeMots;
  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  afficherProposition(genererMotAleatoire(listeProposition));

  inputEcriture.addEventListener("keyup", (event) => {
    validerMot();
  });

  function validerMot() {
    let proposition = document.querySelector(".zoneProposition").innerText;
    let saisie = inputEcriture.value;

    if (saisie === proposition && saisie.length === proposition.length) {
      score = score + 1;
      i++;
      afficherResultat(score, i);
      afficherCorrect(score);
      afficherErreur(score, i);
      afficherPourcentage(score, i);
      inputEcriture.value = "";

      if (listeProposition[i] === undefined) {
        afficherProposition("Le jeu est terminé");
      } else {
        afficherProposition(genererMotAleatoire(listeProposition));
      }
    }

    if (saisie !== proposition && saisie.length === proposition.length) {
      i++;
      afficherResultat(score, i);
      afficherCorrect(score);
      afficherErreur(score, i);
      afficherPourcentage(score, i);
      inputEcriture.value = "";

      if (listeProposition[i] === undefined) {
        afficherProposition("Le jeu est terminé");
      } else {
        afficherProposition(genererMotAleatoire(listeProposition));
      }
    }
  }

  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let j = 0; j < listeBtnRadio.length; j++) {
    listeBtnRadio[j].addEventListener("change", (event) => {
      if (event.target.value == 1) {
        listeProposition = listeMots;
      } else {
        listeProposition = listePhrases;
      }
      afficherProposition(genererMotAleatoire(listeProposition));
    });
  }
}




//audio


        const audio2 = document.getElementById("audio2");

        document.getElementById("btnLancerMinuteur").addEventListener("click", () => {
          document.getElementById("inputEcriture").disabled = false
            audio2.play();
            intervalId = setInterval(afficherTempsRestant, 1000);
            setTimeout(() => {
                audio2.pause();
                afficherPopup();
            }, 60000);
        }); 

        document.getElementById("btnFermerPopup").addEventListener("click", () => {
          audio2.pause();
          fermerPopup();
          //audio1.play();
          score = 0;
          i = 0; // Assuming 'i' tracks the number of words attempted
         
         
          // Reflect the reset scores in the UI
          afficherResultat(score, i);
          afficherCorrect(score); 
          afficherErreur(score, i);
          afficherPourcentage(score, i);
          // Reinitialize the timer variables
          tempsRestant = 60;
          clearInterval(intervalId); // Stop any existing timer
          document.getElementById("temps").textContent = "00:60"; // Reset the timer display
          document.getElementById("inputEcriture").disabled = true;
          self.location = "index.html"
      });
      /*const audio1 = document.getElementById("audio1"); 
         audio1.addEventListener('canplaythrough', function() {
            audio1.play();
      } );*/

      
      
        const audio1 = document.getElementById("audio1");
        
      
      
      document.addEventListener("DOMContentLoaded", function() {
        audio1.play();
      });
   
  
