const Animal = require("./cat.js");

class Cat extends Animal {
    constructor(name){
        super(name)
    }

    meow(){
        console.log("meeeooooooww");
    }

    scratch(){
        console.log("nyaaaaaaaa! ò.ó");
    }
}