class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything([1, 2, 3]);

// example of generics with functions

const printStrings = (arr: string[]): void => {
  arr.forEach((str) => console.log(str));
};

const printNumbers = (arr: number[]): void => {
  arr.forEach((num) => console.log(num));
};

function printAnything<T>(arr: T[]): void {
  arr.forEach((el) => console.log(el));
}

printAnything<number>([1, 2, 3]);

//is the same as

printAnything([1, 2, 3]);

//generic constraints

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

// function printHousesOrCars<T>(arr: T[]) {
//   arr.forEach((el) => el.print);
// }
