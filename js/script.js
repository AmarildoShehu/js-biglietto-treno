console.log('JS OK');


//Chiedo quanti km vuole percorrere e quanti anni ha.

const kmDaPercorrere = prompt('inserisci km da percorrere', '25');
const etàPasseggero = prompt('inserisci la tua età', '31');

console.log( kmDaPercorrere, etàPasseggero);

//Calcolo il prezzo del biglietto per km percorsi.

const prezzoPerKm = 0.21;
const prezzoBiglietto = kmDaPercorrere * prezzoPerKm;

console.log(prezzoBiglietto);