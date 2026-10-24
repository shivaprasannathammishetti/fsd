const add = (a, b) => a + b;
console.log(add(2, 3));
function greet(name,callback){
  console.log("hello"+name);
  callback();
}
greet("shiva",()=>console.log("callback called"));
let p=new Promise((resolve)=>{resolve("success")});
p.then((result)=>console.log(result));
async function run(){
  let result=await p;
  console.log("await got :"+result);
}
run();