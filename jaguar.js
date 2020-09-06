const Cat = require('./cat');

class Jaguar extends Cat {
    constructor(name){
        super(name);
    }

    run(){
        console.log("run very very fast, wow! O.O")
    }
}