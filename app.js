const { Console } = require('console');
const fs = require('fs');

const genders = ['M', 'F'];
const femaleName = ['Asia', 'Basia', 'Kasia', 'Stasia'];
const maleNames = ['Jarek', 'Marek', 'Arek', 'Darek'];
const lastNames = ['Brzeczyszczykiewicz', 'Szczesny', 'Zdzblo', "Cwir"];
const people = [];

function randChoice(arr) {
  const max = arr.length;
  const idx = Math.floor(Math.random() * max);
  return arr[idx];
}

for (let i=0; i<20; i++) {
  const person = {};
  const gender = randChoice(genders);
  
  person.gender = gender;
  person.firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleName);
  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 100) + 1;

  people.push(person);
}

const data = JSON.stringify(people, null, '\t');

fs.writeFile('people.json', data, (err) => {
  if (err) {
    Console.log('File has been successfully generated! Check people.json');
    throw err;
  }
  console.log('The file has been saved!');
});