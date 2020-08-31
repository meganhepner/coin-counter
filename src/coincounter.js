export default function coinCounter(cents) {
  // if ( typeof money != "string") {
  //   return;
  // } 
  const quarters = Math.floor(cents/25);
  return quarters;
  // cents % 25 = remainder


}

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

// quarters = Math.round(cents/25);
// remaining change = cents % 25;