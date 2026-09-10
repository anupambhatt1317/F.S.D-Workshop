import http from "http";
const userdata=[
    {id:1,name:"John",age:30},
    {id:2,name:"Jane",age:25},
    {id:3,name:"Bob",age:35}
]
const server=http.createServer((req,res)=>{
    //   res.statusCode=201;
    //   res.setHeader("Content-type","text/plane");
    //   res.end("Hello Serever.")
    const url=req.url;
    const method=req.method;
    if(url=="/msg" && method == "GET"){
        res.end("This is welcome message from server");
    }
    else if(url=="/sys" && method == "GET"){
        res.end("This is system information");
    }
    else if(url.startsWith("/delete") && method=="DELETE"){
        const id =url.split("/")[2];
        const index=userdata.findIndex((u)=>u.id == id);
        if(index==-1){
            return res.end("user not found");
        }
        userdata.splice(index,1);
        res.end("User deleted successfully");
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})