// forEach

// let arr = ["Mike", "Tom", "Jane"];

// arr.forEach((name, index) => {
//   console.log(`${index+1}. ${name}`);
// });

// find / findIndex

let arr = [1,2,3,4,5];

const result = arr.find((item) => {
  return item%2==0;
});

console.log(result)

let userList = [
  {name: "Mike", age: 30},
  {name: "Jane", age: 27},
  {name: "Tom", age: 310},

]