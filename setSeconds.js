const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const result = await makeHttpRequest(url);
const currentDate = () => new Date().toLocaleDateString('en-US');