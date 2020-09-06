const Cat = require('./cat');

class Lion extends Cat{
    constructor(name) {
        super(name);
    }

    roar(){
        console.log("Gaaaoooooooo!!!");
    }

    bite(){
        console.log("nhac!");
    }

    run(){
        console.log("run very fast! =O");
    }
}