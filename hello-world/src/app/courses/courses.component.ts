import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template : `<h2> Hello  world </h2>
   	<p>{{ tittle+" ::: " }} </p>
   	<ul>
   		<li *ngFor = 'let course of courses'>
   		{{course}}
   		</li>
   	</ul>`

// // Note   there should be no space between {{ }} parenthesis  

//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	tittle = " List of courses ";
	//courses ;
	courses = [ 'course1' , 'course2' ,  'course3']

  constructor() { }

  ngOnInit(): void {
  }

}
