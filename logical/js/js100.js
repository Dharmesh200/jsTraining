// let numbers = [1, 2, 3, 4, NaN];
// console.log(numbers.indexOf(NaN));


let zero = new Number(0);
if (zero) {
console.log("If");
} else {
console.log("Else");
}


const USER = {'age': 30};
USER.age = 25;
console.log(USER.age);

// function outer(f = inner()) {
//     function inner() { return 'Inner' }
//     }
//     outer();

    // function add(item, items = []) {
    //     items.push(item);
    //     return items;}
    //     console.log(add('Orange'));
    //     console.log(add('Apple'));

    //     function checkType(num = 1) {
    //         console.log(typeof num); }
    //         checkType();
    //         checkType(undefined);
    //         checkType('');
    //         checkType(null);

            // function area({length = 10, width = 20}) {
            //     console.log(length*width);
            //     }
            //     area();

            const {a: x = 10, b: y = 20} = {a: 30};
            console.log(x); console.log(y);            