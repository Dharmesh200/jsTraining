let num1 = Number(prompt());
let num2 = Number(prompt());
let num3 = Number(prompt())

if(num1>num2 && num1>num3)
{
    console.log(num1 +`is largest`);
}
else if(num2>num3){
    console.log(num2 + `is largest`);
}
else
{
    console.log(num3 + `is largest`);
}