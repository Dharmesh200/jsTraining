
// function add(){
//     let n1 = Number(document.getElementById("n1").value);

//     let n2 = Number(document.getElementById("n2").value);

//     let res = n1 + n2;
//     document.getElementById("p1").textContent=res;
// }

// function sub(){
//     let n1 = Number(document.getElementById("n1").value);

//     let n2 = Number(document.getElementById("n2").value);

//     let res = n1 - n2;
//     document.getElementById("p1").textContent=res;
// }

// function mul(){
//     let n1 = Number(document.getElementById("n1").value);

//     let n2 = Number(document.getElementById("n2").value);

//     let res = n1 * n2;
//     document.getElementById("p1").textContent=res;
// }

// function div(){
//     let n1 = Number(document.getElementById("n1").value);

//     let n2 = Number(document.getElementById("n2").value);

//     let res = n1 / n2;
//     document.getElementById("p1").textContent=res;
// }

// function mod(){
//     let n1 = Number(document.getElementById("n1").value);

//     let n2 = Number(document.getElementById("n2").value);

//     let res = n1 % n2;
//     document.getElementById("p1").textContent=res;
// }


function operationOnTwo(cb) {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let res = cb(n1, n2)
    document.getElementById("p1").textContent = res;

}

function add() {
    operationOnTwo((a, b) => a + b);
}

function sub() {
    operationOnTwo((a, b) => a - b);
}

function mul() {
    operationOnTwo((a, b) => a * b);
}
function div() {
    operationOnTwo((a, b) => a / b);
}
function mod() {
    operationOnTwo((a, b) => a % b);
}