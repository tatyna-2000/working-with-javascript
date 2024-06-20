const arrayContains = (arr, element) => arr.includes(element);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
console.log(1 +  +"2" + "2");