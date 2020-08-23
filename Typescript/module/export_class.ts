

export class Point 
{
	private x: number;
	private y:  number ;
	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	setX(x) {
		this.x= x;
	}

	setY(y){
		this.y =y ;
	}


	show(){
		console.log(" Points are ::: x = "+this.x+" and y = "+this.y);
	}
}
