import { Component, OnInit } from '@angular/core';
import{CoursesService} from './../courses/courses.service';
@Component({
  selector: 'app-learning-derivatives',
  templateUrl: './learning-derivatives.component.html',
  styleUrls: ['./learning-derivatives.component.css']
})
export class LearningDerivativesComponent implements OnInit {

	courses;   //= [ 'course1','course2'] ; //passing course manually is 
	viewMode = 'map';

	task1 = {
		title : 'Review app',
		assignee : { 
			name:'John'
		}
	}
	task2 = {
		title : 'Final Review app',
		assignee : {}
	}

	tasks =[ this.task1, this.task2];
	// using the service to get the courses available  
  constructor(service_obj : CoursesService) 
   {
   		this.courses = service_obj.getCourses();
   		console.log(this.courses);
   }

  ngOnInit(): void {
  }

}
