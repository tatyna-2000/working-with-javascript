const allResults = await Promise.all(items.map(async (item) => {}));
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");