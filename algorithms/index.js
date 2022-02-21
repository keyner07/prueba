function amount(amount) {
    const denominaciones =  [2000,1000,500,200,100,50,25,10,5,1];
    let i =0;
    const response = {}
    while(i < denominaciones.length) {
        if(denominaciones[i]<=amount) {
            const denominacion = denominaciones[i];
            response[denominacion] = response[denominacion] ? response[denominacion] +1: 1;
            amount -= denominaciones[i];
        } else {
            i +=1;
        }
    }
    return response;
}

const x = amount(17984);
console.log('Ejercicio de denominaciones')
console.log(x);


function fibonacci(input) {
    let nSuc = 1;
    const posFib = [0,1];
    for(let i=nSuc; i < input; i++) {
        const nextPos = posFib[i-1] + posFib[i];
        posFib.push(nextPos)
    }
    return posFib;
}

const y =  fibonacci(11);
console.log('Ejercicio de fibonacci');
console.log(y);


function arrayRandom(input) {
    const array = Array(input).fill(0);
    for(let i =0; i<input; i++) {
        let nRandom;
        while(true) {
            nRandom = Math.floor(Math.random() * (input + 1));
            if(!array.includes(nRandom)) {
                break;
        }
        }
        array[i] = nRandom;
    }
    return array;
}

const z = arrayRandom(5);
console.log('Ejercicio de numeros aleatorios')
console.log(z);