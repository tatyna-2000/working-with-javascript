const merge = Object.assign({}, obj1, obj2);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);