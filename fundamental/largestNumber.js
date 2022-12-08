// var num1=prompt('enter your 1st number');
// var num2=prompt('enter your 2nd number');
// if(num1>num2)
// {
//     console.log(`1st number is ${num1} largest`);
// }
// else{
//     console.log(`2nd number is ${num2} largest`);
// }


// var a=10;
// var b=20;
// if(++a)
// {
//     console.log(1);
// }
// else if(++b)
// {
//     console.log(2);
// }
// else{
//     console.log(3);
// }
// console.log(a);
// console.log(b);

var num1=prompt('enter your 1st number');
var num2=prompt('enter your 2nd number');
var num3=prompt('enter your 3rd number');
var num4=prompt('enter your 4th number')
if(num1<num2 && num1<num3 && num1<num4){
    console.log(num1+'is smallest');
}
else if(num2<num3 && num2<num4)
{
    console.log(num2+'is smallest');
}
else if(num3<num4){
    console.log(num3+'is smallest');
}
else{
    console.log(num4+'is smallest');
}
console.log(`${num1},`);





