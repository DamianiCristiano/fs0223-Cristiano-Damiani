let nome = document.getElementById('text')
let salva = document.getElementById('salva') 
let elimina = document.getElementById('elimina')

let named = document.getElementById('named')
named.innerHTML= localStorage.getItem('nome')

salva.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.setItem('nome', nome.value)
    named.innerHTML= nome.value
    });


elimina.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('nome')
    });



let second = document.getElementById('contatore');
sessionStorage.setItem('second', 0);

setInterval(function() {
    let timer = sessionStorage.getItem('second');
    timer++;
    sessionStorage.setItem('second' , timer);
    second.innerHTML = sessionStorage.getItem('second')
}, 1000
);


