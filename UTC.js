const flattenedArray = arr => [].concat(...arr);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);