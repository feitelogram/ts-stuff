@classDecorator
class Boat {
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `The boat's color is ${this.color}`;
  }

  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') return console.log('swish');
    console.log('pitter-patter');
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
  console.log(key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
