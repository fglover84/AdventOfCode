const {
  sanitizeObj,
  cardPoints,
  countCardPoints,
  numberOfCards,
} = require("./puzzle.js");
const { input } = require("./input.js");
const testData = {
  1: [
    ["41", "48", "83", "86", "17"],
    ["83", "86", "6", "31", "17", "9", "48", "53"],
  ],
  2: [
    ["13", "32", "20", "16", "61"],
    ["61", "30", "68", "82", "17", "32", "24", "19"],
  ],
  3: [
    ["1", "21", "53", "59", "44"],
    ["69", "82", "63", "72", "16", "21", "14", "1"],
  ],
  4: [
    ["41", "92", "73", "84", "69"],
    ["59", "84", "76", "51", "58", "5", "54", "83"],
  ],
  5: [
    ["87", "83", "26", "28", "32"],
    ["88", "30", "70", "12", "93", "22", "82", "36"],
  ],
  6: [
    ["31", "18", "13", "56", "72"],
    ["74", "77", "10", "23", "35", "67", "36", "11"],
  ],
};

describe("given the input ", () => {
  test("should sanitize input", () => {
    const input = {
      1: "84 17 45 77 11 66 94 28 71 70 | 45 51 86 83 53 58 64 30 67 96 41 89  8 17 33 50 80 84  6  2 87 72 27 63 77",
      2: "18 17 59  8 78 79 34 35 48 73 | 61 49 59 99 77  8 79 64 36  6  3 67  4 90 83 22  9 82 39 78 92 42 33 70 17",
    };
    const expectedOutput = {
      1: [
        ["84", "17", "45", "77", "11", "66", "94", "28", "71", "70"],
        [
          "45",
          "51",
          "86",
          "83",
          "53",
          "58",
          "64",
          "30",
          "67",
          "96",
          "41",
          "89",
          "8",
          "17",
          "33",
          "50",
          "80",
          "84",
          "6",
          "2",
          "87",
          "72",
          "27",
          "63",
          "77",
        ],
      ],
      2: [
        ["18", "17", "59", "8", "78", "79", "34", "35", "48", "73"],
        [
          "61",
          "49",
          "59",
          "99",
          "77",
          "8",
          "79",
          "64",
          "36",
          "6",
          "3",
          "67",
          "4",
          "90",
          "83",
          "22",
          "9",
          "82",
          "39",
          "78",
          "92",
          "42",
          "33",
          "70",
          "17",
        ],
      ],
    };
    expect(sanitizeObj(input)).toEqual(expectedOutput);
  });

  test("should return points value for one card", () => {
    const input = [
      ["41", "48", "83", "86", "17"],
      ["83", "86", "6", "31", "17", "9", "48", "53"],
    ];
    expect(cardPoints(input)).toEqual(8);
  });

  test("should return points value for all cards in testdata", () => {
    expect(countCardPoints(testData)).toEqual(13);
  });

  test("should return points value for all cards in input file", () => {
    const sanitizedInput = sanitizeObj(input);
    expect(countCardPoints(sanitizedInput)).toEqual(23941);
  });

  test("should return a count of all winning cards", () => {
    const sanitizedInput = sanitizeObj(input);

    expect(numberOfCards(sanitizedInput)).toEqual(23941);
  });
});
