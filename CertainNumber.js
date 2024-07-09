const isArray = (arr) => Array.isArray(arr);
const isWeekday = (date) => date.getDay() % 6 !== 0;
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());