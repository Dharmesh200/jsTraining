// class car{
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return "I Have a"+this.carname;
//     }
// }

// let mycar = new car("Ford");
// console.log(mycar.carname);
// console.log(mycar.present());

// 1.What is logged in the console?(3 marks)
// function Person(pid,pname){
// this.pid=pid;
// this.pname=pname;
// }

// function Student(sid){
// this.sid=sid;
// }
// let p1 = new Person(1,'Allen');
// let s1 = new Student(2);

// s1.__proto__=p1;
// console.log(s1.sid);
// console.log(s1.pid);
// console.log(s1.pname);
// console.log(p1.pid);
// console.log(p1.pname);
// console.log(p1.sid);

// 2.What is logged in the console?(6 marks)
function Emp(eId, eName) {
    this.eId = eId;
    this.eName = eName
}
console.log(Emp.prototype.constructor);
let e1 = new Emp(1, 'A');
let e2 = new Emp(1, 'B');
let e3 = new Emp(1, 'C');
console.log(e1.__proto__);
console.log(Emp.prototype);
console.log(Emp.prototype === e1.__proto__);
Emp.prototype.cname = 'tyss';
console.log(e1.cname);
console.log(Emp.prototype.cname);
e1.cname = 'google'
console.log(e1.cname);
console.log(e2.cname);
console.log(e3.cname);
console.log(Emp.prototype.cname);
Emp.prototype.cname = 'IBM'
console.log(e1.cname);
console.log(e2.cname);

// 3.What is logged in console? (2 mark)
// let a = [2,7,4,5,1,0,9,0,-19,20,-99];
// console.log(Math.max(...a));
// console.log(Math.max(a))


// 4.What is logged in console? (1 mark)
// let b = [0,1,2,-9,0]
// console.log(Math.max(b[0],b[1],b[2]));

// 5.What is logged in console? (2 mark)
// let empDetails={
// id:222,
// sal:299999
// }
// console.log(empDetails);
// console.log(...empDetails);
// 6.What is logged in console? (2 mark)
// let city = 'Bengaluru';
// console.log(city);
// console.log(...city);
// 7.What is logged in console? (2 mark)
// let city = 'Bengaluru';
// let c = city;
// let c1 = [...city];
// console.log(c);
// console.log(c1);
// 8.What is logged in console? (3 marks)
// let a1 = [10,20,30];
// let a2 = [60,70,80];
// let a3 = [...a1]
// let a4 = [...a2]
// let a5 = [`${a3+a4}`];
// console.log(a5);
// console.log(a3);
// console.log(a4);
// console.log(...a3,...a4);
// console.log([...a3,...a4])
// console.log({a1})