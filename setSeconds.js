const timeFromDate = date => date.toTimeString().slice(0, 8);
const goToTop = () => window.scrollTo(0, 0);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;