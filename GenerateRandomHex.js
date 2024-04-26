const removeDuplicates = (arr) => [...new Set(arr)];
const isTabInView = () => !document.hidden;
const merge = [...new Set(a.concat(b))];
const merge = (a, b) => [...a, ...b];
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const scriptRootPath = path.join(repositoryRootPath, 'script');