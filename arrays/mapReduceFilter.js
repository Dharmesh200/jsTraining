const cart = {
    product: ['pen', 'pencile', 'baga', 'laptop'],
    price: [10, 5, 500, 15000]
}
console.log(cart.price.reduce((sum, val) => sum + val, 0));

console.log(cart.price.map((value) => value * 1.05));

console.log(cart.product.filter((val) => val.length % 2 == 0));


// some other examples 

// function test( ...a ){
//     if (a.length>0){
//         a.forEach((v)=>console.log(v))
//     }
//     else
//     console.log(` no argument pass`);
// }
// test(10,20,30,40)



// function test( ...a ){
//     if (a.length>0){
//         a.reduce((v)=>console.log(v))
//     }
//     else
//     console.log(` no argument pass`);
// }


// test(10,20,30,40)

const { a: x = 10, b: y = 20 } = { a: 30 };
console.log(x); console.log(y);