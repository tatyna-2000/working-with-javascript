const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const maxNumber = arr => Math.max(...arr);