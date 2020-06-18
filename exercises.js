// OLD CODE.MU

////////  LESSON 2  ////////

//// EXERCISE 1

const str = "abcde";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);
console.log(str[4]);

//// EXERCISE 2

const hours = 9;
const howSecondsInHour = hours * 360;

console.log(howSecondsInHour + "s");

//// EXERCISE 3

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 2.5;
num++; // num += 1 === num = num + 1
num--; // num -= 1 === num = num - 1
console.log(num);

//// Work with variables

const a = 10;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const c = 15;
const d = 2;
const result = c + d;
console.log(result);
const e = a - b;
const res = e + d;
console.log(res);

//// Work with strings

const string = "Hello World!";
const string2 = "How are U?";

console.log(string + string2);

const name = "Slava";
console.log("Hi," + " " + name);

//// String characters(obrashenie k simvolam stroki)

const num1 = "12345";
console.log(num1[0] * num1[1] * num1[2] * num1[3] * num1[4]);

//// prompt

// const yourName = prompt("What is your name?", "slava");
// alert("Your name:" + yourName);
// console.log(yourName);

// const yourName = +prompt("input number", "5");
// console.log(yourName*yourName);
// alert(yourName**2)

//// PRACTICE

const hour = 12;
const minute = 16;
const second = 45;
console.log(hour + ":" + minute + ":" + second);

var num = 10;
num += 1;
num += 1;
num -= 1;
console.log(num);

////////  LESSON 3  ////////

//// WORK WITH ARRAYS

arr = ["a", "b", "c", "d"];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[0] + "+" + arr[1], arr[2] + "+" + arr[3]);

arrNumbers = [2, 5, 3, 9];

const resultNumbers =
  arrNumbers[0] * arrNumbers[1] + arrNumbers[2] * arrNumbers[3];

console.log(resultNumbers);

//// ASSOCIATED OBJECT

var obj = { a: 1, b: 2, c: 3 };
console.log(obj["c"]);

var objSalary = { kolja: "1000", Jack: "2500", Lois: "1750" };

console.log(objSalary["Lois"]);

const day1 = 1;

var objWeek = {
  day1: "Mon",
  2: "Tues",
  3: "Wed",
  4: "Thur",
  5: "Fri",
  6: "Sat",
  7: "Sun",
};

console.log(objWeek["day1"]);

//// Multi-dimensional arrays

const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(multiArr[1][0]);

const multiObj = { js: ["jQuery", "Angular"], php: "hello", css: "world" };

console.log(multiObj["js"][0]);

const lang = {
  ru: {
    day: "Пон",
    // (2: "Втор"),
    // (3: "Сред"),
    // (4: "Чет"),
    // (5: "Пят"),
    // (6: "Суб"),
    // (7: "Воск"),
  },
  en: {
    day1: "Mon",
    // (2: "Tues"),
    // (3: "Wed"),
    // (4: "Thur"),
    // (5: "Fri"),
    // (6: "Sat"),
    // (7: "Sun"),
  },
};

console.log(lang["en"]["day1"]);

////////  LESSON 4  ////////

//// if-else

const t = 5;

if (t == 0) {
  // одиночное равно зарезервировано за присваиванием.
  //   На самом деле оно работает так:
  //   переменной t присвоить 0,
  //   если удалось присвоить - то выведи 'верно',
  //   иначе (если не удалось присвоить) выведи 'неверно'.
  // if (t = 0) alert('Верно!'); else alert('Неверно!'); всегда будет выводить 'Верно!'
  console.log("true");
} else {
  console.log("false");
}

if (t > 0) {
  console.log("true");
} else {
  console.log("false");
}

if (t < 0) {
  console.log("true");
} else {
  console.log("false");
}
if (t >= 0) {
  console.log("true");
} else {
  console.log("false");
}

if (t <= 0) {
  console.log("true");
} else {
  console.log("false");
}

if (t != 0) {
  console.log("true");
} else {
  console.log("false");
}

console.log(typeof arr);

if (t == "test") {
  console.log("true");
} else {
  console.log("false");
}

const test = false;

if (test == true) {
  console.log(true);
} else {
  console.log(false);
}

console.log(typeof test);

if (test !== true) {
  console.log(true);
} else {
  console.log(false);
}

if (t !== 3) console.log("pisja");
else console.log("sisja");

const g = 3;
const h = 5;

if (g > 0 && g < 5) {
  console.log("yes");
} else {
  console.log("no");
}

if (g == 0 || g == 2) {
  console.log(g + 7);
} else {
  console.log(g / 10);
}

