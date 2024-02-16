// Первое задание

let wallet = prompt("Введите сумму денег в кошельке:");
let chocolatePrice = prompt("Введите цену одной шоколадки:");

{
  let numberOfChocolates = Math.floor(wallet / chocolatePrice);

  alert("Вы можете купить " + numberOfChocolates + " шоколадок");
}

let pulGabi = prompt("Введите сумму денег в кошельке:");
let carPrice = prompt("Введите цену одной машины:");

{
  let numberOfCars = Math.floor(pulGabi / carPrice);

  alert("Вы можете купить " + numberOfCars + " Машин");
}

// // Второе задание

// let userInput = prompt("Введите трехзначное число:");

// !isNaN(number) && userInput.length === 3;
// let reverseNumber =
//   (number % 10) * 100 +
//   Math.floor((number % 100) / 10) * 10 +
//   Math.floor(number / 100);

// alert(reverseNumber);

// Третье задание

let user = prompt("Введите целое число:");

let number = parseInt(user);

let isEven = number % 2 === 0;

alert("Число " + number + (isEven ? " четное." : " нечетное."));

// Четвертое задание

let userName = prompt("Введите ваш возраст:");

if (userName <= 2) {
  alert("Вы ребенок");
} else if (userName >= 12 && userName <= 18) {
  alert("Вы подросток:");
} else if (userName >= 18 && userName <= 60) {
  alert("Вы взрослый:");
} else if (userName > 60) {
  alert("Вы пенсионер");
}

// Пятое задание

let userSur = prompt("Введите число от 1 - 9");

switch (userSur) {
  case "1":
    alert("!");
    break;

  case "2":
    alert("@");
    break;

  case "3":
    alert("#");
    break;

  case "4":
    alert("%");
    break;

  case "5":
    alert("^=^");
    break;

  case "6":
    alert("*=*");
    break;

  case "7":
    alert("=_+");
    break;

  case "8":
    alert("_=_");
    break;

  case "9":
    alert("-_-");
}

//Шестое задание

let userYear = prompt("Введите год:");

if (userYear % 400 === 0 || userYear % 4 === 0) {
  alert("Год высокосный");
} else userYear % 100 === 0;

{
  alert("Год не высокосный");
}
