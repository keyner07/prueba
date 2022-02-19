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
    let nSuc = 2;
    const posFib = [0,1];
    console.log(posFib[0])
    while(nSuc < input) {
        const nextPos = posFib[0] + posFib[1];
        posFib[0] = posFib[1];
        posFib[1] = nextPos;
        nSuc++;
        console.log(posFib[1])
    }
}

fibonacci(11);