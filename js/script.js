// Chiedere all’utente il suo nome

let nomeUtente = prompt("Inserisci il tuo nome");

// Chiedere all’utente il suo cognome

let cognomeUtente = prompt("Inserisci il tuo cognome");

// Chiedere all’utente il suo colore preferito

let colorePreferito = prompt("Inserisci il tuo colore preferito");

// Generare la password

document.getElementById("password").innerHTML = `
La tua password è <strong>${nomeUtente}${cognomeUtente}${colorePreferito}22</strong>
`
