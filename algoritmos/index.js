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
console.log(x);


function fibonacci(input) {
    let nSuc = 1;
    const posFib = [0,1];
    for(let i=nSuc; i < input; i++) {
        const nextPos = posFib[i-1] + posFib[i];
        posFib.push(nextPos)
    }
    console.log(posFib)
}

fibonacci(11);