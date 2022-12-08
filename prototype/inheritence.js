// protoype inhertance


function Person(pid, pname) {
    this.pid = pid;
    this.pname = pname;
}

function Student(sid) {
    this.sid = sid;
}

let p1 = new Person(11, 'allen');

let s1 = new Student(21);

s1.__Proto__ = p1

console.log(s1);