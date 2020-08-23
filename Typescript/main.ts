

function firstCode(message)
{
	
	console.log(message);
}

var msg = "Hello world ";

firstCode(msg);


//  now Datatype 


function datatype( )
{
	var i =10; // can globaly acces 
	let c = 30 ; // can be accsed within the block declared 

}

datatype();


// type 

function type()
{
	 let a : number ; // number , boolean , string any , number[] ( number array ) , any[] 
	 let b : boolean ;

	 b  = true;
	 a = 2;
	 console.log(a+" "+ b);
}

type();


// types extension 


function  types () {

	// constant decaration   

	const  colourRED = 0;
	const  colourBLUE = 1;
	const  colourGREEN = 2;
	
	console.log(colourRED+" "+colourBLUE+" "+colourGREEN);

	//  using enum

	enum Colour { 'Red', 'Green' , 'Blue'};

	console.log(Colour.Red+" "+Colour.Green+" "+Colour.Blue);

	//we can manullay assign the values in this as well 

	enum Coloursss { 'Red'=3 , 'Green'=1 , 'Blue'=2};
	console.log(Coloursss.Red+" "+Coloursss.Green+" "+Coloursss.Blue);
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

console.log(line_break+ "Arrow function ");
let fun  = (message) => { console.log( message)};

fun('HIIII');


// 

