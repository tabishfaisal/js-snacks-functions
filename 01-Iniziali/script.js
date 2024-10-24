/* Scrivi una funzione che accetti un array di nomi
restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function getInitials(names) {
    const initials = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        initials.push(name.charAt(0).toUpperCase());
    }

    return initials;
}
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
const initials = getInitials(names);
console.log(initials);