if (g <= 1 && h >= 3) {
  console.log(g + h);
} else {
  console.log(g - h);
}

if ((g > 2 && g < 11) || (h >= 6 && h < 14)) {
  console.log("yes");
} else {
  console.log("no");
}

//// switch-case

const num2 = 1;

switch (num2) {
  case 1:
    console.log("spring");
    break;
  case 2:
    console.log("summer");
    break;
  default:
    console.log("loh");
}

const day = -54;
if (day > 0 && day < 11) {
  console.log("first decade");
}
if (day > 10 && day < 21) {
  console.log("second decade");
}
if (day > 20 && day <= 31) {
  console.log("third decade");
} else {
  console.log("big or small number");
}

const stringLesson4 = "abcde";
if (stringLesson4[0] == "a") {
  console.log("yes");
} else {
  console.log("no");
}

if (stringLesson4[0] == "a" || "b" || "c") {
  console.log("yes");
} else {
  console.log("no");
}

const str2 = "123312";
Number(str2);
console.log(str2);
console.log(typeof parseInt(str2[0]));
console.log(+str2[0] + +str2[1] + +str2[2]);

if (+str2[0] + +str2[1] + +str2[2] == +str2[3] + +str2[4] + +str2[5]) {
  console.log("yes");
} else {
  console.log("no");
}

const lang2 = "ru";
let arrlang;

if (lang2 == "ru") {
  arrLang = ["2"];
}
if (lang2 == "en") {
  arrLang = ["3"];
}

console.log(arrLang);

switch (lang2) {
  case "ru":
    arrLang = [2];
    break;
  case "en":
    arrLang = [4];
    break;
}

console.log(arrLang);

const arrLang2 = {
  ru: ["suka"],
  en: ["kuka"],
};

console.log(arrLang2[lang2]);

////////  LESSON 5  ////////

//// Loop for, while and for for arrays

// let u = 1;
// while (u <= 100) {
// console.log(u);
// u++;
// }

// for (i = 1; i < 101; i++) {
//   result1 = result1 + i;
// }
//  console.log(result1);

// arr with numbers 1 3 5 7 etc.

for (let i = 1; i < 101; i++) {
  //  i++ * 2;
  //  console.log(i - 1);
}

// vavydom vse chisla podrjat iz massiva

const arr10 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i]);
}

// vavydom vse chisla podrjat iz massiva i summiruem
let result2 = 0;
const arr11 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr11.length; i++) {
  result2 += arr11[i];
}
console.log(result2);

//// for-in

let object = { green: "зеленый", red: "красный", blue: "голубой" };

for (let key in object) {
  console.log(key);
  console.log(object[key]);
  console.log(key + " " + "plus" + " " + object[key]);
}

//// Tasks

// only numbers >3 and <10 in this array

const arr21 = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr21.length; i++) {
  if (arr21[i] > 1 && arr21[i] < 10) {
    console.log(arr21[i]);
  }
}

console.log("space");

const arr31 = [1, 2, 5, 9, 13, 4, 10];
for (let i = 0; i < arr31.length; i++) {
  if (arr31[i] == 2) {
    console.log("yes");
    break;
  }
}

console.log("space");

const arr41 = [1, 2, -5, 9, -13, -4, 10];
let result41 = 0;
for (let i = 0; i < arr41.length; i++) {
  if (arr41[i] > 0) {
    result41 += arr41[i];
  }
}
console.log(result41); // nuzno vyvesti consol log naruzu(inside loop repeat)

console.log("space");

//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000].                              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const arr51 = [10, 20, 30, 50, 235, 3000]; // POCHTIIII
let resultarr51 = [];
for (let i = 0; i < arr51.length; i++) {
  if (arr51[i].toString()[0] == (1 || 2)) {
    // || ??????
    resultarr51 += arr51[i] + " ";
  }
}
console.log(resultarr51);

const numberTest = 546;
console.log(numberTest.toString()[0]);

console.log("space");

// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9.
// С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

const arr61 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.write("Exersizes:");
document.write("<br>");
document.write("-");
for (let i = 0; i < arr61.length; i++) {
  document.write(arr61[i] + "-");
}
document.write("<br>");
document.write("Write some text directly to the HTML document");
console.log("NEXT");
document.write("<br>");

const arrWeek = ["M", "T", "W", "T", "F", "S", "S"];

for (let i = 0; i < 5; i++) {
  const element = arrWeek[i];
  document.write(element);
  console.log(element);
}

