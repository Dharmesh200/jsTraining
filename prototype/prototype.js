function Emp(eid, ename) {
    this.eid = eid;
    this.ename = ename;

}

let e1 = new Emp(1, 'ab');
let e2 = new Emp(2, 'bc');
let e3 = new Emp(3, 'dc')

console.log(e1.eid);

Emp.prototype.company = 'tyss';

console.log(e1.company);

e2.company = 'google'

console.log(e2.company);

console.log(e2.company);


console.log(e3.company);

//example2 


Array.prototype.rev = (a) => {
    // for(let i = a.length-1; i>=0; i--)  {
    //     console.log(a[i]);
    // }

    a.reverse();
    console.log(a);
}

// console.log(Array.prototype)

let arr = [10, 20, 30];

arr.rev(arr);

