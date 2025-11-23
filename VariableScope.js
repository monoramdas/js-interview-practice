console.log("variable scope");

console.log("before declareing var a=",a)
// console.log("before declareing let b=",b) 

var a=10;
let b=12;
const c=15;


// scope

{
    // let d=16;
    let b=20;
    console.log("inside scope",b)
}
console.log("outside scope",b)

const fn=()=>{
    var b=20;
    var a=12;
    console.log("inside function",a,"b=>>",b)
}
fn();
