console.log("AJAX");
/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/


axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then((res) => {
console.log(res.data.response);

})
.catch((err) => {
console.log(err);

})

