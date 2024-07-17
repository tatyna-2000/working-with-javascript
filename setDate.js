const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());