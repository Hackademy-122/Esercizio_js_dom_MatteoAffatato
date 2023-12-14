// ESERCIZIO 1
//   Lavoriamo sul DOM. Creare 3 paragrafi in HTML e 3 bottoni. 

// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.
// PS: Uniamo le conoscenze che abbiamo appreso finora, come sappiamo quando c'è qualcosa di casuale possiamo utilizzare il Math.random().


const button1 = document.querySelector('#btnCustom1');
const button2 = document.querySelector('#btnCustom2');
const button3 = document.querySelector('#btnCustom3');

const paragrafo = document.querySelectorAll('p');

paragrafo.forEach((p) =>{
    button1.addEventListener('click', () =>{
        p.classList.toggle('disaplayNone')
    })
});

paragrafo.forEach((p) =>{
    button2.addEventListener('click', () =>{
        p.style.color = `rgb(${Math.floor(Math.random() * (255 - 0 + 0) + 0)},${Math.floor(Math.random() * (255 - 0 + 0) + 0)},${Math.floor(Math.random() * (255 - 0 + 0) + 0)})`
    });
});
console.dir(document)


paragrafo.forEach((p) =>{
    button3.addEventListener('click', () =>{
        p.classList.toggle('bolder')
    })
});