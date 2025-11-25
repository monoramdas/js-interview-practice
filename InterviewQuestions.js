// Questins 1.

const Students = [
  { name: "ram", age: 24 },
  { name: "rajan", age: 20 },
  { name: "rakesh", age: 22 },
  { name: "Monu", age: 22 },
  { name: "mukesh", age: 20 },
  { name: "Saran", age: 20 },
];

// reduce to an object of age count
const res = Students.reduce((accumulator, current) => {
  accumulator[current?.age] = (accumulator[current?.age] || 0) + 1;
  return accumulator;
}, {});

// reduce to an object containing names according to the age
const res2 = Students.reduce((accumulator, current) => {
  if (!accumulator[current?.age]) {
    accumulator[current.age] = [];
  }
  accumulator[current.age].push(current.name);
  return accumulator;
}, {});

console.log("Given Array of Object", Students);
console.log("result=>>>", res);
console.log("result2=>>>", res2);

// =====================================================

// Questions 2

const array = [1, 2, 3, [4, 5, 6, 7, [8, 9, 10], 11], 12];

const ConvertToFlat = (array) => {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = [...flatArray, ...ConvertToFlat(array[i])];
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};

console.log(
  "given Array===>",
  array,
  "\nFlatten Array=>>",
  ConvertToFlat(array)
);

// ===========================================================

// 3. Promise Output based Questions
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (true) {
          resolve("done !!")
      }
      reject('failed')
 }, 3000)
})
console.log("p1",p1)

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (true) {
          resolve("done !!")
      }
      reject('failed')
 }, 2000)
})
console.log("p2",p2)


console.log("1. Synchronous log");
setTimeout(() => {
  console.log("5. setTimeout with 0ms");
}, 0);
Promise.resolve().then(() => {
  console.log("3. First Promise then");

  Promise.resolve().then(()=>{
    console.log("nested promise")
  })
});
const promise= new Promise((resolved,reject)=>{
  console.log("inside promise constructor")
  resolved(2)
  let promise =new Promise((res,rej)=>{
    res(4)
  })
  promise.then(val=>{
    console.log("val",val)
  })
})
promise.then((value)=>{
  console.log("promise fullfill",value);
})


// async function asyncFunc() {
//   console.log("2. Inside async function");
//   await Promise.resolve().then(()=>{
//     console.log("promise inside async function")
//   });
//   console.log("4. After await inside async function");
// }
// asyncFunc();
console.log("6. After async function call");

