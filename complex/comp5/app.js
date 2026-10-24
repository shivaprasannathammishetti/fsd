const express=require("express");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());
app.post("/login",(req,res)=>{
    if(req.body.username=="admin"&&req.body.password=="1234")
        res.send(jwt.sign({username:"admin"},"secret"));
    else
        res.status(401).send("invalid");
});
function checkToken(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];
        jwt.verify(token,"secret");
        next();
    } catch(err){
        res.status(401).send(err.message);
    }

}
app.get("/profile",checkToken,(req,res)=>{
    res.send("welcome admin");
});
app.listen(3000);