const express=require("express");
const app=express();
app.use(express.json());
let students=[];
app.get("/students",(req,res)=>{
    res.json(students);
});
app.post("/students",(req,res)=>{
    students.push({name:req.body.name,course:req.body.course});
    res.json(students);
});
app.put("/students/:id",(req,res)=>{
    students[req.params.id].name=req.body.name;
    students[req.params.id].course=req.body.course;
    res.json(students);
});
app.delete("/students/:id", (req, res) => {
    students.splice(req.params.id, 1);
    res.json(students);
});
app.listen(3000);
