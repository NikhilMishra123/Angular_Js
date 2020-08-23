
import{ Point} from './export_class';

// import { module name }  from  file path 

let point = new Point();  // creating instance 
point.setX(2);
point.setY(2);

console.log("checking x and y " + point.getX()+" & "+point.getY());

point.show();

// command used to compile these two module is 
// command tsc *.ts 

