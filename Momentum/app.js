// alert('hi');

// console.log("lalalalala"); 
// const amIFat = true;
// console.log(amIFat);

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sund";

// const daysOfWeek = [mon,tue,wed,thu,fri,sat,sun];

// const nonsense = [1,2,"hello", false, null, true, undefined,"nico"];

// console.log(daysOfWeek);
// console.log(nonsense);

// daysOfWeek.push("holiday");
// console.log(daysOfWeek);


//Objects
// const player = {
//   name: "nico",
//   points: 10,
//   fat: true
// };
// console.log(player.name);
// console.log(player["name"]);
// player.fat = false;
// console.log(player.fat);
// player.lastName = "potato";
// console.log(player);

function sayHello(){
  console.log("Hello!");
}

sayHello();

function sayHello(nameOfPerson, age){
  console.log(nameOfPerson);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

const player = {
  name: "nico";
  sayHello: function (otherPersonName) {
    console.log("hello "+ otherPersonName);
  },
}

player.otherPersonName("nico");