const onePlay = () => {
    return new Promise((resolve, reject) => {
        (true)

        ? setTimeout(() => resolve(`Play the Game!`), 2000)
        : reject(new Error(`Erros the gamme`))
    }); 
}

const twoPlay = async () => {
    const threePlay = await onePlay(); 
    console.log(threePlay); 
}

twoPlay(); 

const playStation = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve("Tienes permiso de jugar")
        : reject(new Error("No!, NO TIENES PERMISO"))
    }); 
}

const never = async () => {
    const neverGamer = await playStation()
    console.log(neverGamer); 
}

never(); 