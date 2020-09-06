const Animal = require("./cat.js");

class Car extends Animal {
    constructor(name){
        super(name)
    }

    meow(){
        console.log("meeeooooooww");
    }
}