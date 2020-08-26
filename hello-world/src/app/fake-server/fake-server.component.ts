import { Component, OnInit } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-fake-server',
  templateUrl: './fake-server.component.html',
  styleUrls: ['./fake-server.component.css']
})
export class FakeServerComponent implements OnInit {

	posts ;
	//url : 'https://jsonplaceholder.typicode.com/posts';

	//  Read
  constructor(private http : HttpClient) {
  				//let posts;
  				this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
  					data => {  this.posts = (data) ;
  						console.log(data);
  						 }
  					);
  		}


  		// Creating 
  		addPost(postdata )
  		{
  			let post = {title : postdata.value};
  			postdata.value='';
  			//console.log(postdata.value);
  			this.http.post(
  				'https://jsonplaceholder.typicode.com/posts',
  				JSON.stringify(post) 
  				).subscribe(
  				data=> {
  							console.log(data['id']);   //  on data.id it is working as well put showing n error 
  					post['id'] = data['id'];
  					this.posts.splice(0,0,post);
  				});
  		}
  		/*
  		Code is working well but it is showing some short of error like this 
  		ERROR in src/app/fake-server/fake-server.component.ts:36:27 - error TS2339: Property 'id' does not exist on type 'Object'.
   				 36                                                  console.log(data.id);
                                                                         ~~
    			src/app/fake-server/fake-server.component.ts:37:26 - error TS2339: Property 'id' does not exist on type 'Object'.
   				 37                                  post['id'] = data.id;
                                                          ~~
  		*/

  		onDelete(postdata )
  		{
  			console.log(postdata);
  			let post = postdata ;

  			this.http.delete('https://jsonplaceholder.typicode.com/posts'+'/'+post.id).subscribe(
  				data=>{

              let index = this.posts.indexOf(post);
              console.log(index);
               this.posts.splice(index,1);
  				});

  		}

      updatePost(postdata)
      {

        this.http.patch('https://jsonplaceholder.typicode.com/posts'+'/'+postdata.id,
            JSON.stringify({isRead : true})).subscribe(
              data => {
                console.log(data);
              });
      }
  ngOnInit(): void {
  }

}


//  because it is on fake-DB so we didn't have that type of access to the DB where we can check these changes performed 
// So to check wether the request is fully completed we have to go to ::  inspect-> Network ->Name->Check the Header -> check Request Method: PATCH and Status Code: 200 