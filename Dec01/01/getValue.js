import { input } from "./input.js";

const getValue = (input) => {
  console.log(`inputs ${input}`);
  let total = 0;
  for (let value of input) {
    console.log(`string to sanitize ${value}`);
    total += getNumberFromString(value);
    console.log(`total ${total}`);
  }
  console.log(total);
  return total;
};

const getNumberFromString = (stringInput) => {
  const sanitizedStringInput = sanitizeString(stringInput);
  console.log(`final sanitized string ${sanitizedStringInput}`);
  const stringArray = sanitizedStringInput.split("");
  //   console.log(stringArray);

  const isNumberRegex = /^[1-9]$/;

  let firstNumber = -1;
  let lastNumber = -1;

  while (firstNumber == -1) {
    const char = stringArray.shift();
    const isNum = isNumberRegex.test(char);
    if (isNum) firstNumber = char;
  }

  while (lastNumber == -1) {
    if (stringArray.length == 0) {
      lastNumber = firstNumber;
    } else {
      const char = stringArray.pop();
      const isNum = isNumberRegex.test(char);
      if (isNum) lastNumber = char;
    }
  }
  console.log(`number to add ${firstNumber}${lastNumber}`);
  return parseInt(firstNumber + lastNumber);
};

const sanitizeString = (stringValue) => {
  let sanitizedString = stringValue;
  //   sanitizeString = sanitizeString
  //     .replace("one", "one1one")
  //     .replace("two", "two2two")
  //     .replace("three", "three3three")
  //     .replace("four", "four4four")
  //     .replace("five", "five5five")
  //     .replace("six", "six6six")
  //     .replace("seven", "seven7seven")
  //     .replace("eight", "eight8eight")
  //     .replace("nine", "nine9nine");

  let firstWord = {
    word: "",
    index: sanitizedString.length,
  };
  let lastWord = {
    word: "",
    index: 0,
  };
  for (let each in wordToNum) {
    // console.log(`numberWord to search for: ${each}`);
    // while (sanitizedString.includes(each)) {

    //   //   console.log(`includes ${each}`);
    //   sanitizedString = exchangeWordForNumber(each, sanitizedString);
    //   //   console.log(`sanitized string ${sanitizedString}`);
    //
    // console.log(
    //   `${each} lastindexof ${sanitizedString.lastIndexOf(
    //     each
    //   )}  firstindexof ${sanitizedString.indexOf(each)}`
    // );
    if (
      sanitizedString.indexOf(each) != -1 &&
      sanitizedString.indexOf(each) < firstWord.index
    ) {
      //   console.log(
      //     `settin first word with ${each} ${sanitizedString.indexOf(each)}`
      //   );
      firstWord.word = each;
      firstWord.index = sanitizedString.indexOf(each);
    }
    if (
      sanitizedString.lastIndexOf(each) != -1 &&
      sanitizedString.lastIndexOf(each) > lastWord.index
    ) {
      //   console.log(
      //     `settin last word with ${each} ${sanitizedString.lastIndexOf(each)}`
      //   );
      lastWord.word = each;
      lastWord.index = sanitizedString.lastIndexOf(each);
    }
  }
  console.log(firstWord);
  console.log(lastWord);
  if (firstWord.word == "" && lastWord.word == "") return sanitizedString;

  if (firstWord.index === lastWord.index) {
    sanitizedString = exchangeWordForNumber(
      firstWord.word,
      firstWord.index,
      sanitizedString
    );
  } else {
    sanitizedString = exchangeWordForNumber(
      firstWord.word,
      firstWord.index,
      sanitizedString
    );
    if (sanitizedString.lastIndexOf(lastWord.word) != -1) {
      sanitizedString = exchangeWordForNumber(
        lastWord.word,
        sanitizedString.lastIndexOf(lastWord.word),
        sanitizedString
      );
    }
  }

  return sanitizedString;
};

const exchangeWordForNumber = (numWord, index, stringValue) => {
  console.log(numWord, index, stringValue);
  const newString =
    stringValue.substr(0, index) +
    wordToNum[numWord] +
    stringValue.substr(index + numWord.length);
  console.log(newString);
  return newString;
};

const wordToNum = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

// getValue(input);

// onethree8pqkzsmlfdcfhz

export { getValue };
