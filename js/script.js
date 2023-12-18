console.log('JS OK');


//Chiedo quanti km vuole percorrere e quanti anni ha.

let KmDaPercorrere = prompt("Quanti chilometri vuoi percorrere?", '21');
let etàPasseggero = prompt("Quanti anni hai?" );

console.log( KmDaPercorrere, etàPasseggero);

//Calcolo il prezzo del biglietto per km percorsi.

const prezzoAKm = 0.21;
let prezzoTotale = KmDaPercorrere * prezzoAKm;

//Applico sconto sull'età.
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

if (etàPasseggero < 18) {
    prezzoTotale *= 0.8;
} else if (etàPasseggero >= 65) {
    prezzoTotale *= 0.6;
}

//prezzo finale con massimo due decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Mostra il prezzo finale all'utente
console.log(`Il prezzo del viaggio è di € ${prezzoTotale}`);

document.getElementById("prezzototale").innerText = "il costo del Boglietto é " + prezzoTotale ;

