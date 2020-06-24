const { log } = console;

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

//help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//help with map

log(carMakers.map((car) => car + '!'));
