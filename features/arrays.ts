const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

//help with inference when extracting values

const oneCar = carMakers[0];
const myCar = carMakers.pop();

//help with map with autocomplete!

console.log(carMakers.map((car) => car + '!'));

const importantDates: (string | Date)[] = [new Date(), '2020'];
