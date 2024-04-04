// Simran's Promise

const simranPromise=new Promise((resolve, reject)=>{
    let parentDecision=true;
    if(parentDecision)
    {
        resolve("Yayy, ab shadi ki taiyaari kro :)")
    }
    else
    {
        reject("Papa ne koi or dhoond liya hai :(")
    }
});

simranPromise.then((msg)=>{
    console.log("Simran's Message: ", msg)
    console.log("Destination Wedding krenge...")
}).catch((msg)=>{
    console.log("Simran's Message: ", msg)
    console.log("Jeevan barbaad ben stokes...")
}).finally(()=> console.log("Pyaar Mohabbat Dhoka hai, padhle beta, yhi mauka hai...")) 