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
