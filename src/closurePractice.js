function addPrefix(prefix) {
  return function(name) {
    return `${prefix}${name}`
  }
}

const prefixSir = addPrefix("Sir");
const prefixDuchess = addPrefix("Duchess");

console.log(prefixSir(" Johnny"));
console.log(prefixDuchess(" Megan"));