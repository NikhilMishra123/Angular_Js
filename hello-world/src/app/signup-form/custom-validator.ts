import {AbstractControl, ValidationErrors ,  } from '@angular/forms'

export class UsernameValidator{
	static cannotContainSpace(control : AbstractControl) : ValidationErrors|null{
		if( (control.value as string).indexOf(' ')>=0)
			return {
					cannotContainSpace :'Has space in it' };
	}

	static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>   
	{
		 return new Promise( ( resolve , reject ) => {
		 		setTimeout( ( )=> 
		 			{
		 					if (control.value =='Nikhil')
		 						resolve({ shouldBeUnique : ' Name already taken ' });
		 					else
		 						resolve(null);
		 			}
		 			,2000 );
		 	});
	}
}