for (let i = 5; i < 7; i++) {
  const element = arrWeek[i];
  document.write(element.bold());
  console.log(element.bold());
}

console.log("NEXT1");
document.write("<br>");

// Составьте массив дней недели. С помощью цикла for                                       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// выведите все дни недели, а текущий день выведите курсивом.
// Текущий день должен храниться в переменной day

const arrWeek2 = ["M", "T", "W", "T", "F", "S", "S"];
const day2 = 2;

for (let i = 0; i < arrWeek2.length; i++) {
  if (i == day2) {
    let element = arrWeek2[i];
    // console.log(element.italics());
    // document.write(element.italics());
    // element.splice[2, 1];
  }

  // console.log(element);
  // document.write(element);
}

// const arrE = [1, 2, 3, 4, 5];
// for (var i = 0; i < arrE.length; i++) {
//   document.write(arrE[i]);
// }

console.log("NEXT2");
document.write("<br>");

const arr54 = [1, 2, 3, 4, 5];
for (var i = 0; i < arr54.length; i++) {
  if (arr[i] === 3) {
    break; //выходим из цикла
  } else {
    console.log(arr54[i]);
  }
}

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

const n = 1000;

// for (let i = 2 ; i = 2 ; i) {
//  document.write(i);
//  console.log(i);
// }

////////  Test setTimeout  ////////

function button() {
  setTimeout(function () {
    console.log("hi");
  }, 2000);
}

// let buttonSetTimeout;
// buttonSetTimeout.onclick = function () {
//   console.log('loh');
// };

////////  LESSON 6  ////////

// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

let r = 13;
let y = 3;
let result77 = r % y;
console.log(r % y); // 10/3 = 9/3 + 1  % = 1

if (result77 == 0) {
  console.log("divide");
} else {
  console.log("divide with excess:" + result77);
}

//

let st = 2 ** 10; // stepen'
console.log(st);
console.log(Math.pow(2, 10));

console.log(Math.sqrt(9));

//

const arr77 = [4, 2, 5, 19, 13, 0, 10];
let elementSum = 0;
for (let i = 0; i < arr77.length; i++) {
  elementSum += arr77[i] ** 3;
}
console.log(Math.sqrt(elementSum));

//

let j = 379; // Math.round - true reduction
let ceil = Math.ceil(Math.sqrt(j));
let floor = Math.floor(Math.sqrt(j));
console.log(Math.sqrt(j));
console.log(floor);
console.log(ceil);

//

arr88 = [4, -2, 5, 19, -130, 0, 10];

console.log(Math.max.apply(null, arr88)); // why null??
console.log(Math.min(4, -2, 5, 19, -130, 0, 10)); // also with max

console.log(Math.round(Math.random() * 100)); // 0 .. 100 - random value

//
let arr99 = []; // 1st - add NEW ARRAY with EMPTY value
for (let i = 0; i < 10; i++) {
  arr99[i] = Math.round(Math.random() * 100); // array[INDEX]
}

console.log(arr99); // OUTSIDE EXECUTION C.L.

//

let o = 3;
let p = 9;
console.log(Math.abs(o + p));
//

let l = o - p;
console.log(Math.abs(l));

//

arr55 = [12, 15, 20, 105, 754, -950];
let resultarr55 = 0;
for (let i = 0; i < arr55.length; i++) {
  resultarr55 += arr55[i];
}

console.log(Math.round(resultarr55 / arr55.length)); // arithmetical mean number

//factorial of a number
let w = 170;

let factorialOfValueW = 1;
for (let i = w; i > 0; i--) {
  factorialOfValueW *= i;
}

console.log(factorialOfValueW);

////////  LESSON 7  ////////

//SLICE toUpperCase toLowerCase

let str11 = "js";
console.log(str11.toUpperCase());
console.log(str11.toLowerCase());

let str22 = "Where is pisja?";
if (str22.length > 10) {
  console.log(str22.slice(0, 10) + "...");
} else {
  console.log(str22);
}

// REPLACE

let str23 = "I-learn-js-(and)-html!";

