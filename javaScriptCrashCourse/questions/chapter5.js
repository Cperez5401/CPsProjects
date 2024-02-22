//1.
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    calculateArea(){
        let area = this.height * this.width
        return area
    }

}
const newRectangleObject = new Rectangle(5, 10)

console.log(newRectangleObject)

//2.
class Circle{
    constructor(radius){
        this.radius = radius
    }

}
const newCircle = new Circle(6)

console.log(newCircle)

//3.
console.log(newRectangleObject.calculateArea())

//4.
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    describe(){
        let details = this.name + ' ' + this.age
        return details
    }
}
const newPerson = new Person('chris', 22)

console.log(newPerson.describe())

//5. 
class Animal {
    constructor(species){
        this.species = species
    }

}

class Dog extends Animal{
    constructor(species, breed){
        super(species)
        this.breed = breed
    }

}

const carlie = new Dog('dog', 'shitpoo')
console.log(carlie)