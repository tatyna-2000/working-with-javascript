console.log("0 && 1 = "+(0 && 1));
const scriptRootPath = path.join(repositoryRootPath, 'script');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));