console.log(str23.replace("-", "!")); // Match only first position
console.log(str23.replace(/-/g, "!")); // GLOBAL MATCH !!!! Replace all occurrences!!
console.log(str23.replace(/\(/g, "0")); // Чтобы использовать специальный символ как обычный, добавьте к нему обратную косую черту: \..
// Это называется «экранирование символа». Списко спец символов: [ \ ^ $ . | ? * + ( )
console.log(str23.replace(/l/g, "H"));

// SPLIT:  string => array

let str33 = "I learn js";
console.log(str33.split(" ")); // use "space" for split strin on ARRAY

let date = "2020-05-08";
let dateSplit = date.split("-").reverse().join(".");
console.log(dateSplit); //08.05.2020

// JOIN:  array => string

let str44 = ["I", "learn", "js"];
console.log(str44.join()); // typeof string: I,learn,js

// Преобразуйте первую букву каждого слова строки в верхний регистр.

let str55 = "hi loh bloh vaj hello world";
// let resultStr55 = str55.toUpperCase()[0] + str55.slice(1, Infinity);
// console.log(resultStr55); // Hi loh

let resultStr55v2 = str55.split(" "); // (3) ["hi", "loh", "bloh"]
console.log(resultStr55v2);
let String55V2 = "";

for (let i = 0; i < resultStr55v2.length; i++) {
  let newResultStr55v2 =
    resultStr55v2[i].toUpperCase()[0] + resultStr55v2[i].slice(1, Infinity);
  String55V2 += newResultStr55v2 + " ";
}
console.log(typeof newResultStr55v2); // typeof STRING!!!!!!!!!!

console.log(String55V2);

// Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками

let str77 = "var_test_text";
let resultStr77 = str77.split("_"); // => array
let answer = resultStr77[0];

for (let i = 1; i < resultStr77.length; i++) {
  let mainResulrtStr77 =
    resultStr77[i].toUpperCase()[0] + resultStr77[i].slice(1, Infinity);
  answer += mainResulrtStr77;
}

console.log(answer); // 'varTestText'

////////  LESSON 8  ////////

//Methods from arrays:

// arr1.concat(arr2, arr3) // arr1 + arr2

let arrm1 = [1, 2, 3];
let arrm2 = [4, 8, 6];
// console.log(arrm1.concat(arrm2));
// console.log(...arrm1, ...arrm2); // spread operation

// // arr.reverse(); //[1,2,3] => [3,2,1]

// console.log(arrm2.sort());

// let objArr = { js: "test", jq: "hello", css: "world" };

// console.log(Object.keys(objArr));

console.log(arrm1.splice(1, 1, "a", "b"));  // vyvodit to chto udalil, NE VYVODIT!! to chto dobavil
arrm1.splice(5, 0, "c");
console.log(arrm1); // vyvodit  to chto ostalos

////////  LESSON 9  ////////

// Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321')

strL9 = "aiouyh123456 akus rdip";
console.log(strL9.split("").reverse().join(""));   // SPLIT USE WITH "" !!!!!!!!!!!!!!!!!!!
console.log(strL9[1]);

// Дана строка. Сделайте заглавным первый символ этой строки.
let strFirstCase = strL9.toUpperCase()[0] + strL9.substr(1); // .substr() = .slice() ==> SLICE(kusochek) WORK WITH STRING!!!!!!! 
console.log(strFirstCase);

// Проверьте, что строка начинается на http://
let strIndexOf = 'http://slavakittel.com'

let strTrueFalse = strIndexOf.indexOf('http://', 0);

if (strTrueFalse == 0) {
  console.log(true);
} else {
  console.log(false);
};
//second solutuion  - str.substr(0, 7) == 'http://'

// Проверьте, что строка заканчивается на .html.

if (strIndexOf.length - 4 == strIndexOf.indexOf('.com')) {
  console.log(true);
} else {
  console.log(false);
};

//second solutuion  - str.substr(-5) == 'http://' - if "minus" then get end of string

////////  LESSON 10  ////////

// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

function square(a) {
  return a * a
}

console.log(square(12));

// Сделайте функцию, которая возвращает сумму двух чисел.

function sum(a, b) {
  return a + b;
}

console.log(sum(41, 5));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function sumPlus(a, b, c) {
  return (a - b) / c
}

console.log(sumPlus(8, 2, 2));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

const weekNumber = 4;

function week(weekNumber) {
  if (weekNumber == 1) {
    return "monday";
  }
  if (weekNumber == 2) {
    return "tuesday";
  }
  if (weekNumber == 3) {
    return "wendsday";
  }
  if (weekNumber == 4) {
    return "thursday";
  }
  if (weekNumber == 5) {
    return "friday";
  }
  if (weekNumber == 6) {
    return "saturday";
  }
  if (weekNumber == 7) {
    return "sunday";
  } else {
    return "input from 1 to 7"
  }
}

console.log(week(weekNumber));



////////  LESSON 11  ////////

//Дан массив с числами. Проверьте, что в этом массиве есть число 5. Если есть - выведите 'да', а если нет - выведите 'нет'.

arrFlag = [1, 2, 3, 46, 4, 5, 6, 55];
let flag = false;

for (let i = 0; i < arrFlag.length; i++) {
  if (arrFlag[i] == 5) {
    flag = true;
    break;
  }
}

if (flag == true) {
  console.log('yes');
} else {
  console.log('no');
}

console.log("NEXT");

// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
// Если число не делится - выведите 'false', а если делится - выведите 'true'.

strFlag = 25;
let flag3 = false;

for (let i = 2; i < (strFlag - 1); i++) {
  let a = strFlag / i
  console.log(a);
  if (Number.isInteger(a) == true) {
    flag3 = true;
    break;
  }
}

if (flag3 == true) {
  console.log('yes');
} else {
  console.log('no');
}

console.log("NEXT");

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. 
// Если есть - выведите 'да', а если нет - выведите 'нет'.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

arrFlag2Numbers = [1, 0];
let flag2 = false;

for (let i = 0; i < arrFlag2Numbers.length; i++) {
  // if (arrFlag2Numbers[i] == 4) {
  //   flag2 = false;
  //   // continue;
  // };
  if (arrFlag2Numbers[i] == arrFlag2Numbers[0]) {
    flag2 = true;
    break;
  };
  console.log(arrFlag2Numbers[i])
}

if (flag2 == true) {
  console.log('yes');
} else {
  console.log('no');
}

////////  LESSON 12  ////////

// Сделайте функцию, которая параметрами принимает 2 числа. 
// Если эти числа равны - пусть функция вернет true, а если не равны - false.
let q = -1;
let u = 50;

function compare(q, u) {
  if (q == u) {
    return true;
  } else {
    return false;
  }
};

console.log(compare(q, u))


// Сделайте функцию, которая параметрами принимает 2 числа. 
// Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

function sumMoreTen(q, u) {
  if (q + u > 10) {
    return true;
  } else {
    return false;
  }
};

console.log(sumMoreTen(q, u))

// Сделайте функцию, которая параметром принимает число и проверяет - 
// отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function minusCheck(q) {
  if (q < 0) {
    return true;
  } else {
    return false;
  }
};

