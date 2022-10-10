// Chiedere all’utente il suo nome

const nomeUtente = prompt("Inserisci il tuo nome");

// Chiedere all’utente il suo cognome

const cognomeUtente = prompt("Inserisci il tuo cognome");

// Chiedere all’utente il suo colore preferito

const colorePreferito = prompt("Inserisci il tuo colore preferito");

// Generare la password

document.getElementById("password").innerHTML = `
La tua password è <strong>${nomeUtente}${cognomeUtente}${colorePreferito}22</strong>
`
