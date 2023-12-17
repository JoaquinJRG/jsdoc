/**
 * Clase Animal 
 * @class Animal
 */
class Animal {
    /**
     * Creates an instance of Animal.
     * @param {*} group 
     * @param {*} name
     * @param {*} age
     * @param {*} wayOfMoving
     * @param {*} habitat
     * @param {*} numberOfPaws
     * @param {*} hasTail
     * @memberof Animal
     */
    constructor(group, name, age, wayOfMoving, habitat, numberOfPaws, hasTail) {
      this.group = group;
      this.name = name;
      this.age = age;
      this.wayOfMoving = wayOfMoving;
      this.habitat = habitat;
      this.numberOfPaws = numberOfPaws;
      this.hasTail = hasTail;
    }
  
    sleep() {}
    awake() {}
    move() {}
    stop() {}
}

class Mammal extends Animal {}
class Reptile extends Animal {}  
class Fish extends Animal {}

let shark = new Fish("fish", "shark", 10, "swim", "sea", 0, false);
let cat = new Mammal("mammal", "cat", 4, null, 4, true);
let snake = new Reptile("reptile", "snake", 5, null, 0, true);
