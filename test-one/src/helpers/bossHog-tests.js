import bossHog from "../index";
import { expect } from "chai";

const testNumbers = (numbers, expectedResult) => {
  numbers.forEach((number) => {
    expect(bossHog(number)).to.equal(expectedResult);
  });
}

describe("bossHog", () => {
  it("should return 'Boss' for multiples of 3", () => {
    const numbers = [3, 6, 9, 12, 18, 21, 24, 27, 33, 36];
    testNumbers(numbers, 'Boss');
  });

  it("should return 'Hog' for multiples of 5", () => {
    const numbers = [5, 10, 20, 25, 35, 40, 50, 55, 65, 70];
    testNumbers(numbers, 'Hog');
  });

  it("should return 'BossHog' for multiples of 3 and 5", () => {
    const numbers = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150];
    testNumbers(numbers, 'BossHog');
  });
});
