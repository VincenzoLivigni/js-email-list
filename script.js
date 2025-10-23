console.log("AJAX");
/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

// creo elemento della DOM
const listaEl = document.getElementById("lista")

// con un loop moltiplico gli indirizzi email randomici
for (let i = 0; i < 10; i++) {

// genero un indirizzo mail randomico 
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((res) => {
    // creo una variabile d'appoggio nella quale aggiungo la mail
       const randomEmail = res.data.response;
       console.log(randomEmail);

// stampo a schermo le 10 email in una lista
listaEl.innerHTML += `<li>${randomEmail}</li>`;
})
}
