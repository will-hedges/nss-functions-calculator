const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const square = (num) => num * num;

const shouldBe100 = add(64, 36);
console.log(shouldBe100);

const shouldBe20 = subtract(24, 4);
console.log(shouldBe20);

const shouldBe72 = multiply(9, 8);
console.log(shouldBe72);

const shouldBe5 = divide(35, 7);
console.log(shouldBe5);

const shouldBe144 = square(12);
console.log(shouldBe144);

// 60 legs, 1/4 of animals have 4 legs
// let x represent the # of animals on the farm
// (0.25x * 4) + (0.75x * 2) = 60 legs
// x + 1.5x = 60
// 2.5x = 60
// x = 60 / 2.5

const numOfAnimals = divide(60, 2.5);
console.log(numOfAnimals); // 24
