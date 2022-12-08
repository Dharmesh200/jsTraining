let str = 'maam';
let rev = str.split('').reverse().join('').replace(',')

if (rev === str) {
    console.log(`the string ${str} is palindrome ${rev} `);
}
else
    console.log('string is not palindrome' + str);


//some other examples
// let a= 10;
// let b= 20;
// for(i=0;i<=b;i++)
// {
//     if(a%2==0)
//     console.log('it is a even number');
//     else
//     console.log('it is a oddd number');
// }

// let num=9;
// let product=1;
// for( i=9; i>=1; i--)
// {
//     product= product*i

// }
// console.log(product);


// let num = 123456;

// while(num>0){
//     console.log(num%10);
//     num= Math.trunc(num/10);
// }

// let num = 11
// const num1 = num;
// let rev=0;
// while(num>0){
//     rev = rev*10 + num%10;
//     num = Math.trunc(num/10);
// }
// if(num1==rev)
// console.log('it is a palindrome');
// else
// console.log('it is not a palindrome');

let num = 13;
let flag = true;
for (let i = 2; i < num; i++) {
    if (num % 2 == 0) {
        flag = false;
        break;

    }
}
if (flag == false)
    console.log('it is not a prime number');
else
    console.log('it is a prime number');








