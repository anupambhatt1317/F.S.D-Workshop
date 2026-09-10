import express from "express";
const app=express();
app.use(express.json());
const userdata=[
    {id:1,name:"John",age:30},
    {id:2,name:"Jane",age:25},
    {id:3,name:"Bob",age:35}
]
app.get("/users",(req,res)=>{
    res.status(200).json({message:"welcome to the user api",data:userdata});
})
app.listen(3000,()=>{
    console.log("Server is running on port number 3000");
})