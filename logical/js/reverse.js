// let str = ' rahd sevol'
// let word = str.split('')
// let rev ;
// let arr = [];
// for(let i=0;i<word.length;i++){
//     rev = String(word[i].split('').reverse().join(''))
//     arr.push(rev)

// }

// console.log(String(arr).replaceAll(",",));

let str="rahd"
let words = str.split(' ')
let rev
let arr=[];
for(let i=0;i<words.length;i++){
     rev=String(words[i]).split("").reverse().join("")
   
arr.push(rev) 
}
    

console.log(String(arr).replaceAll(","," "))

//(7) permutation of string
// const permuteer = function (str) {
//     permute("", str);
// }

// const permute = function (prefix, str) {
//     var n = str.length
//     if (n == 0) {
//         console.log(prefix + "")
//     }
//     if (n != 0) {
//         for (let i = 0; i < n; i++) {
//             permute(prefix + str.charAt(i),
//                 str.substring(i + 1, n) + str.substring(0, i))
//         }
//     }
// }

// permuteer("ABC")






// (8) ============ program to count the number of vowels in a string

// function countVowel(str) { 
// const count = str.match(/[aeiou]/gi).length;
// return count;
// }

// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);






// 9. JavaScript Program to Check Whether a String Starts and Ends With Certain Characters
// var str = prompt("enter string");
// var s = prompt("enter charcter to check startsWith character");
// var e = prompt("enter character to check ends with");
// var str1 = str.startsWith(s);
// var str2 = str.endsWith(e);
// console.log("starts with", s,str1);
// console.log("ends with", e,str2);





//(10) ======== program to generate random strings


// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function generateString(length) {
// let result = ' ';
// const charactersLength = characters.length;
// for ( let i = 0; i < length; i++ ) {
// result += characters.charAt(Math.floor(Math.random() * charactersLength));
// }

// return result;
// }

// console.log(generateString(5));



// (11) ===== js program to perform string comparison

// const str1 = prompt(`enter the first string`);
// const str2 = prompt(`enter the second string`);
// let compare=((str1,str2)=>{
// const result = str1.toUpperCase() === str2.toUpperCase();
 
// if(result) {
// console.log('The strings are similar.');
// } else {
// console.log('The strings are not similar.');
// }
// })(str1,str2);




//(12) ===== program to trim a string

// const string = prompt(`enter the string`);

// let str_trim=(str)=>{


// const result = string.trim();
// return result;
// }
// console.log(str_trim())