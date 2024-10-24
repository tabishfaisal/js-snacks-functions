/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

// Dichiara la funzione qui.

function haVocali (str){
    const vowel = str.match(/[aeiou]/gi);
    return vowel ? vowel.length : 0;
}
const word = "javascript";
const numerodiVocali = haVocali(word);
console. log(numerodiVocali);

// altrimenti possiamo usare il metodo filter
// ovviamente prima converto la string a Array poi faccio uscire un output di vocali

function haVocali(str){
    const vowels = 'aeiouAEIOU';

    const vowelArray = [...str].filter(char => vowels.includes(char));

    return vowelArray.length;
}

const parola = "javascript";
const vocali = haVocali(parola);
console. log(vocali);