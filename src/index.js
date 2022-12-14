import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function format(user) {
  return user.firstName + " " + user.lastName;
};

let suffix;
let prefix;
const gender = prompt("Enter Male for M or Female for F");

if (gender === 'M' || gender==='m') {
  suffix = 'Mr.';
  prefix = 'Sir';
} else if (gender === 'F' || gender === 'f') {
  suffix = 'Mrs.';
  prefix = "Mam";
} 


const user = {
  firstName: prompt('Enter Your First Name'),
  lastName: prompt('Enter Your Last Name')
}

const d = new Date();
let currentTime = d.getHours();

let getingWish;
let getcolor;

if (currentTime >= 4 && currentTime < 12) {
  getingWish = "Good Morning";
  getcolor = 'Green';
}
else if (currentTime >= 12 && currentTime < 16) {
  getingWish = "Good AfterNoon";
  getcolor = "Red";
}
else if (currentTime >= 16 && currentTime < 20) {
  getingWish = "Good Evening";
  getcolor="Orange"
}
else {
  getingWish = "Good Night";
  getcolor ="White"
}


ReactDOM.render(
  <h1>Hello {suffix} {format(user)} ! <span style={{color: getcolor}}>{getingWish} </span> { prefix}</h1>
  , document.getElementById('root'));