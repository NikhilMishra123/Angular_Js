import { Component, OnInit , Input , Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit 
{

	@Input('is_favourite') isFavourite :  boolean; 
	//@Output() clear
  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
  	this.isFavourite = !this.isFavourite;
  }

}
