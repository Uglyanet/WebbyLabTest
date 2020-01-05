class Animal {
    constructor(dogname) {
        this.dogname = dogname;
    }
    getName() {
        console.log(this.dogname);

    }
}

class Dog extends Animal {
    bark() {
        console.log('Dog ' + this.dogname + ' is barking');
    }
}

var dog = new Dog('Aban');

dog.getName() === 'Aban';

dog.bark() === 'Dog Aban is barking';