// let number = 1;
// console.log(number % 2);
// if (number % 2 === 0 && number > 10) {
//   console.log("tegsh 10-s ih ");
// } else if (number % 2 === 0 && number < 10) {
//   console.log("tegsh 10-s baga ");
// } else if (number % 2 !== 0 && number > 10) {
//   console.log("sondgoi 10-s ih ");
// } else if (number % 2 !== 0 && number < 10) {
//   console.log("sondgoi 10-s baga ");
// }

// let y = 89;
// if (y >= 90 && y < 101) {
//   console.log("A");
// } else if (y >= 80 && y < 89.9) {
//   console.log("B");
// } else if (y >= 70 && y < 79.9) {
//   console.log("C");
// } else if (y >= 60 && y < 69.9) {
//   console.log("D");
// } else if (y >= 0 && y < 59.9) {
//   console.log("F");
// }

// let p = 9;
// if (p === 1) {
//   console.log("Monday");
// } else if (p === 2) {
//   console.log("Tuesday");
// } else if (p === 3) {
//   console.log("Wednesday");
// } else if (p === 4) {
//   console.log("Thursday");
// } else if (p === 5) {
//   console.log("Friday");
// } else if (p === 6) {
//   console.log("Saturday");
// } else if (p === 7) {
//   console.log("Sunday");
// } else if (p > 8) {
//   console.log("zail");
// }

// let number = 9;
// if (number > 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

// let n1 = 1;
// let n2 = 2;
// let n3 = 3;
// if (n1 > n2 && n1 > n3) {
//   console.log("n1 ih");
// } else if (n2 > n1 && n2 > n3) {
//   console.log("n2 ih");
// } else if (n3 > n1 && n3 > n2) {
//   console.log("n3 ih");
// }

// let wei = 75;
// let hei = 185 / 100;
// let hi = wei / hei ** 2;
// if (hi < 18.5) {
//   console.log("dutagdaltai");
// } else if (hi >= 18.5 && hi < 24.9) {
//   console.log("eruul");
// } else if (hi >= 24.9 && hi < 30) {
//   console.log("iludel");
// } else if (hi >= 30) {
//   console.log("targan");
// }

// let day = 0;
// let dayName;
// switch (day) {
//   case 1:
//     dayName = "monday";
//     break;
//   case 2:
//     dayName = "tuesday";
//     break;
//   case 3:
//     dayName = "wednesday";
//     break;
//   case 4:
//     dayName = "thursday";
//     break;
//   case 5:
//     dayName = "friday";
//     break;
//   case 6:
//     dayName = "saturday";
//     break;
//   case 7:
//     dayName = "sunday";
//     break;
//   default:
//     dayName = " invalid day ";
// }
// console.log(dayName);

// let person = "galt";
// let text;
// switch (person) {
//   case "dulma":
//     text = "dulma irsen";
//     break;
//   case "galt":
//     text = "galt irsen";
//     break;
//   case "chodog":
//     text = "chodog irsen";
//     break;
//   case "tulga":
//     text = "tulga irsen";
//     break;
//   case "ursgal":
//     text = "ursgal irsen";
//     break;
//   default:
//     text = " zail ";
// }
// console.log(text);

// ternori
// let age = 18;
// let message = age >= 18 ? "ta nasand hurse" : "ta nasand huregu";
// console.log(message);

// let currencyFrom = window.prompt(
//   "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyFrom) {
//   case "1":
//     currencyFrom = 3450;
//     break;
//   case "2":
//     currencyFrom = 1;
//     break;
//   case "3":
//     currencyFrom = 480;
//     break;
//   case "4":
//     currencyFrom = 38;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// let value = window.prompt("End toon utga oruulna uu ?");
// let currencyTo = window.prompt(
//   "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyTo) {
//   case "1":
//     currencyTo = 3450;
//     break;
//   case "2":
//     currencyTo = 1;
//     break;
//   case "3":
//     currencyTo = 480;
//     break;
//   case "4":
//     currencyTo = 38;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// window.alert((currencyFrom * value) / currencyTo);

// let baraniune = window.prompt(
//   "yamar bara awah we ? \n1. cola 1200 \n2. sprite 1500 \n3. alpen gold 2000 \n4. suu 2200 \n5. talh 1000 \n6. zairmag 500 \n7. bohi 150 \n8.arhi 15000"
// );
// switch (baraniune) {
//   case "1":
//     baraniune = 1200;
//     break;
//   case "2":
//     baraniune = 1500;
//     break;
//   case "3":
//     baraniune = 2000;
//     break;
//   case "4":
//     baraniune = 2200;
//     break;
//   case "5":
//     baraniune = 1000;
//     break;
//   case "6":
//     baraniune = 500;
//     break;
//   case "7":
//     baraniune = 1500;
//     break;
//   case "8":
//     baraniune = 15000;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// let dewsgert = window.prompt(
//   "orulah dewsgerte songono uu ? \n1. 5000 \n2. 10000 \n3. 20000"
// );
// switch (dewsgert) {
//   case "1":
//     dewsgert = 5000;
//     break;
//   case "2":
//     dewsgert = 10000;
//     break;
//   case "3":
//     dewsgert = 20000;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// window.alert = dewsgert - baraniune;

// const name = window.prompt("nere bich");
// const second = window.prompt("ovgo orul ");
// function nerbichne(firstname, secondname) {
//   console.log("hi", firstname, secondname);
// }
// nerbichne(name, second);

// function tonimashin() {
//   let a = prompt("ehni too bich");
//   let temdeg = prompt("orulah temdegtuud ? \n1.* \n2. % \n3. + \n4.-");
//   let b = prompt("2dahi too bich");
//   let zaa;
//   switch (temdeg) {
//     case "1":
//       zaa = a * b;
//       break;
//     case "2":
//       zaa = a % b;
//       break;
//     case "3":
//       zaa = a + b;
//       break;
//     case "4":
//       zaa = a - b;
//       break;

//     default:
//       console.log("Buruu orolt");
//   }
//   console.log(`${zaa}`);
//   return zaa;
// }
// tonimashin();

// let names = ["Bat", "Baldan", "Dulmaa", "Gonchig", "Luubat", "Manjin"];
// let index = 0;
// while (index < 6) {
//   console.log(names[index]);
//   index++;
// }

// // toni-niilber-olno
// let sum = 0;
// let i = 1;
// let a = prompt("yamr negen too orul");
// while (i <= a) {
//   console.log((sum = sum + i)), i++;
// }
// window.alert(sum);

// let randomNumber = 48;
// let a = prompt("1-100-giin hoorondoh random toog oloroi");
// while ((randomNumber = a)) {
//   console.log();
// }

// let i = 0;
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.leght; i++) {
//   console.log(arr[i]);
// }

// // garas ogson tooni zergiig olno 1000-aas ih boltol
// let number = window.prompt("too orul");
// let result = 0;
// let power = 1;
// while (result < 1000) {
//   result = number ** power;
//   if (result > 1000) {
//     window.alert(`${number}-iin ${power} zereg 1000-aa ih bn `);
//     window.alert(result);
//   }
//   power++;
// }

// // gras ogson toonii tegsh tooni niilber
// let number = window.prompt("yamar neg too bichde");
// if (isNaN(number)) {
//   window.alert("bru utga bn");
// } else {
//   let result = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//   }
//   console.log(`${number}-iin tegsh tooni niilber ${result}`);
// }