console.log(minusCheck(q))

////////  LESSON 13  ////////

// С помощью цикла for сформируйте строку '123456789' 
// и запишите ее в переменную str.
let strFor = '';

for (let i = 1; i < 10; i++) {
  strFor += i;                  // ПЕРЕЕННАЯ ВНУТРИ ЦИКЛА СУЩЕСТВУЕТ ТОЛЬКО ВНУТРИ! ЕСЛИ ХОТИМ ПЕРЕМЕННУЮ ДЛЯ КОДА, НУЖНО ОБЬЯВИТЬ ЕЕ ВНЕ ЦИКЛА!!! 
}
console.log(strFor);
console.log(typeof strFor);

// С помощью цикла for сформируйте строку '987654321' 
// и запишите ее в переменную str.
let strFor2 = '';

for (let i = 9; i > 0; i--) {
  strFor2 += i;
}
console.log(strFor2);

// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' 
// и запишите ее в переменную str.

let strFor3 = '-' + '';

for (let i = 1; i < 10; i++) {
  strFor3 = strFor3 + i + "-";
}
console.log(strFor3);

// Нарисуйте пирамиду, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов
let xPir = "";

for (let i = 0; i < 5; i++) {
  xPir = xPir + 'x';
  document.write(xPir + "<br>")     // !!! СОЗДАЕТ КАК 1 22 333 4444 5555, ПЕРЕМЕННАЯ ЗАПИСЫВЕТСЯ В ПАМЯТИ
}
document.write('<br>')
document.write(xPir)                // !!! СОЗДАЕТ КАК 12345
document.write('<br>')
document.write('<br>')

// С помощью двух вложенных циклов нарисуйте следующую пирамидку:
//1
//22
//333 etc.

let xNum = "";

for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {  //!! j < i;
    document.write(i);
  }
  document.write('<br>');
}

////////  LESSON 14  На приемы работы с массивами ////////

// Заполните массив следующим образом: в первый элемент запишите 'x',
// во второй 'xx', в третий 'xxx' и так далее.

let arrX = [];

for (let i = 1; i < 10; i++) {
  arrX = [arrX + "x"];
  console.log(arrX)
}
console.log(typeof arrX);

// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

let arrNum = [];

for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    document.write(arrNum + i)
  }
  document.write('<br>')
};

