/* 
    Interface segregation principle - Принцип разделения интерфейса
    Много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения.
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const walker = {
  canWalk() {
    console.log(`${this.name} can walk`);
  },
};
const swimmer = {
  canSwim() {
    console.log(`${this.name} can walk`);
  },
};
const flyer = {
  canFly() {
    console.log(`${this.name} can walk`);
  },
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flyer, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Dog');
dog.canWalk();
dog.canSwim();

const eagle = new Eagle('Eagle');
dog.canWalk();
dog.canFly();

const whale = new Whale('Whale');
dog.canSwim();
