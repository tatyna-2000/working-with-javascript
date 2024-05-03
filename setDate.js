console.log("0 && 1 = "+(0 && 1));
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;