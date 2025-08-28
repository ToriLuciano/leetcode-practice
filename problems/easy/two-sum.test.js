const { twoSum } = require("./two-sum");

describe("Two Sum Problem", () => {
  test("should find two numbers that sum to target - basic case", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result).toHaveLength(2);
  });

  test("should find two numbers that sum to target - target in middle", () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
    expect(result).toHaveLength(2);
  });

  test("should find two numbers that sum to target - same numbers", () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);
    expect(result).toEqual(expect.arrayContaining([0, 1]));
    expect(result).toHaveLength(2);
  });

  test("should handle larger array", () => {
    const nums = [1, 5, 8, 10, 13];
    const target = 18;
    const result = twoSum(nums, target);
    expect(result).toHaveLength(2);
    expect(nums[result[0]] + nums[result[1]]).toBe(target);
  });
});
