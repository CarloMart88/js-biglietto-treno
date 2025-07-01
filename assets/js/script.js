// Ciao ragazzi,
// esercizio di oggi: Biglietto del treno
// cartella/repo js-biglietto-treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Realizzate prima un file README.md in cui mettere il testo dell'esercizio e scomponente il problema in sotto problemi. 
// Numero minimo di push: 5

// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60

// Buon lavoro! 

//definizione variabili 

const age = parseInt(prompt("Inserisci la tua età"))
const percorso = parseInt(prompt("Inserisci il numero dei km del percorso  "));

let price = ;

let discountBaby = ;
let discountOld = ;
let ticket = ;

console.log(age)
console.log(percorso)


if (age < 18 ) {

  price = (percorso * 0.21)  ;

  discountBaby = (price * 20)/100 ;

  ticket = price - discountBaby ;

}else if (age > 65) { 

  price = (percorso * 0.21)  ;

  discountOld = (price * 40)/100 ;

  ticket = price - discountOld ;

}else (age > 18 && age <= 65 ) {

  price = (percorso * 0.21) 

}

console.log(ticket)