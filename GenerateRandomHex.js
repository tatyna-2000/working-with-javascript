const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const executableName = getExecutableName(channel, appName);
const merge = [...new Set([...a, ...b])];