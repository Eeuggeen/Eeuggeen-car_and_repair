"use strict"
console.log('Hello world!');
console.log('привет' + 'мир');
let num = 10;
console.log(num);
let vkPay = 'korabl';
console.log(vkPay);
vkPay = 'russkiy';
console.log(vkPay);



const userProfile = {
	name: 'bro',
	age: 'skinul',
	message: 'mem'
}
console.log(userProfile)

const profile = {
	name: 'bro',
	age: 'skinul',
	message: 'mem'
}
profile.age = 'ne skinul'
console.log(profile)


function testBlock() {
	let brown = 34;
	console.log(brown);
}

let myAge = 22;
let myNewAge = 18;
myAge = myNewAge;
console.log(myAge);

let profileUser = {
	eye: 'голубые'
}
let user = 'Вася';
let username = 'Вася';
console.log(user);

let brand = 'nokia',
	model = '1100',
	type = 'phone';




let userName;
console.log(typeof userName);
let wendor = 68 < 18;
console.log(wendor);
let number = 32;

let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

let getNan = 'idi' / 10;
console.log(getNan);
console.log(typeof getNan);

let userAge = 22;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);

let crown = 58;
console.log(crown);
console.log(typeof crown);
crown = String(crown);
console.log(crown);
console.log(typeof crown);

let id = Symbol("id");
console.log(typeof id);

let numberString = '58';
numberString = Number(numberString);
console.log(numberString);
console.log(numberString);
