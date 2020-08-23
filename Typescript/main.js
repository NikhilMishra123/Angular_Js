function firstCode(message) {
    console.log(message);
}
var msg = "Hello world ";
firstCode(msg);
//  now Datatype 
function datatype() {
    var i = 10; // can globaly acces 
    var c = 30; // can be accsed within the block declared 
}
datatype();
// type 
function type() {
    var a; // number , boolean , string any , number[] ( number array ) , any[] 
    var b;
    b = true;
    a = 2;
    console.log(a + " " + b);
}
type();
// types extension 
function types() {
    // constant decaration   
    var colourRED = 0;
    var colourBLUE = 1;
    var colourGREEN = 2;
    console.log(colourRED + " " + colourBLUE + " " + colourGREEN);
    //  using enum
    var Colour;
    (function (Colour) {
        Colour[Colour["Red"] = 0] = "Red";
        Colour[Colour["Green"] = 1] = "Green";
        Colour[Colour["Blue"] = 2] = "Blue";
    })(Colour || (Colour = {}));
    ;
    console.log(Colour.Red + " " + Colour.Green + " " + Colour.Blue);
    //we can manullay assign the values in this as well 
    var Coloursss;
    (function (Coloursss) {
        Coloursss[Coloursss["Red"] = 3] = "Red";
        Coloursss[Coloursss["Green"] = 1] = "Green";
        Coloursss[Coloursss["Blue"] = 2] = "Blue";
    })(Coloursss || (Coloursss = {}));
    ;
    console.log(Coloursss.Red + " " + Coloursss.Green + " " + Coloursss.Blue);
}
types();
// type Assertion 
/*
function typeAssertion()
{
    let msg = 'Hey Buddy ';

    let d = msg.endsWith('C');

    console.log('wether the string '+msg+'ends with c or not '+d);
}

typeAssertion();

// Error encountered with message as:-
// main.ts:77:14 - error TS2339: Property 'endsWith' does not exist on type 'string'.
// 77  let d = msg.endsWith('C');


*/
// arrow function 
var line_break = '\n';
console.log(line_break + " Arrow function ");
var fun = function (message) { console.log(message); };
fun('HIIII');