console.log(typeof arrNum)

// Сделайте функцию arrayFill, которая будет заполнять массив 
// заданными значениями. Первым параметром функция принимает значение, 
// которым заполнять массив, а вторым - сколько элементов должно быть в массиве. 
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. 

function arrayFill(aF, nF) {
  let nFsum = [];
  for (let i = 0; i < nF; i++) {
    nFsum.push(aF)
  }
  return nFsum
}
console.log(arrayFill("x", 5))


// Дан массив с числами. Узнайте сколько элементов с начала 
// массива надо сложить, чтобы в сумме получилось больше 10-ти.

arrSum10 = [1, 5, 6, 7.5, 8]
let sum10 = 0;

for (let i = 0; i < arrSum10.length; i++) {
  sum10 += arrSum10[i];
  if (sum10 > 10) {
    console.log("We have to add " + arrSum10.indexOf(arrSum10[i + 1]) + " first numbers")
    break;
  } else {
    continue;
  }
}

// Дан массив с числами. Не используя метода reverse 
// переверните его элементы в обратном порядке.
let newResereArr = [];

for (let i = arrSum10.length - 1; i > -1; i--) {
  newResereArr.push(arrSum10[i]);
}
console.log(newResereArr)

// Дан двухмерный массив с числами, например 
// [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. 
// Массив, конечно же, может быть произвольным.

arr2dim = [[1, 2, 3], [4, 5], [6]];
let sumArr34 = [];
for (let i = 0; i < arr2dim.length; i++) {
  for (let j = 0; j < arr2dim[i].length; j++) {
    sumArr34.push(arr2dim[i][j]);
  }
}
console.log(sumArr34.reduce((sum, current) => sum + current, 0))


// Дан трехмерный массив с числами,
// например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
// Найдите сумму элементов этого массива. 
// Массив, конечно же, может быть произвольным.

arr3dim = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumArr35 = [];
for (let i = 0; i < arr3dim.length; i++) {
  for (let j = 0; j < arr3dim[i].length; j++) {
    for (let k = 0; k < arr3dim[j].length; k++) {
      sumArr35.push(arr3dim[i][j][k]);
    }
  }
};

console.log(sumArr35.reduce(function(a, b){
  return a + b;
}, 0))

//second solution

let sumArr36 = 0;

for (let i = 0; i < arr3dim.length; i++) {
  for (let j = 0; j < arr3dim[i].length; j++) {
    for (let k = 0; k < arr3dim[j].length; k++) {
      sumArr36 += arr3dim[i][j][k];
    }
  }
};

console.log(sumArr36);

////////  LESSON 15 Правильное использование пользовательских функций ////////

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, 
// если не так - false.

function isNumberInRange (a) {
  if (a > 0 && a < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberInRange(1))

// Дан массив с числами. Запишите в новый массив только те числа, 
// которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную 
// функцию isNumberInRange из предыдущей задачи.

arrIsRange = [1,9,50,-1,7,0,40];
newArrIsRange = [];

for (let i = 0; i < arrIsRange.length; i++) {
  if (isNumberInRange(arrIsRange[i]) == true) {
    newArrIsRange.push(arrIsRange[i])
  }
}

console.log(newArrIsRange)

// Сделайте функцию getDigitsSum (digit - это цифра), 
// которая параметром принимает целое число и возвращает сумму его цифр.

let primeNumber = 404;

function getArr(num) {
  return String(num).split('')               // !!!!!!!!!!! split ALWAYS WITH '' !!!!!!!!!!!!! else DON'T split!
}
function getDigitsSum(num){
  num = getArr(num)         // NB!! get function getArr in this function!!
  let numBase = 0
  for (let i = 0; i < num.length; i++) {
      numBase = numBase + Number(num[i])
    }
  return numBase
}

console.log(getDigitsSum(primeNumber));

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

for (let i = 1; i <= 2020; i++) {
  if (getDigitsSum(i) == 26) {
    console.log(i)
  }
}

// Сделайте функцию isEven() (even - это четный), 
// которая параметром принимает целое число и проверяет: 
// четное оно или нет. Если четное - пусть функция возвращает true, 
// если нечетное - false.

function isEven (num) {
  if (num / 2 == parseInt) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4))
// Дан массив с целыми числами. Создайте из него новый массив, 
// где останутся лежать только четные из этих чисел. 
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.



// Сделайте функцию getDivisors, которая параметром принимает 
// число и возвращает массив его делителей (чисел, на которое делится данное число).

