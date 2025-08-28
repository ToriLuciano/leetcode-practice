/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Category: Array, Hash Table
 * LeetCode Link: https://leetcode.com/problems/two-sum/
 * 
 * Problem Description:
 * Given an array of integers nums and an integer target, return indices of the two numbers 
 * such that they add up to target. You may assume that each input would have exactly one 
 * solution, and you may not use the same element twice.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 */

/**
 * Solution 1: Hash Table Approach (Optimal)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * Approach:
 * Use a hash table to store complements. For each number, check if its complement
 * (target - current_number) exists in the hash table. If found, return the indices.
 * This approach trades space for time, achieving linear time complexity.
 */
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if complement exists in hash table
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Store current number and its index
        numMap.set(nums[i], i);
    }
    
    return []; // No solution found
}

/**
 * Solution 2: Brute Force Approach
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * Approach:
 * Use nested loops to check every possible pair of numbers.
 * For each element, check if there's another element that sums to target.
 */
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return []; // No solution found
}

/**
 * Solution 3: Two Pointers Approach (Alternative)
 * Note: This approach requires the array to be sorted, which changes the problem
 * but demonstrates understanding of different techniques.
 * 
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) to store original indices
 * 
 * Approach:
 * Sort the array and use two pointers from both ends.
 * Move pointers based on whether the sum is greater or less than target.
 */
function twoSumTwoPointers(nums, target) {
    // Create array of [value, original_index] pairs
    const indexedNums = nums.map((num, index) => [num, index]);
    
    // Sort by values
    indexedNums.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = indexedNums.length - 1;
    
    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0];
        
        if (sum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // No solution found
}

// Test cases
function runTests() {
    console.log("=== Two Sum Problem Tests ===\n");
    
    const testCases = [
        {
            nums: [2, 7, 11, 15],
            target: 9,
            expected: [0, 1],
            description: "Basic case"
        },
        {
            nums: [3, 2, 4],
            target: 6,
            expected: [1, 2],
            description: "Target in middle"
        },
        {
            nums: [3, 3],
            target: 6,
            expected: [0, 1],
            description: "Same numbers"
        },
        {
            nums: [1, 5, 8, 10, 13],
            target: 18,
            expected: [2, 3], // 8 + 10 = 18 (first valid pair found),
            description: "Larger array"
        },
        {
            nums: [-1, -2, -3, -4, -5],
            target: -8,
            expected: [2, 4],
            description: "Negative numbers"
        }
    ];
    
    // Test Solution 1: Hash Table
    console.log("Testing Hash Table Solution:");
    testCases.forEach((testCase, index) => {
        const result = twoSum(testCase.nums, testCase.target);
        const passed = JSON.stringify(result.sort()) === JSON.stringify(testCase.expected.sort());
        console.log(`  Test ${index + 1} (${testCase.description}): ${passed ? 'PASS' : 'FAIL'}`);
        if (!passed) {
            console.log(`    Expected: ${testCase.expected}, Got: ${result}`);
        }
    });
    
    console.log("\nTesting Brute Force Solution:");
    testCases.forEach((testCase, index) => {
        const result = twoSumBruteForce(testCase.nums, testCase.target);
        const passed = JSON.stringify(result.sort()) === JSON.stringify(testCase.expected.sort());
        console.log(`  Test ${index + 1} (${testCase.description}): ${passed ? 'PASS' : 'FAIL'}`);
        if (!passed) {
            console.log(`    Expected: ${testCase.expected}, Got: ${result}`);
        }
    });
    
    console.log("\nTesting Two Pointers Solution:");
    testCases.forEach((testCase, index) => {
        const result = twoSumTwoPointers(testCase.nums, testCase.target);
        const passed = JSON.stringify(result.sort()) === JSON.stringify(testCase.expected.sort());
        console.log(`  Test ${index + 1} (${testCase.description}): ${passed ? 'PASS' : 'FAIL'}`);
        if (!passed) {
            console.log(`    Expected: ${testCase.expected}, Got: ${result}`);
        }
    });
    
    // Performance comparison
    console.log("\n=== Performance Analysis ===");
    const largeArray = Array.from({length: 10000}, (_, i) => i);
    const largeTarget = 19998; // Sum of 9999 + 9999
    
    console.time('Hash Table (10k elements)');
    twoSum(largeArray, largeTarget);
    console.timeEnd('Hash Table (10k elements)');
    
    console.time('Brute Force (10k elements)');
    twoSumBruteForce(largeArray, largeTarget);
    console.timeEnd('Brute Force (10k elements)');
    
    console.time('Two Pointers (10k elements)');
    twoSumTwoPointers(largeArray, largeTarget);
    console.timeEnd('Two Pointers (10k elements)');
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}

module.exports = {
    twoSum,
    twoSumBruteForce,
    twoSumTwoPointers
};