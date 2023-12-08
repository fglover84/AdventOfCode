import { input } from "./input.js";

const sanitizeObj = (obj) => {
  const newArr = {};

  for (let eachKey of Object.keys(obj)) {
    // Assuming eachKey is a number, convert it to a numeric value
    const numericKey = parseInt(eachKey);

    const cardArr = obj[numericKey].split("|");

    // Store the split card values in the newArr object
    newArr[eachKey] = [
      cardArr[0].split(" ").filter((value) => value !== ""),
      cardArr[1].split(" ").filter((value) => value !== ""),
    ];
  }

  return newArr;
};

const cardPoints = (cardArr) => {
  const card = cardArr[1];
  const numbersToMatch = cardArr[0];
  let matches = [];
  card.map((num) => {
    if (numbersToMatch.includes(num)) matches.push(num);
  });
  let points = 0;
  if (matches.length > 0) points = 1;
  if (matches.length > 1) {
    points = Math.pow(2, matches.length - 1);
  }
  return points;
};

const numWinCount = (cardArr) => {
  const card = cardArr[1];
  const numbersToMatch = cardArr[0];
  let matches = [];
  card.map((num) => {
    if (numbersToMatch.includes(num)) matches.push(num);
  });
  return matches.length;
};

const numberOfCards = (cards) => {
  let count = 0;
  const winningCardNumbers = [];

  for (let eachKey of Object.keys(cards)) {
    // console.log({ eachKey });

    let cardMatches = numWinCount(cards[eachKey]);
    // console.log({ cardMatches });
    if (cardMatches != 0) {
      count++;
    }
    while (cardMatches != 0) {
      winningCardNumbers.push(cardMatches + parseInt(eachKey));
      count++;
      cardMatches--;
    }
  }
  // console.log({ winningCardNumbers });
  while (winningCardNumbers.length > 0) {
    let cardNum = winningCardNumbers.pop();
    // console.log({ cardNum });
    // console.log(typeof cardNum.toString());
    // console.log(cards);

    // console.log(cards[cardNum.toString()]);
    let cardMatches = numWinCount(cards[cardNum.toString()]);
    while (cardMatches != 0) {
      winningCardNumbers.push(cardMatches + cardNum);
      count++;
      cardMatches--;
    }
  }
  return count;
};

const countCardPoints = (cards) => {
  let totalPoints = 0;
  for (let eachKey of Object.keys(cards)) {
    totalPoints = totalPoints + cardPoints(cards[eachKey]);
  }
  return totalPoints;
};

export { sanitizeObj, cardPoints, countCardPoints, numberOfCards };
