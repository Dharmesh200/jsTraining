//1. create a object which contains attributes as customer_name, account_no, 
// balance and design methods to addAmount(), withdraw(),currentBalance()

let obj = {
    customer_name: 'Dharmesh',
    account_number: 12345,
    balance: 0,
    addAmount: function (amount) {
        this.balance += amount;

    },
    withdraw: function (amount) {
        this.balance -= amount;
    },
    cuu_balance: function () {
        return this.balance
    }
}

obj.addAmount(15000);
console.log('after deposite :' + obj.balance());

obj.withdraw(2000);
console.log('after withdrawl :' + obj.balance());

// //2.create a object which contains attributes as eid, name, salary and desing methods to salaryHike(), salaryDeduct(),currentSalary()

// const emp = {
//     eid: 456,
//     name: 'Dharmesh',
//     sal: 3000,
//     salaryHike: function(hike){
//         this.sal+= hike;
//     },
//     salaryDeduct: function(deduct){
//         this.sal-= deduct;
//     },
//     cursal: function(){
//         return this.sal;
//     }
// }

// emp.salaryHike(1500);
// console.log(emp.cursal());

// emp.salaryDeduct(2300);
// console.log(emp.cursal());



const car = {
    make: 'honda',
    engine: {
        no_of_cylinder: 4,
        cc: 2000,
        displayEngine: function () {
            return `engine[cylinder : ${this.no_of_cylinder} \n cc:${this.cc}]`
        }
    },

    displayCar: function () {
        return `${this.make}\n ${this.engine.displayEngine()}`
    }

}

//details of engine

let car_detail = car.displayCar();
console.log(car_detail);

let car_engine = car.engine.displayEngine()
console.log(car_engine);


//contructor function object 

// function Book(bid, title, price){
//     this.bid = bid;
//     this.title = title;
//     this.price= price;
// }

// let book1 = new Book(12, 'java', 1500);

// let book2 = new Book(22, 'javascript', 1700);

// let book3 = new Book(32, 'python' , 1660);

// console.log(book1.title);


function Ac(cur_temp, max_temp, min_temp) {
    this.cur_temp = cur_temp;
    this.max_temp = max_temp;
    this.min_temp = min_temp;

    this.inctemp = function () {
        this.cur_temp++
    }

    this.dectemp = function () {
        this.cur_temp--
    }

    this.getmin = function () {
        return this.min_temp;
    }

    this.getmax = function () {
        return this.max_temp;
    }


    this.setmax = function (set) {
        this.max_temp = set
    }

    this.setmin = function (set) {
        this.min_temp = set
    }

}
let ac1 = new Ac(24, 28, 18);

console.log(ac1);
ac1.inctemp();
console.log(ac1);

ac1.setmax(30)
console.log(ac1.max_temp);