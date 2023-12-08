interface CardsInput {
  [num: number]: string;
}

type CardsOutput = {
  [num: number]: [[string, string]];
};

const sanitizeObj = (obj: CardsInput): CardsOutput => {
  const newArr: CardsOutput = {};

  for (let eachKey of Object.keys(obj)) {
    // Assuming eachKey is a number, convert it to a numeric value
    const numericKey: number = parseInt(eachKey, 10);

    const cardArr: string[] = obj[numericKey].split("|");

    // Store the split card values in the newArr object
    newArr[numericKey] = [[cardArr[0], cardArr[1]]];
  }

  return newArr;
};

export { sanitizeObj };
