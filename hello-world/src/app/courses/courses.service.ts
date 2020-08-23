import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// this will act as a fake database for the course.component
// 
export class CoursesService {

		course1 = {
			title : 'Angular Js ',
			rating :  4.7945,
			students : 3598,
			price :  195.95,
			relase_date :   new Date("2019-01-16")
		}

		course2 = {
			title : 'HTML ',
			rating :  4.945,
			students : 5398,
			price :  100.95,
			relase_date :   new Date("2018-04-30")
		}

		courses = [ this.course1 , this.course2];
		getCourses()
		{
			return this.courses;
		}

  constructor() { }
}
