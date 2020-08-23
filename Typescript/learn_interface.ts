interface Person 
{
	name : string ;
	age :  number;
}


function  display( person : Person)
{
	console.log("The name of the Person is "+person.name+" and its age is "+person.age);
}

display( { name : ' Nikhil ' , age : 22 });