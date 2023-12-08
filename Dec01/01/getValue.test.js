// import { getValue } from "./getValue";
const { getValue } = require("./getValue");
const { input } = require("./input.js");

describe("given the input ", () => {
  test("should pass back two total value", () => {
    const input = ["two1nine"];

    expect(getValue(input)).toEqual(29);
  });

  test("should pass back two total value", () => {
    const input = ["eightwothree"];

    expect(getValue(input)).toEqual(83);
  });

  test("should pass back two total value", () => {
    const input = ["abcone2threexyz"];

    expect(getValue(input)).toEqual(13);
  });

  test("should pass back two total value", () => {
    const input = ["xtwone3four"];

    expect(getValue(input)).toEqual(24);
  });

  test("should pass back two total value", () => {
    const input = ["4nineeightseven2"];

    expect(getValue(input)).toEqual(42);
  });

  test("should pass back two total value", () => {
    const input = ["zoneight234"];

    expect(getValue(input)).toEqual(14);
  });

  test("should pass back two total value", () => {
    const input = ["zoneightwo"];

    expect(getValue(input)).toEqual(12);
  });

  test("should pass back two total value", () => {
    const input = ["7pqrstsixteen"];

    expect(getValue(input)).toEqual(76);
  });
  // 29, 83, 13, 24, 42, 14, and 76

  test("should pass back two total value", () => {
    const input = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];

    expect(getValue(input)).toEqual(281);
  });

  test("should pass back two total value", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

    expect(getValue(input)).toEqual(142);
  });

  test("should pass back two total value", () => {
    const input = ["zoneightwo"];

    expect(getValue(input)).toEqual(12);
  });

  // test("should pass back two total value", () => {
  //   expect(getValue(input)).toEqual(281);
  // });
});

// ["two1nine", "eightwothree", "abcone2threexyz", "xtwone3four", "4nineeightseven2", "zoneight234", "7pqrstsixteen"]
