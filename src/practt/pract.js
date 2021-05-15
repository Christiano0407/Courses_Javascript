console.log("Hello World"); 

// Bucles  1)======-Do Js

/* function bucleWhile(num) { */
/*  */
/*     let i = 0;  */
/*  */
/*     while(i <= num) { */
/*      console.log(i);  */
/*      i++;  */
/*     } */
/* } */
/* bucleWhile(15);  */
/*  */
/* console.log("Two");  */
/*  */
/* twoBucle = (data) => { */
/*   */
/*     let i = 5;  */
/*  */
/*     while(i < data) { */
/*         console.log(i);  */
/*         i++;  */
/*     } */
/* } */
/* twoBucle(15);  */
/*  */
/* console.log("Three");  */
/*  */
/* threeBucle = (numeros) => { */
/*     */
/*     let i = 10;  */
/*  */
/*    while(i <= numeros || i === 10) { */
/*        console.log(i);  */
/*        i++;  */
/*    } */
/* } */
/*  */
/* threeBucle(20);  */

              //2) ==== DoWhile

/* doFunction = (num) => { */
/*  */
/*  let i = 0;  */
/*  */
/*  do { */
/*      console.log(i);  */
/*      i++;  */
/*  }while(i < num);   */
/*  */
/* } */
/*  */
/* doFunction(10);  */

/* twoWhile = (numero) => { */
/*    */
/*   let i = 5;  */
/*  */
/*   do { */
/*       console.log(i);  */
/*       i++;  */
/*   } while (i <= numero || numero === 15); */
/* } */
/*  */
/* twoWhile(15);  */
/*  */

/* twoFunction = (datos) => { */
/*     let i = 5;  */
/*  */
/*     do { */
/*         console.log(i);  */
/*         i++;  */
/*     } while (i < datos); */
/* } */
/*  */
/* twoFunction(15);  */

    /*3) ===== CICLO FOR */
// FOR(inicialización, condicional, actualización) {}

oneBucle = (num) =>  {
  
    for(let i = 0; i <= num; i++ ) {
        console.log(i); 
    }
}

oneBucle(11); 

const miArray = [1, 2, 3, 4, 5]; 

miArray.forEach((item,index) => {
    console.log(`El valor de la posición ${index} es ${item}`);
})

console.log("De Objeto a Array"); 

/* ====== Objeto a ARRAY */

const libro = {
    titulo: "Aprendiendo Javascript", 
    auto: "Carlos Azaustre", 
    numPaginas: 100, 
    editorial: "Carlos.es", 
    precio: "25.50"
}; 

const props = 
Object.getOwnPropertyNames(libro); 

props.forEach(name => {
    let valor = 
    Object.getOwnPropertyDescriptor(libro, name).value
    console.log(`la prop ${name} contiene: ${valor}`)
}); 
