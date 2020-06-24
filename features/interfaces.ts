interface Reportable {
  summary(): string;
}

const printReportable = (item: Reportable) => {
  console.log(item.summary());
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return "This Car's Name is" + this.name;
  },
};

const coke = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    return `This drink is ${this.color}, it is ${
      this.carbonated ? '' : 'not '
    }carbonated and it has ${this.sugar} grams of sugar.`;
  },
};

printReportable(coke);
