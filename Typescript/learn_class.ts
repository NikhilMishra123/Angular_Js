

class Person 
{
	private _name : string ;
	private _age : number ;
	private  _skill : string ;

	constructor( _name , _age , _skill)
	{
		this._name = _name ;
		this._age =_age ;
		this._skill =_skill;
	}

	display()
	{
		console.log("Hi my name is "+this._name+" and i am "+this._age+" year old. I am learning "+this._skill);
	}

	get name() {
		return this._name;
	}

	get age() {
	 	return this._age;
	}

	get skill()	{
		return this._skill;
	}

	set name ( _name){
	this._name= _name;
	}


	set age ( _age){

	this._age= _age;
	}


	set skill ( _skill){
	this._skill= _skill;
	}

}


var linebreak ='\n';
let person = new Person('Nikhil Mishra', 21, 'Typescript');

console.log("Data of person is  "+ linebreak);
person.display();

console.log(linebreak);
var personName=  person.name;
console.log(personName);
person.name = 'Nikhil';

console.log("Edited data is "+ linebreak);
person.display();



// Note :  target es5 for this typescript transpile it into javascript ;
// command ::::   tsc -t  es5 learn_class.ts
// command ::::    node learn_class.js



// used Properties in this   get X() and set X() 