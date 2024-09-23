// setInterval
// "setInterval(callback, tempo, arg1, arg2, ...)"
// irá ativar o callback toda vez que a quantidade de tempo passar.

function loop(texto){
    console.log(texto);
};

setInterval(loop, 1000, 'Passou 1s');

// loop a cada segundo
let i = 0;
setInterval(() => {
    console.log(i++);
}, 1000);


// clearInterval
// "clearInterval(var)"
// podemos passar um intevalo com o "clearInterval".
// Para isso precisamos atribuir o "setInterval" a uma variável.

const contarAte10 = setInterval(callback, 1000);

let i = 0;
function callback() {
    console.log(i++);
    if( i > 10){
        clearInterval(contarAte10);
    };
};


