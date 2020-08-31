function addPrefix(prefix) {
  return function(name) {
    return `${prefix}${name}`
  }
}

const prefixSir = addPrefix("Sir");
const prefixDuchess = addPrefix("Duchess");

console.log(prefixSir(" Johnny"));
console.log(prefixDuchess(" Megan"));

function soundMaker(noise) {
  return function(animal) {
    return `${animal} says ${noise}`
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

console.log(lionSound("Lion"));

function addFix(prefix) {
  return function(suffix) {
    return function(name) {
      return `${prefix}${name}${suffix}`
    } 
  }
}

const misterJunior = addFix("Mister")("Junior");

console.log(misterJunior(" Johnny "));

function addAndMult(add) {
  return function(mul) {
    return function(num) {
      return `${num + add}, ${num * mul}`;
    }
  }
}

const addTwoMultiplyByThree = addAndMult(2)(3);
console.log(addTwoMultiplyByThree(4));