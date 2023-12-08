import { input } from "./input.js";

const findSumOfPartNumbers = (input) => {
  let partNumberArr = sanitizeArray(input);
  let total = 0;
  let gearRatioSum = 0;
  // console.log({ partNumberArr });
  let nextSymbol = findNextSymbol(partNumberArr, 0, 0, true);
  console.log({ nextSymbol });
  const sum = checkAroundSymbolForPart(
    partNumberArr,
    nextSymbol[0],
    nextSymbol[1]
  );
  partNumberArr = sum[1];
  total = total + sum[0];
  gearRatioSum = gearRatioSum + sum[2];
  nextSymbol = findNextSymbol(
    partNumberArr,
    nextSymbol[0],
    nextSymbol[1],
    false
  );
  console.log({ nextSymbol });

  while (nextSymbol != null) {
    console.log({ nextSymbol });

    const sum = checkAroundSymbolForPart(
      partNumberArr,
      nextSymbol[0],
      nextSymbol[1]
    );
    partNumberArr = sum[1];
    total = total + sum[0];
    gearRatioSum = gearRatioSum + sum[2];

    // console.log(nextSymbol);
    nextSymbol = findNextSymbol(
      partNumberArr,
      nextSymbol[0],
      nextSymbol[1],
      false
    );
  }
  // const symbolPosition = findNextSymbol(input, 0, 0);
  // console.log({ partNumberArr });
  return [total, gearRatioSum];
};

const checkAroundSymbolForPart = (arr, row, index) => {
  let newArray = arr;
  // console.log(`start array: ${newArray}`);
  let isSymbolGear = arr[row][index] === "*";

  let total = 0;
  let numOfPartsPerSymbol = 0;
  let partNumArr = [];
  let gearRatio = 0;
  if (row === 0) {
    if (index != 0) {
      //check left
      let part = getWholePartNumberOrNull(arr[row], index - 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }

        newArray = findPartNumberAndReplace(newArray, row, [part[1], part[2]]);
      }
      // console.log({ newArray });

      //check left and down one
      part = getWholePartNumberOrNull(arr[row + 1], index - 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row + 1, [
          part[1],
          part[2],
        ]);
      }
      // console.log({ newArray });
    }
    if (index != arr[row].length - 1) {
      //check right
      let part = getWholePartNumberOrNull(arr[row], index + 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row, [part[1], part[2]]);
      }
      // console.log({ newArray });

      //check right and down one
      part = getWholePartNumberOrNull(arr[row + 1], index + 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row + 1, [
          part[1],
          part[2],
        ]);
      }
      // console.log({ newArray });
    }
    //check row beneath
    let part = getWholePartNumberOrNull(arr[row + 1], index);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row + 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });
  } else if (row === arr.length - 1) {
    if (index != 0) {
      //check left:
      let part = getWholePartNumberOrNull(arr[row], index - 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row, [part[1], part[2]]);
      }
      // console.log({ newArray });
      //check left and up
      part = getWholePartNumberOrNull(arr[row - 1], index - 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row - 1, [
          part[1],
          part[2],
        ]);
      }
      // console.log({ newArray });
    }
    if (index != arr[row].length - 1) {
      //check right
      let part = getWholePartNumberOrNull(arr[row], index + 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row, [part[1], part[2]]);
      }
      // console.log({ newArray });

      //check right and up one
      part = getWholePartNumberOrNull(arr[row - 1], index + 1);
      // console.log({ part });

      if (part[0] != null) {
        total = total + part[0];
        if (isSymbolGear) {
          numOfPartsPerSymbol++;
          partNumArr.push(part[0]);
        }
        newArray = findPartNumberAndReplace(newArray, row - 1, [
          part[1],
          part[2],
        ]);
      }
      // console.log({ newArray });
    }

    //check row above
    let part = getWholePartNumberOrNull(arr[row - 1], index);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row - 1, [
        part[1],
        part[2],
      ]);
    }
  } else {
    // check all directions
    //check left
    let part = getWholePartNumberOrNull(arr[row], index - 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row, [part[1], part[2]]);
    }
    // console.log({ newArray });

    //check left and down one
    part = getWholePartNumberOrNull(arr[row + 1], index - 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row + 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });
    //check row beneath
    part = getWholePartNumberOrNull(arr[row + 1], index);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row + 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });

    //check right
    part = getWholePartNumberOrNull(arr[row], index + 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row, [part[1], part[2]]);
    }
    // console.log({ newArray });

    //check right and down one
    part = getWholePartNumberOrNull(arr[row + 1], index + 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row + 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });
    //check right and up one
    part = getWholePartNumberOrNull(arr[row - 1], index + 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row - 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });
    //check row above
    part = getWholePartNumberOrNull(arr[row - 1], index);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row - 1, [
        part[1],
        part[2],
      ]);
    }
    //check right and up one
    part = getWholePartNumberOrNull(arr[row - 1], index + 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row - 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });
    //check left and up
    part = getWholePartNumberOrNull(arr[row - 1], index - 1);
    // console.log({ part });

    if (part[0] != null) {
      total = total + part[0];
      if (isSymbolGear) {
        numOfPartsPerSymbol++;
        partNumArr.push(part[0]);
      }
      newArray = findPartNumberAndReplace(newArray, row - 1, [
        part[1],
        part[2],
      ]);
    }
    // console.log({ newArray });
  }

  if (isSymbolGear && partNumArr.length == 2) {
    gearRatio = partNumArr[0] * partNumArr[1];
  }
  return [total, newArray, gearRatio];
};

