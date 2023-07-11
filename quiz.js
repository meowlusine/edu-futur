// questions quiz sous forme de liste
const listeQuestion = [
    {
      question: "L'air à l'intérieur d'une habitation est-il plus ou moins pollué que l'air extérieur ?",
      responses: {
        a: "moins",
        b: "plus",
        c: "pareil"
      },
      bonneRep: "b"
    },
    {
      question: "Lequel de ces moyens de transport est le plus écologique?",
      responses: {
        a: "routier",
        b: "ferroviaire",
        c: "aérien"
      },
      bonneRep: "b"
    },
    {
      question: "En combien de temps un sac en plastique se décompose-t-il ?",
      responses: {
        a: "400 ans ",
        b: "1000 ans",
        c: "100 ans"
      },
      bonneRep: "a"
    },
    {
      question: "En France, lequel de ces objets ne doit pas aller dans la poubelle de recyclage ?",
      "responses": {
        a: "aérosols",
        b: "bidons de lessive",
        c: "essuie-tout usagé"
      },
      bonneRep: "c"
    },
    {
      question: "Quelle est la consommation d'eau pour une chasse d'eau tirée ?",
      responses: {
        a: "6 litres",
        b: "10 litres",
        c: "12 litres"
      },
      bonneRep: "c"
    },
    {
      question: "Quelle serait la température de la Terre sans atmosphère ?",
      responses: {
        a: "15°C",
        b: "0 °C",
        c: "-18°C"
      },
      bonneRep: "c"
    },
    {
      question: "Combien de kilogrammes d'ordures ménagères un français jette-t-il par jour ?",
      responses: {
        a: "1 kg",
        b: "3 kg",
        c: "5 kg"
      },
      bonneRep: "a"
    },
    {
      question: "Diminuer son chauffage de 20°C à 19 °C permet de réaliser une économie estimée à...",
      responses: {
        a: "2% d'économie d'énergie",
        b: "4% d'économie d'énergie",
        c: "7% d'économie d'énergie"
      },
      bonneRep: "c"
    }
];
  
// score
  
let score = 0;
  
function verification(){
  }
  
  
///////////////////////////////////////////

// fonction pour generer quiz

function genererQuiz(listeQuestion,quizBoite,resBoite,boutonEnvoie){
  function affichage(listeQuestion,quizBoite){
    var output = [];
    var res;
    for (var i=0; i<listeQuestion.length;i++){
      res = [];
      for(lettre in listeQuestion[i].responses){
        res.push('<label>'
					+ '<input type="radio" name="question'+i+'" value="'+lettre+'">'
					+ lettre + ': '
					+ listeQuestion[i].responses[lettre]
				+ '</label>'
			);
      }
      output.push('<div class="question">' + listeQuestion[i].question + '</div>'
			+ '<div class="res">' + res.join('') + '</div>');
    }
    console.log(output);
    quizBoite.innerHTML = output.join('');
  }

  function montrerRes(listeQuestion,quizBoite,resBoite){
    var resBoite = quizBoite.querySelectorAll('.res');
    var resUtilisateur = '';
    var score = 0;
     
    for(let i=0; i<listeQuestion.length; i++){
      resUtilisateur = (resBoite[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      if (resUtilisateur === listeQuestion[i].bonneRep){
        score++;
        resBoite[i].style.color = 'lightgreen';
      } 
      else{
        resBoite[i].style.color = 'red';
      }
    }
    let niv;
    let ima;
    if(score<3){
      niv = "Bulbizarre (Débutant)";
      ima = "bulb.jpg"
    }
    else if (score<6){
      niv = "Herbizarre (Intermédiaire)";
      ima = "herb.jpg"
    }
    else{
      niv = "Florizarre (Expert)";
      ima = "flor.jpg"
    }
    var affiche ='<div id="ccl">vous avez eu '+score+' points sur 8, vous êtes un '+niv+"<img style='width:50px;' src='"+ima+"'></img></div>"; 
    console.log(affiche);
    document.getElementById('ccl').innerHTML =affiche;    
  }
  affichage(listeQuestion,quizBoite);
 
  boutonEnvoie.onclick = function(){
    montrerRes(listeQuestion,quizBoite,resBoite);
  }
};

var quizBoite = document.getElementById('quiz');
var resBoite = document.getElementById('resulats');
var boutonEnvoie = document.getElementById('envoyer');
genererQuiz(listeQuestion,quizBoite,resBoite,boutonEnvoie);
