"use strict";

let global = document.getElementById("display");

let globalVar = document.getElementById("display1");

let hours = [
  "6 am",
  "7 am",
  "8 am",
  "9 am",
  "10 am",
  "11 am",
  "12 pm",
  "1 pm",
  "2 pm",
  "3 pm",
  "4 pm",
  "5 pm",
  "6 pm",
  "7 pm",
];

function randomNumCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCookiesPerHour(one, two) {
  return Math.floor(one * two);
}

// const storeOne = {
//   name: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   render: function () {
//     let elName = document.createElement("h2");
//     elName.textContent = `${this.name}`;
//     global.appendChild(elName);
//     let ulEl = document.createElement("ul");
//     global.appendChild(ulEl);
//     let totalCookies = 0;
//     let liEl = null;
//     for (let i = 0; i < 14; i++) {
//       this.randCustomer = randomNumCust(this.minCust, this.maxCust);
//       this.randCookie = randomCookiesPerHour(this.randCustomer, this.avgCookie);
//       totalCookies += this.randCookie;
//       liEl = document.createElement("li");
//       liEl.textContent = `${hours[i]}: ${this.randCookie}`;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = `Total: ${totalCookies}`;
//     ulEl.appendChild(liEl);
//   },
// };
// console.log(storeOne);
// storeOne.render();

