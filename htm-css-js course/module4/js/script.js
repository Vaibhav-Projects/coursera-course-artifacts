var x = "Hello World!";
var message = "global";
console.log("global: message = " + message);

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    function b() {
        console.log("b: message = " + message); //it outer reference is function a
    }
    b();
}

function b() {
    console.log("b: message = " + message); //it outer reference is global
}
a();
b();