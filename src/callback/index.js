function sum(num1, num2) {
   return num1 + num2; 
}

function calc(num1, num2, callback) {
    return callback(num1, num2); 
}

console.log(calc(5, 10, sum)); 

/*  TWo */

function date(callback) {
    console.log(new Date); 
    setTimeout(function () {
        let date = new Date;
        callback(date) 
    }, 2000); 
}

function princeDate(dateNow) {
    console.log(dateNow);
}
date(princeDate); 

/* Request */
/* 1- XMLHttpRequest => Antes de Fetc(Promesa), porque, así, se usaba antes.  */
/* 2- fetch => es una promesa = Actual.  */