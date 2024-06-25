const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const randomString = () => Math.random().toString(36).slice(2);