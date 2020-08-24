import { Component } from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
  selector: 'app-courses',
  template : `
   	<p>{{ title+" ::: " }} </p> 
   		<p *ngFor = 'let co of course'>
   			<b> {{ "Title " + (co.title | uppercase)}}</b> <br>
   			{{ "Student Enrolled " + (co.students | number)}} <br> 
   			{{ "Rating  " +co.rating}} <br>
   			{{ "Price " +co.price}} <br>
   			{{ "Date " + (co.relase_date)}} <br> 
   		</p>

       <button  class = "btn btn-primary" [class.active]="isActive" (click) = "OnClicking()" > Save </button>
   	 	`
   	

// // Note   there should be no space between {{ }} parenthesis  

//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  isActive = true ;
	title = " List of courses available ";
	course;
	// learning phase 1 
	//courses ;
	//courses = [ 'course1' , 'course2' ,  'course3']

  constructor( service_obj : CoursesService)// Here I am using dependency injection 
  	 {
  	// let service_obj = new CoursesService(); // this makes our code tightly copled 
	this.course = service_obj.getCourses();
	console.log(this.course);
   } 

   OnClicking()
   {
     console.log("Clicked performed ");
   }
}
