export default function coinCounter(cents) { // input : 99 output : 3 quarters, 2 dimes, 4 pennies
  if (isNaN(cents)) {
    return;
  } 
  if (cents === 0) {
    return (quarters, dimes, nickels, pennies) // or array
  } else {
  const quarters = Math.floor(cents/25);
  return coinCounter(cents );
  // cents % 25 = remainder
  // return coinCounter((cents - ())
  // return coinCounter(Math.floor(cents/25))
  }
}


const coinChanger = change("quarter");
// money.split(".")

// function coinCounter(cents) {
//  return `The number of pennies is {cents}.`
//    return `The number of nickes is {cents}`
//      return `The number of dimes is {cents}`
//        return `The number of quarters is {cents}`
//}
// function coinCointer(cents){
//      return function (quarters) {
//        return `The number of ${quarters} is ${cents}`
//      }
//}

// Some math?
// quarters = Math.round(cents/25);
// remaining change = cents % 25;


// Closure?
// const divider = (numberToDivideBy) => {
//  return (numberToDivide) => {
//    return numberToDivide / numberToDivideBy;
//  }
//}
// const quarters = divider(25)
// const dimes = divider(10)
// const nickels = divider(5)
// const pennies = divider(1)
//
// quarters(99)