// here output is in form of nubmber even if enter string also we convert in to number explicitly.
var a = Number(prompt('enter you choise of number'));

console.log(a);

//example 2
var age = Number(prompt(`Enter your age`));
var Eligibility = (age >= 18) ? 'you are eligible to access' : 'you are not eligible to access';
console.log(Eligibility);
