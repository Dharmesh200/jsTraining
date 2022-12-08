var val = prompt(`Enter name`);
console.log(val.length); //length

var word = `java script frontend and backend`; 
console.log(word.slice(-9,-4)); //slice
console.log(word.substring(6,12)); //substring
console.log(word.substr(3,12)); //substr

var val1 = 'menchesterDharmesh';
console.log(val1.toUpperCase()); //uppercase
console.log(val1.toLowerCase()); //lowercase

var val2 = " mern stack " ;
console.log(val2.trim()); //trim
console.log((val2.trim()).length);

var val3 = `dharmesh`;
console.log(val3.charAt(3)); //charAt
var val4 = 4;
console.log(val3.padStart(2,7)); 
console.log(val3.padEnd(5,8)); //padEnd
console.log(val3.charCodeAt(0)); //charCodeAt

var str1 = `music`;
var str2 = ` movies `;
var str3 = str1 . concat(" " ,str2); //concat
console.log(str3);
console.log(str1.concat(str2));