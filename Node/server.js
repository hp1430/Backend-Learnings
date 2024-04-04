const http = require("http")

const server = http.createServer((request, response)=>{
    if(request.url=="/hello"){
        response.end("Hello World !")
    }
    else{
        response.end("You are trying to hit a wrong URL")
    }
})

server.listen(8080, ()=>{
    console.log("Server is started...")
})