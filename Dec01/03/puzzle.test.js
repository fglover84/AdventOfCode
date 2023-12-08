const {
  findSumOfPartNumbers,
  findNextSymbol,
  sanitizeArray,
  getWholePartNumberOrNull,
  findPartNumberAndReplace,
  checkAroundSymbolForPart,
} = require("./puzzle.js");
const { input } = require("./input.js");

const testData = [
  ["467..114.."],
  ["...*......"],
  ["..35..633."],
  ["......#..."],
  ["617*......"],
  [".....+.58."],
  ["..592....."],
  ["......755."],
  ["...$.*...."],
  [".664.598.."],
];

describe("given the input ", () => {
  test("should check all adjacent chars and return total and modified array", () => {
    expect(findSumOfPartNumbers(input)).toEqual([537832, 81939900]);
  });
  test("should check all adjacent chars and return total and modified array", () => {
    expect(findSumOfPartNumbers(testData)).toEqual([4361, 467835]);
  });
  test("should check all adjacent chars and return total and modified array", () => {
    let smallArr = [["467*.114.."], ["...*......"]];
    smallArr = sanitizeArray(smallArr);
    const expectedArr = [
      [".", ".", ".", "*", ".", "1", "1", "4", ".", "."],
      [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
    ];

    expect(checkAroundSymbolForPart(smallArr, 0, 3)).toEqual([
      467,
      expectedArr,
      0,
    ]);
  });

  test("should check all adjacent chars and return total and modified array", () => {
    let smallArr = [["467*.114.."], ["...*......"], ["..35.*633."]];
    smallArr = sanitizeArray(smallArr);
    const expectedArr = [
      ["4", "6", "7", "*", ".", "1", "1", "4", ".", "."],
      [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
      [".", ".", "3", "5", ".", "*", ".", ".", ".", "."],
    ];

    expect(checkAroundSymbolForPart(smallArr, 2, 5)).toEqual([
      633,
      expectedArr,
      0,
    ]);
  });

  test("should remove a part number from the array replacing with .", () => {
    let smallArr = [["467..114.."], ["...*......"], ["..35..633."]];
    smallArr = sanitizeArray(smallArr);
    const expectedArr = [
      [".", ".", ".", ".", ".", "1", "1", "4", ".", "."],
      [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", "6", "3", "3", "."],
    ];
    expect(checkAroundSymbolForPart(smallArr, 1, 3)).toEqual([
      502,
      expectedArr,
      16345,
    ]);
  });

  test("should remove a part number from the array replacing with .", () => {
    let smallArr = [["467..114.."], ["...*......"], ["..35..633."]];
    smallArr = sanitizeArray(smallArr);
    const expectedArr = [
      [".", ".", ".", ".", ".", "1", "1", "4", ".", "."],
      [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
      [".", ".", "3", "5", ".", ".", "6", "3", "3", "."],
    ];
    expect(findPartNumberAndReplace(smallArr, 0, [0, 2])).toEqual(expectedArr);
  });

  test("should remove a part number from the array replacing with .", () => {
    let smallArr = [["467..114.."], ["...*......"], ["..35..633."]];
    smallArr = sanitizeArray(smallArr);
    const expectedArr = [
      ["4", "6", "7", ".", ".", "1", "1", "4", ".", "."],
      [".", ".", ".", "*", ".", ".", ".", ".", ".", "."],
      [".", ".", "3", "5", ".", ".", ".", ".", ".", "."],
    ];
    expect(findPartNumberAndReplace(smallArr, 2, [6, 8])).toEqual(expectedArr);
  });

  test("should return back the position of the first symbol", () => {
    let smallArr = [["467..114.."], ["...*......"], ["..35..633."]];
    smallArr = sanitizeArray(smallArr);
    expect(findNextSymbol(smallArr, 0, 0)).toEqual([1, 3]);
  });

  test("should return back the position of the first symbol", () => {
    let smallArr = [["467..114.."], ["...*......"], ["..35..633."]];
    smallArr = sanitizeArray(smallArr);
    expect(findNextSymbol(smallArr, 0, 5)).toEqual([1, 3]);
  });

  test("should return back the position of the first and the second symbol", () => {
    let smallArr = [
      ["467..114.."],
      ["...*......"],
      ["..35..633."],
      ["......#..."],
    ];
    smallArr = sanitizeArray(smallArr);
    const firstSymbol = findNextSymbol(smallArr, 0, 0, true);
    const secondSymbol = findNextSymbol(
      smallArr,
      firstSymbol[0],
      firstSymbol[1],
      false
    );
    expect(firstSymbol).toEqual([1, 3]);
    expect(secondSymbol).toEqual([3, 6]);
  });

  test("should return back the position of the first and the second symbol", () => {
    let smallArr = [
      ["*67..114.."],
      ["...*......"],
      ["..35..633."],
      ["......#..."],
    ];
    smallArr = sanitizeArray(smallArr);
    const firstSymbol = findNextSymbol(smallArr, 0, 0, true);
    const secondSymbol = findNextSymbol(
      smallArr,
      firstSymbol[0],
      firstSymbol[1],
      false
    );
    expect(firstSymbol).toEqual([0, 0]);
    expect(secondSymbol).toEqual([1, 3]);
  });

  test("should return back the position of the first, second and third symbol", () => {
    let smallArr = [
      ["167..114.*"],
      ["...*......"],
      ["..35..633."],
      ["......#..."],
    ];
    smallArr = sanitizeArray(smallArr);
    const firstSymbol = findNextSymbol(smallArr, 0, 0, true);
    const secondSymbol = findNextSymbol(
      smallArr,
      firstSymbol[0],
      firstSymbol[1],
      false
    );
    const thirdSymbol = findNextSymbol(
      smallArr,
      secondSymbol[0],
      secondSymbol[1],
      false
    );
    expect(firstSymbol).toEqual([0, 9]);
    expect(secondSymbol).toEqual([1, 3]);
    expect(thirdSymbol).toEqual([3, 6]);
  });

  test("should return back the whole part number when given the row and index", () => {
    let row = ["*", "6", "7", ".", ".", "1", "1", "4", ".", "."];
    const partNum = getWholePartNumberOrNull(row, 2);
    expect(partNum).toEqual([67, 1, 2]);
  });

  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", ".", ".", "1", "1", "4", ".", "."];
    const partNum = getWholePartNumberOrNull(row, 2);
    expect(partNum).toEqual([167, 0, 2]);
  });

  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", ".", ".", "1", "1", "4", ".", "."];
    const partNum = getWholePartNumberOrNull(row, 5);
    expect(partNum).toEqual([114, 5, 7]);
  });

  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", ".", ".", ".", ".", "4", "2", "2"];
    const partNum = getWholePartNumberOrNull(row, 7);
    expect(partNum).toEqual([422, 7, 9]);
  });
  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", ".", ".", ".", ".", "4", "2", "2"];
    const partNum = getWholePartNumberOrNull(row, 8);
    expect(partNum).toEqual([422, 7, 9]);
  });
  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", ".", ".", ".", ".", "4", "2", "2"];
    const partNum = getWholePartNumberOrNull(row, 9);
    expect(partNum).toEqual([422, 7, 9]);
  });

  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", ".", ".", ".", ".", "4", "2", "2"];
    const partNum = getWholePartNumberOrNull(row, 3);
    expect(partNum).toEqual([null]);
  });
  test("should return back the whole part number when given the row and index", () => {
    let row = ["1", "6", "7", "#", ".", ".", ".", "4", "2", "2"];
    const partNum = getWholePartNumberOrNull(row, 3);
    expect(partNum).toEqual([null]);
  });
});
