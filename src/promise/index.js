/*PROMESAS*/

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
    if(true) {
        resolve("Muy bien!"); 
    }else {
        reject(`Esto, está mal!`); 
    }
    }); 

}; 

somethingWillHappen()
.then(Response => console.log(Response))
.catch(error => console.error( error)); 
