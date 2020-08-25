import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidator} from './custom-validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

	form =  new FormGroup({
		'username' : new FormControl("nikhilmishra44", [ 
			Validators.required ,
			Validators.minLength(3),
			Validators.maxLength(20),
			UsernameValidator.cannotContainSpace
			],
			UsernameValidator.shouldBeUnique
			),
		'password' : new FormControl("" , [ 
			Validators.required ,
			Validators.minLength(3),
			Validators.maxLength(20)
			])
	})

	loginCheck(data)
	{
		console.log(data.value.username);
		console.log(data.value.password);
		//  check th username  and password from the db
		this.form.setErrors( {invalidLogin:true})
		console.log(this.form);
		/*
		here are the some attribute of the form we can clearly observe that there is an error 
		errors: {invalidLogin: true}
		pristine: false
		status: "INVALID"
		*/

	}

}