const findPartNumberAndReplace = (partNumberArr, row, coords) => {
  const newPartNumberArr = partNumberArr;
  // console.log({ newPartNumberArr });
  for (let i = coords[0]; i <= coords[1]; i++) {
    newPartNumberArr[row][i] = ".";
  }
  // console.log({ newPartNumberArr });
  return newPartNumberArr;
};

const getWholePartNumberOrNull = (rowArr, index) => {
  const newArr = rowArr;
  let startIndex;
  let endIndex;
  const numRegex = /[0-9]/;
  // console.log(newArr);
  // console.log(`start index $[{index}: ${newArr[index]}`);

  if (numRegex.test(newArr[index])) {
    let rightPos = index;
    let leftPos = index;
    while (startIndex === undefined) {
      if (leftPos == 0) {
        startIndex = leftPos;
      } else if (!numRegex.test(newArr[leftPos - 1])) {
        startIndex = leftPos;
      } else {
        leftPos--;
      }
    }
    while (endIndex === undefined) {
      if (rightPos == newArr.length - 1) {
        endIndex = rightPos;
      } else if (!numRegex.test(newArr[rightPos + 1])) {
        endIndex = rightPos;
      } else {
        rightPos++;
      }
    }
    const partNum = parseInt(newArr.slice(startIndex, endIndex + 1).join(""));
    // console.log(partNum);
    return [partNum, startIndex, endIndex];
  }
  return [null];
};

function replacePartNumInRange(arr, start, end, replacementValue) {
  const newArr = arr;
  for (let i = start; i <= end; i++) {
    newArr[i] = replacementValue;
  }
  return newArr;
}

const findNextSymbol = (arr, currentRow, currentPos, firstPlay) => {
  let newCurrentPos;
  let newCurrentRow;
  if (!firstPlay) {
    if (currentPos == currentRow.length - 1) {
      newCurrentPos = 0;
      newCurrentRow = currentRow + 1;
    } else {
      newCurrentPos = currentPos + 1;
    }
  } else {
    newCurrentPos = currentPos;
    newCurrentRow = currentRow;
  }
  const symbolRegex = /[^\w\s.]/;
  for (let row = currentRow; row < arr.length; row++) {
    // console.log(`row ${row}: ${input[row]}`);
    for (let index = newCurrentPos; index < arr[currentRow].length; index++) {
      // console.log(`index ${index}: ${input[row][index]}`);
      // console.log(`matches regex ${symbolRegex.test(input[row][index])}`);

      if (symbolRegex.test(arr[row][index])) {
        const currPos = [row, index];
        // console.log(`current pos ${currPos}`);
        return currPos;
      }
    }
    newCurrentPos = 0;
    // console.log({ newCurrentPos });
  }
  return null;
};

const sanitizeArray = (input) => {
  for (let eachRow in input) {
    // console.log(input[eachRow]);
    input[eachRow] = input[eachRow][0].split("");
    // console.log(input[eachRow]);
  }
  // console.log({ input });
  return input;
};

export {
  findSumOfPartNumbers,
  findNextSymbol,
  sanitizeArray,
  getWholePartNumberOrNull,
  findPartNumberAndReplace,
  checkAroundSymbolForPart,
};
