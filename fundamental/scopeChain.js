//scope chain

function x() {
    let a = 10;
    function y() {
        let b = 15;
        function z() {
            let c = 30;
            console.log(c);
            console.log(b);
            console.log(a);
        }
        return z
    }
    return y
}
x()()();


//example2 

function dhar() {
    console.log('dhar');
    function war() {
        console.log('idiot learn it properly');

    }
    return war
}

let D = dhar();
D();