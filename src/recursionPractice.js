const recurseReverse = (sentence) => {
  if (sentence === "") {
    return "";
  } else {
    console.log(sentence);
    const arr = sentence.split(" ").slice(1);
    const string = arr.join(" ");
    return recurseReverse(string) + ` ${arr[0]}`;
  }
}

console.log(recurseReverse("I am a cat"));

// trying to split the sentence into an array, but 2nd time through array is not a string type which can be split
// is slice a destrctive method that can't be used in func programming
// can we use loops in func programming (ever)