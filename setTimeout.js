// setTimeout()
// "setTimeout(callback, tempo, arg1, arg2, ...)" método assíncrono que ativa o callback após "tempo".
// Não existe garantia que o código será executado exatamente após o tempo,
// pois o callback entra na fila e espera Call Stack estar vazia.

function espera(texto){
    console.log(texto);
};

setTimeout(espera, 1000, 'Depois de 1s');


// Imediato
// Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na "fila" imediatamente para ser executado.
// Podemos passar uma função anônima diretamente com argumentos.

setTimeout(() => {
    console.log('Apos 0s?');
});


// Loops e setTimeout
// Um loop é executado rapidamente, em millissegundos.
// Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados á Web Api praticamente no mesmo tempo.
// Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.

for(let i = 0; i < 20; i++){
    setTimeout(() => {
        console.log(i);
    }, 300);
};


// Corrigindo o Loop
// Agora ele está multiplicando o tempo por "i".
// Assim o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim por diante.
for(let i = 0; i < 20; i++){
    setTimeout(() => {
        console.log(i);
    }, 300 * i);
};



// This e Window
// setTimeout é um método do objeto Window.
// O valor de "this" dentro do mesmo callback é uma referência ao seu objeto no caso "Windown".

const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick(event){
    setTimeout(function() {
        this.classList.add('active');
    }, 1000);
};

// Erro pois windown.classList não existe