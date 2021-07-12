var num=parseInt(prompt("ingrese un número que esté entre 1 y 20"));

function factorial(i) {
    if (i > 1) {
        return i * factorial(i - 1);
    }
    else{
        return 1;
    }
}

function multi() {
    for (var i=1; i<= num; i= i+1){
        console.log(num +' x '+i +'= '+num*i);
        }
}

function numfactorial() {
    for (var i=1; i<= num; i= i+1){
        numfact=factorial(i)
        console.log('El factorial de '+i +' es: ' +numfact)
        }
}

function numero(){
    if (num<1||num>20){
        console.log("Número fuera de rango")
        }
    else{
        multi()
        numfactorial()
    }
}

numero()


