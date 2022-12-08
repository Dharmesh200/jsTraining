// for of loop example

//que1
let iterate = [1, 2, 3, 4, 5, 6, 7, 8]
for (let arr of iterate) {
    console.log(arr);
}


//que2
let hetero = [1, 2, 3, 4, 5, 'abc', 'pqr']
for (let info of hetero) {
    console.log(info);
}


//que3
let emp = {
    eid: 101,
    sal: 1000,
    ename: 'mahesh',
}
for (let obj1 in emp) {
    console.log(obj1);
}

// que4let dharmesh = {
let dharmesh = {
    age: 24,
    place: 'pune',
    designation: 'trainee',
    skill: ['mech', 'java', 'mern']
}

for (let detail in dharmesh) {
    console.log(detail);
    console.log(`${detail} => ${dharmesh[detail]}`);
}