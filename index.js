// 01. You are given an array of car objects, each with a "name" and "topSpeed" property. You also have a river object with a "name" and "currentSpeed" property. Write a function that takes in the car array and river object as arguments and returns the name of the car with the highest net speed (topSpeed - currentSpeed) across the river.

let car = [
  {
    name: "Audi",
    topSpeed: 320,
  },
  {
    name: "Toyota",
    topSpeed: 202,
  },
  {
    name: "Volvo",
    topSpeed: 180,
  },
];

let river = {
  name: "Padma",
  currentSpeed: 100,
};

function calcSpeed(car, river) {
  for (i = 0; i < car.length; i++) {
    console.log(`${car[i].name}: ${car[i].topSpeed - river.currentSpeed}`);
  }
}

calcSpeed(car, river);
//02. You have an array of shopping items, each with a "name" and "price" property. You also have a budget limit. Write a function that takes in the shopping array and budget as arguments and returns the total price of the items that fit within the budget.

let shoppingItems = [
  {
    name: "Shoe",
    price: 1500,
  },
  {
    name: "Panjabi",
    price: 1200,
  },
  {
    name: "tupi",
    price: 200,
  },
  {
    name: "ator",
    price: 13,
  },
];
let totalPrice = 0;
let budgetLimit = 3000;

function shoppingCart(shoppingItems, budgetLimit) {
  for (i = 0; i < shoppingItems.length; i++) {
    totalPrice += shoppingItems[i].price;
  }
  if (totalPrice >= budgetLimit) {
    console.log("budget low");
  } else if (budgetLimit >= totalPrice) {
    console.log(`My Shopping total price is: ${totalPrice}`);
  }
}

shoppingCart(shoppingItems, budgetLimit);
//03. You are given an array of numbers. Write a function that takes in this array and another function as inputs. The input function should perform a transformation on each element in the array. The main function should then return the transformed array.

let arr = [3, 2, 43, 22, 1, 2];

function inputEl(arr) {
  const el = arr.map((transformArr) => transformArr * 2);
  console.log(el);
}

function mainFun(arr, inputEl) {
  return inputEl(arr);
}

mainFun(arr, inputEl);
