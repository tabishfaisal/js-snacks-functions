/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
// Dichiara la funzione qui.
function Greeting(name){
    const currentHour = new Date().getHours(); //restituisce l'ora corrente del sistema in formato 24 ore
    let greet = "";
     if(currentHour <= 13){
        greet = "buongiorno";
     } else if(currentHour <= 17){
        greet = "buon pomeriggio";
     } else {
        greet = "buonasera";
     }

     return `${greet} ${name}`; 
}

console. log(Greeting(name));