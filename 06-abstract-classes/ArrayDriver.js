"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCricle = new Circle_1.Cricle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// declare an array of shape ...initially empty
let theShapes = [];
// add the shapes to the array
theShapes.push(myCricle);
theShapes.push(myRectangle);
for (const tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
