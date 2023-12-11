let age = 32;
let userName = "Max";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};

let totaladultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

totaladultYears = calculateAdultYears(age);
console.log(totaladultYears);

age = 45;
totaladultYears = calculateAdultYears(age);

console.log(totaladultYears);

let person = {
  name: "Max", // Property
  greet() {
    // Method
    console.log("Hello!");
  },
};

person.greet();
