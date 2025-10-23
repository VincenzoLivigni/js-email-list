console.log("AJAX");
/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

// con un loop moltiplico gli indirizzi email randomici
for (let i = 0; i < 10; i++) {

// genero un indirizzo mail randomico 
axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((res) => {
console.log(res.data.response);

})
}
