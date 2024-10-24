/* Scrivi una funzione che accetti un'array di stringhe e una lettera
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function wordwithA (names,letter) {

    const uppercaseLetter = letter.toUpperCase();

    return names.filter(name => name.charAt(0).toUpperCase()=== uppercaseLetter);
    // Invoca la funzione qui e stampa il risultato in console
}
// Invoca la funzione qui e stampa il risultato in console
const result = wordwithA(names, 'A');
console. log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]