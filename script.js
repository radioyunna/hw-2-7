// Задание 1

const str = "java script";
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Выведет "JAVA SCRIPT"


// Задание 2

function searchStart(arr, str) {
  const lowerCaseStr = str.toLowerCase();
  const filteredArray = arr.filter(item => {
    const lowerCaseItem = item.toLowerCase();
    return lowerCaseItem.startsWith(lowerCaseStr);
  });
  return filteredArray;
}

const result1 = searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
console.log(result1); 

const result2 = searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
console.log(result2); 

const result3 = searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');
console.log(result3); 


// Задание 3

const number = 32.58884;

const roundedDown = Math.floor(number);
console.log("До меньшего целого:", roundedDown); // 32

const roundedUp = Math.ceil(number);
console.log("До большего целого:", roundedUp); // 33

const roundedNearest = Math.round(number);
console.log("До ближайшего целого:", roundedNearest); // 33

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log("Наименьшее число:", minNumber); // 21
console.log("Наибольшее число:", maxNumber); // 77


// Задание 5

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return randomNumber;
}

const randomNum = getRandomNumber();
console.log(randomNum); 


// Задание 6

function getRandomArray(number) {
  const randomArray = [];
  const arrayLength = number * 2;

  while (randomArray.length < arrayLength) {
    const randomNumber = Math.floor(Math.random() * (number + 1));
    randomArray.push(randomNumber);
  }

  return randomArray;
}

const inputNumber = 5;
const resultArray = getRandomArray(inputNumber);
console.log(resultArray); 


// Задание 7

function getRandomNumberInRange(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

const minNumber = 10;
const maxNumber = 20;
const resultNumber = getRandomNumberInRange(minNumber, maxNumber);
console.log(resultNumber); 


// Задание 8

const currentDate = new Date();
console.log(currentDate);


// Задание 9

const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата:", currentDate.toLocaleDateString());
console.log("Дата через 73 дня:", futureDate.toLocaleDateString());


// Задание 10

function formatDateAndTime(date) {
  const monthsInRussian = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];

  const daysOfWeekInRussian = [
    "воскресенье", "понедельник", "вторник", "среда",
    "четверг", "пятница", "суббота"
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayOfWeek = date.getDay();

  const formattedDate = `Дата: ${day} ${monthsInRussian[month]} ${year} - это ${daysOfWeekInRussian[dayOfWeek]}.`;
  const formattedTime = `Время: ${date.getHours()}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;

  return `${formattedDate}\n${formattedTime}`;
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

const currentDate = new Date();
const formattedDateTime = formatDateAndTime(currentDate);
console.log(formattedDateTime);



