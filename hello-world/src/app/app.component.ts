import { Component } from '@angular/core';
import {FavouriteComponent} from './favourite/favourite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
 	post = {
 		title: "Title",
 		isFavourite: true ,
 	}

 	onFavouriteChanged()
 	{
 		console.log("Favourite changes ");
 	}

}
