import { input } from "./input.js";

const cutOff = {
  red: 12,
  green: 13,
  blue: 14,
};

const formatStringToObj = (bagString) => {
  const arr = bagString.split(",").join("").split(";").join("").split(" ");
  const bagObj = {};
  while (arr.length > 0) {
    const value = parseInt(arr.shift());
    const key = arr.shift();
    // console.log(`current key: ${key} value ${bagObj[key]}`);
    // console.log({ value });
    // console.log({ key });

    // console.log(
    //   `object value ${bagObj[key]} is less then new value ${value} :  ${
    //     bagObj[key] < value
    //   }`
    // );

    if (bagObj[key] < value || bagObj[key] == undefined) {
      // console.log(bagObj);
      // console.log("setting value");
      bagObj[key] = value;
      // console.log(bagObj);
    }
  }
  return bagObj;
};

const getPlayableBags = (input) => {
  console.log({ input });

  const playableBags = [];
  for (let eachKey of Object.keys(input)) {
    console.log({ eachKey });

    const obj = formatStringToObj(input[eachKey]);
    console.log({ obj });

    if (
      cutOff.red >= obj.red &&
      cutOff.green >= obj.green &&
      cutOff.blue >= obj.blue
    ) {
      console.log(eachKey.substring(eachKey.length - 1));

      playableBags.push(parseInt(eachKey.substring(eachKey.indexOf("e") + 1)));
    }
  }

  return playableBags.reduce((acc, curr) => acc + curr, 0);
};

const getBagsPowerScore = (input) => {
  console.log({ input });

  const bagPowerScores = [];
  for (let eachKey of Object.keys(input)) {
    console.log({ eachKey });

    const obj = formatStringToObj(input[eachKey]);
    console.log({ obj });

    bagPowerScores.push(obj.red * obj.green * obj.blue);
  }

  return bagPowerScores.reduce((acc, curr) => acc + curr, 0);
};

export { getPlayableBags, formatStringToObj, getBagsPowerScore };
