"use strict";
exports.__esModule = true;
var export_class_1 = require("./export_class");
// import { module name }  from  file path 
var point = new export_class_1.Point(); // creating instance 
point.setX(2);
point.setY(2);
console.log("checking x and y " + point.getX() + " & " + point.getY());
point.show();
// command used to compile these two module is 
// command tsc *.ts 
