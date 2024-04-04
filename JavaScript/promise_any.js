const gf1promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
        {
            resolve("gf1: aaungi")
        }
        else
        {
            reject("gf1: Sorry, nahin aa paungi")
        }
    }, 1000)
});

const gf2promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
        {
            resolve("gf2: aaungi")
        }
        else
        {
            reject("gf2: Sorry, nahin aa paungi")
        }
    }, 2000)
});

const gf3promise=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5)
        {
            resolve("gf3: aaungi")
        }
        else
        {
            reject("gf3: Sorry, nahin aa paungi")
        }
    }, 3000)
});

Promise.any([gf1promise, gf2promise, gf3promise]).then((msg)=>{
    console.log(msg)
}).catch((msg)=>{ 
   // console.log(msg)
    console.log("Join Bajrang Dal")
})