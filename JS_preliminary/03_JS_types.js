var animal = { eats: true };

rabbit = Object.create(animal);
console.log(rabbit.eats);
console.log(rabbit.prototype);
