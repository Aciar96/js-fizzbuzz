/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna. */ 


// 1- creare un ciclo che conta da 1 a 100 
// 2- se divisibile per 3 scrivi fizz
// 3- se divisibile per 5 scrivi buzz
// 4- se divisibile per 3 AND per 5 scrivi fizzBuzz

//creo un ciclo che conta da 1 a 100
const blackboard = document.getElementById('blackboard');
let content = '';

for (let i = 1; i <= 100; i++) {
  console.log(i);
  content += ` ${i}`;
  if(i % 3){
   // se divisibile per 3 scrivi fizz
  }else if ( i % 5){
      // 3- se divisibile per 5 scrivi buzz
  }else if ( i % 3 || i % 5){
    // 4- se divisibile per 3 AND per 5 scrivi fizzBuzz
  }
}
blackboard.innerHTML = content;