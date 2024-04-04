const fs=require('fs')

// console.log("Starting")

// fs.readFile("text.txt", (err, content)=>{
//     if(err) return console.log(err)
//     console.log("Content is: "+content)
// })

// // const content=fs.readFileSync("./text.txt")
// // console.log("The file content is: "+content)

// console.log("Ending")


// Writing into files
console.log("Starting")

//fs.writeFileSync("output1.txt", "Hello Bacchhooo")

fs.writeFile("output1.txt", "Hello Bacchhoo", err=>{
    if(err) return console.log(err)
    console.log("Written Successfully")
})

console.log("Ending")