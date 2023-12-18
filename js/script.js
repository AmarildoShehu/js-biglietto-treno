console.log('JS OK');


//Chiedo quanti km vuole percorrere e quanti anni ha.

const kmDaPercorrere = prompt('inserisci km da percorrere', '25');
const etàPasseggero = prompt('inserisci la tua età', '31');

console.log( kmDaPercorrere, etàPasseggero);

//Calcolo il prezzo del biglietto per km percorsi.

const prezzoPerKm = 0.21;
const prezzoBiglietto = kmDaPercorrere * prezzoPerKm;

console.log(prezzoBiglietto);

//Applico sconto sull'età.
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

if (etàPasseggero < 18){
    prezzoBiglietto *= 0.8;
} else if (etàPasseggero >= 65){
    prezzoBiglietto *= 0.6;
}