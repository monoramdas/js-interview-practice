"use strict";

console.log("welcome");

const users = [1, 2, 3, 4, 5];
const mockurl = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;

async function A() {
  for (let user of users) {
    const res = await fetch(mockurl(user));
    const data = await res.json();
    console.log(data);
  }

  console.log("all done");
}

A();

// this inside global space

console.log("this in global space", this);

// this inside a regular function

const objRegular = {
  name: "monoram",
  age: 25,
  regularFunction(location) {
    console.log("this inside reg obj", this.name,"location: ",location);
  },
};

const obj2={
    name:"shilpi"
}

objRegular.regularFunction.call(obj2,"kolkata")


objRegular.regularFunction("mumbai")

function regularFunction() {
  console.log("this inside reg. func", this);
}

window.regularFunction();

// this inside an arrow function
const arrowFunction = () => {
    console.log("in arrow function", this);
};

arrowFunction();


const arrowObj={
  name:"monoram",
  arrow:function (){
    console.log("this",this)
    function a(){
        console.log("this inside arrow obj",this.name);
    }
    a.call(this)

  }   
}

arrowObj.arrow()