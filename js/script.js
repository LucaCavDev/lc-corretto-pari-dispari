// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// faccio un prompt in cui utente sceglie se pari o Dispari
var pariOdispari = prompt('inserisci pari o dispari');
console.log(pariOdispari);

// faccio un propt in cui utente sceglie il numero
var numeroUser = parseInt(prompt('inserisci un numero'));
console.log(numeroUser);
// mathrandom per il numero del pc
var numeroPc = numeroRandom(5);
console.log(numeroPc);

// somma dei numeri
var somma = (numeroUser + numeroPc);
console.log(somma);

// parte la funzione
// nella funzione controllo se è pari o dispari
var esito = pari(somma);

// se esce quello che ho scelto mi dice che ho vinto
if (pariOdispari === esito){
  document.getElementById('ciao').innerHTML = 'hai vinto';
} else {
  document.getElementById('ciao').innerHTML = 'hai perso';
}

//function numero random da 1 a x
function numeroRandom(i) {
  return Math.floor((Math.random() * i) + 1);
}

// function pariOdispari
function pari(x) {
  if (x % 2 === 0){
    return 'pari';
  } else {
    return 'dispari';
  }
}
