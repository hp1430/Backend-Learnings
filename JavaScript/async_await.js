console.log("from beginning")

async function hello()
{
    console.log("First Line")

    let data=new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello Students")
        },3000)
    })
    
    let result=await data
    console.log(result)
    console.log("last line")
}
hello()
console.log("From end")