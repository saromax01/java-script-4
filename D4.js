/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l3) {
  return l1 * l3;
}
const lunghezza1 = 5;
const lunghezza2 = 10;
const areaRettangolo = area(lunghezza1, lunghezza2);
console.log(areaRettangolo);

//ESERCIZIO 2 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
// La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
//la loro somma moltiplicata per tre.

function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log(crazySum(2, 2));
console.log(crazySum(3, 5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(numero) {
  const differenzaAssoluta = Math.abs(numero - 19);

  if (numero > 19) {
    return differenzaAssoluta * 3;
  } else {
    return differenzaAssoluta;
  }
}
console.log(crazyDiff(15));
console.log(crazyDiff(25));

/*SERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  return (n >= 20 && n <= 100) || n === 400;
}

console.log(boundary(50));
console.log(boundary(15));
console.log(boundary(400));
console.log(boundary(100));

/* ESERCIZIO 5
 

*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}

console.log(epify("JavaScript"));
console.log(epify("EPICODE Python"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(numero) {
  if (numero <= 0) {
    return false;
  }

  return numero % 3 === 0 || numero % 7 === 0;
}

console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(15));
console.log(check3and7(5));
console.log(check3and7(-21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(stringa1) {
  return stringa1.split("").reverse().join("");
}

const stringaOriginale = "EPICODE";
const stringaInvertita = reverseString(stringaOriginale);
console.log(stringaInvertita);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(stringa2) {
  const parole = stringa2.split(" ");
  const paroleConPrimaLetteraMaiuscola = parole.map((parola) => {
    return parola.charAt(0).toUpperCase() + parola.slice(1);
  });
  return paroleConPrimaLetteraMaiuscola.join(" ");
}

const stringaOriginale3 = "questa è una prova";
const stringaModificata = upperFirst(stringaOriginale3);
console.log(stringaModificata);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(stringa) {
  if (stringa.length < 2) {
    return "";
  }

  return stringa.slice(1, -1);
}
const stringaOriginale4 = "panino";
const nuovaStringa = cutString(stringaOriginale4);
console.log(nuovaStringa);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RIsposta*/
function giveMeRandom(n) {
  const numeriCasuali = [];

  for (let i = 0; i < n; i++) {
    const numeroCasuale = Math.floor(Math.random() * 11);
    numeriCasuali.push(numeroCasuale);
  }

  return numeriCasuali;
}
const numeriCasuali = giveMeRandom(5);
console.log(numeriCasuali);
