// import { getValue } from "./getValue";
const {
  getPlayableBags,
  formatStringToObj,
  getBagsPowerScore,
} = require("./getValue");
const { input } = require("./input.js");

const testData = {
  Game1: "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  Game2: "1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  Game3: "8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  Game4: "1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  Game5: "6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
};

describe("given the input ", () => {
  test("should pass back two total value", () => {
    const bag =
      "1 green, 2 blue; 15 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue";

    expect(formatStringToObj(bag)).toEqual({
      green: 2,
      blue: 15,
      red: 12,
      green: 2,
    });
  });

  test("should pass back two total value", () => {
    const bag = {
      Game1:
        "1 green, 2 blue; 14 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue",
    };

    expect(getPlayableBags(bag)).toEqual(1);
  });

  test("should pass back two total value", () => {
    // const bag = {
    //   Game1:
    //     "1 green, 2 blue; 14 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue",
    // };

    expect(getPlayableBags(testData)).toEqual(8);
  });

  test("should pass back two total value", () => {
    // const bag = {
    //   Game1:
    //     "1 green, 2 blue; 14 blue, 12 red, 2 green; 4 red, 6 blue; 10 blue, 8 red; 3 red, 12 blue; 1 green, 12 red, 8 blue",
    // };

    expect(getPlayableBags(input)).toEqual(2913);
  });

  test("should pass back two total value", () => {
    const bag = {
      Game1: "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    };

    expect(getBagsPowerScore(bag)).toEqual(48);
  });

  test("should pass back two total value", () => {
    const bag = {
      Game1: "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    };

    expect(getBagsPowerScore(testData)).toEqual(2286);
  });
  test("should pass back two total value", () => {
    const bag = {
      Game1: "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    };

    expect(getBagsPowerScore(input)).toEqual(2286);
  });
});
