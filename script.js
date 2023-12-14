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