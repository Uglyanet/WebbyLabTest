function Animal (dogname) {
    this.dogname = dogname;

}

Animal.prototype.getName = function () {
    console.log(this.dogname);
};

function Dog () {
    Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    console.log('Dog ' + this.dogname + ' is barking');
};

var dog = new Dog('Aban');

dog.getName() === 'Aban';

dog.bark() === 'Dog Aban is barking';