// const storeTwo = {
//   name: "Tokyo",
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   render: function () {
//     let elName = document.createElement("h2");
//     elName.textContent = `${this.name}`;
//     global.appendChild(elName);
//     let ulEl = document.createElement("ul");
//     global.appendChild(ulEl);
//     let totalCookies = 0;
//     let liEl = null;
//     for (let i = 0; i < 14; i++) {
//       this.randCustomer = randomNumCust(this.minCust, this.maxCust);
//       this.randCookie = randomCookiesPerHour(this.randCustomer, this.avgCookie);
//       totalCookies += this.randCookie;
//       liEl = document.createElement("li");
//       liEl.textContent = `${hours[i]}: ${this.randCookie}`;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = `Total: ${totalCookies}`;
//     ulEl.appendChild(liEl);
//   },
// };
// console.log(storeTwo);
// storeTwo.render();

// const storeThree = {
//   name: "Dubai",
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   render: function () {
//     let elName = document.createElement("h2");
//     elName.textContent = `${this.name}`;
//     global.appendChild(elName);
//     let ulEl = document.createElement("ul");
//     global.appendChild(ulEl);
//     let totalCookies = 0;
//     let liEl = null;
//     for (let i = 0; i < 14; i++) {
//       this.randCustomer = randomNumCust(this.minCust, this.maxCust);
//       this.randCookie = randomCookiesPerHour(this.randCustomer, this.avgCookie);
//       totalCookies += this.randCookie;
//       liEl = document.createElement("li");
//       liEl.textContent = `${hours[i]}: ${this.randCookie}`;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = `Total: ${totalCookies}`;
//     ulEl.appendChild(liEl);
//   },
// };
// console.log(storeThree);
// storeThree.render();

// const storeFour = {
//   name: "Paris",
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   render: function () {
//     let elName = document.createElement("h2");
//     elName.textContent = `${this.name}`;
//     global.appendChild(elName);
//     let ulEl = document.createElement("ul");
//     global.appendChild(ulEl);
//     let totalCookies = 0;
//     let liEl = null;
//     for (let i = 0; i < 14; i++) {
//       this.randCustomer = randomNumCust(this.minCust, this.maxCust);
//       this.randCookie = randomCookiesPerHour(this.randCustomer, this.avgCookie);
//       totalCookies += this.randCookie;
//       liEl = document.createElement("li");
//       liEl.textContent = `${hours[i]}: ${this.randCookie}`;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = `Total: ${totalCookies}`;
//     ulEl.appendChild(liEl);
//   },
// };
// console.log(storeFour);
// storeFour.render();

// const storeFive = {
//   name: "Lima",
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   render: function () {
//     let elName = document.createElement("h2");
//     elName.textContent = `${this.name}`;
//     global.appendChild(elName);
//     let ulEl = document.createElement("ul");
//     global.appendChild(ulEl);
//     let totalCookies = 0;
//     let liEl = null;
//     for (let i = 0; i < 14; i++) {
//       this.randCustomer = randomNumCust(this.minCust, this.maxCust);
//       this.randCookie = randomCookiesPerHour(this.randCustomer, this.avgCookie);
//       totalCookies += this.randCookie;
//       liEl = document.createElement("li");
//       liEl.textContent = `${hours[i]}: ${this.randCookie}`;
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement("li");
//     liEl.textContent = `Total: ${totalCookies}`;
//     ulEl.appendChild(liEl);
//   },
// };
// console.log(storeFive);
// storeFive.render();

let arrOfObj = [];
let hoursTotals = [];
let hoursTotals1 = [];
let totalOfTotals = 0;

function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.randomCookie = [];
  this.totalCookiesPerDay = null;
  arrOfObj.push(this);
}

const storeOne = new Store("Seattle", 23, 65, 6.3);
const storeTwo = new Store("Tokyo", 3, 24, 1.2);
const storeThree = new Store("Dubai", 11, 38, 3.7);
const storeFour = new Store("Paris", 20, 38, 2.3);
const storeFive = new Store("Lima", 2, 16, 4.6);

console.log(arrOfObj);

Store.prototype.render = function () {
  let elName = document.createElement("h2");
  elName.textContent = `${this.name}`;
  global.appendChild(elName);
  let ulEl = document.createElement("ul");
  global.appendChild(ulEl);
  let totalCookies = 0;
  let liEl = null;
  for (let i = 0; i < 14; i++) {
    this.randCustomer = randomNumCust(this.minCust, this.maxCust);
    this.randCookie = randomCookiesPerHour(this.randCustomer, this.avgCookie);
    this.randomCookie.push(this.randCookie);
    totalCookies += this.randCookie;
    liEl = document.createElement("li");
    liEl.textContent = `${hours[i]}: ${this.randCookie}`;
    ulEl.appendChild(liEl);
  }
  this.totalCookiesPerDay = totalCookies;
  liEl = document.createElement("li");
  liEl.textContent = `Total: ${totalCookies}`;
  ulEl.appendChild(liEl);
};

for (let i = 0; i < arrOfObj.length; i++) {
  arrOfObj[i].render();
}

//TABLE

let tableEl = document.createElement("table");
// 1st row
function firstRow() {
  globalVar.appendChild(tableEl);
  let tr1El = document.createElement("tr");
  tableEl.appendChild(tr1El);
  let thEl = document.createElement("th");
  thEl.textContent = "Locations";
  tr1El.appendChild(thEl);
  for (let i = 0; i < hours.length; i++) {
    thEl = document.createElement("th");
    thEl.textContent = `${hours[i]}`;
    tr1El.appendChild(thEl);
  }
  thEl = document.createElement("th");
  thEl.textContent = "Daily Location Total";
  tr1El.appendChild(thEl);
}
firstRow();

// Inner rows
Store.prototype.tableFormat = function () {
  let tr2El = document.createElement("tr");
  tableEl.appendChild(tr2El);
  let tdEl = document.createElement("td");
  tdEl.textContent = `${this.name}`;
  tr2El.appendChild(tdEl);
  for (let i = 0; i < hours.length; i++) {
    tdEl = document.createElement("td");
    tdEl.textContent = `${this.randomCookie[i]}`;
    tr2El.appendChild(tdEl);
  }
  tdEl = document.createElement("td");
  tdEl.textContent = `${this.totalCookiesPerDay}`;
  tr2El.appendChild(tdEl);
};

for (let i = 0; i < arrOfObj.length; i++) {
  arrOfObj[i].tableFormat();
}

// Last row
function lastRow() {
  let tr3El = document.createElement("tr");
  tableEl.appendChild(tr3El);
  let th2El = document.createElement("th");
  th2El.textContent = "Totals";
  tr3El.appendChild(th2El);

  let eachHourTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    eachHourTotal =
      storeOne.randomCookie[i] +
      storeTwo.randomCookie[i] +
      storeThree.randomCookie[i] +
      storeFour.randomCookie[i] +
      storeFive.randomCookie[i];
    hoursTotals.push(eachHourTotal);
    totalOfTotals += eachHourTotal;
  }

  for (let i = 0; i < hours.length; i++) {
    th2El = document.createElement("th");
    th2El.textContent = hoursTotals[i];
    tr3El.appendChild(th2El);
  }

  th2El = document.createElement("th");
  th2El.textContent = totalOfTotals;
  tr3El.appendChild(th2El);
}
lastRow();

// Form Data
const locationForm = document.getElementById("newLocation");

locationForm.addEventListener("submit", handleSubmitting);

function handleSubmitting(event) {
  event.preventDefault();

  let newName = event.target.locationName.value;
  let newMinCust = parseInt(event.target.minCust.value);
  let newMaxCust = parseInt(event.target.maxCust.value);
  let newAvgCookie = parseInt(event.target.avgCookies.value);

  let newLocation = new Store(newName, newMinCust, newMaxCust, newAvgCookie);
  newLocation.render();

  tableEl.deleteRow(tableEl.rows.length - 1);

  newLocation.tableFormat();

  console.log(arrOfObj);

  lastRow2();
}

function lastRow2() {
  let tr3El = document.createElement("tr");
  tableEl.appendChild(tr3El);
  let th2El = document.createElement("th");
  th2El.textContent = "Totals";
  tr3El.appendChild(th2El);

  let eachHourTotal1 = 0;
  let count = 0;
  for (let i = 0; i < hours.length; i++) {
    for (let j = 0; j < arrOfObj.length; j++) {
      eachHourTotal1 += arrOfObj[j].randomCookie[i];
    }
    hoursTotals1.push(eachHourTotal1);
    count += eachHourTotal1;
    eachHourTotal1 = 0;
  }
  totalOfTotals = count;

  for (let i = 0; i < hours.length; i++) {
    th2El = document.createElement("th");
    th2El.textContent = hoursTotals1[i];
    tr3El.appendChild(th2El);
  }

  hoursTotals1 = [];

  th2El = document.createElement("th");
  th2El.textContent = totalOfTotals;
  tr3El.appendChild(th2El);
}
