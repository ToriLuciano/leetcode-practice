# LeetCode Practice Repository

A comprehensive LeetCode practice repository designed to showcase algorithmic problem-solving skills, testing practices, and code quality to hiring managers. This repository includes solutions in JavaScript with Jest testing framework, detailed complexity analysis, and a structured study plan.

## 🎯 Project Goals

- **Interview Preparation**: Systematic approach to mastering LeetCode problems
- **Portfolio Showcase**: Demonstrate coding skills, testing practices, and problem-solving abilities
- **Learning Structure**: Organized study plan with progress tracking
- **Code Quality**: Professional-grade solutions with comprehensive testing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/ToriLuciano/leetcode-practice.git
cd leetcode-practice

# Install dependencies
npm install

# Run tests
npm test
```

## 📁 Repository Structure

```
leetcode-practice/
├── problems/
│   ├── easy/
│   │   ├── two-sum.js              # Two Sum problem solution
│   │   └── two-sum.test.js         # Jest tests for Two Sum
│   ├── medium/
│   └── hard/
├── templates/
│   ├── javascript-template.js      # JavaScript solution template
│   └── python-template.py          # Python solution template
├── notes/
│   └── study-notes.md              # Algorithm study notes
├── progress/
│   └── progress-tracker.md         # Progress tracking
├── algorithms/                     # Algorithm implementations
├── data-structures/                # Data structure implementations
├── package.json                    # Project configuration
└── README.md
```

## 🧪 Testing with Jest

This repository uses Jest as the testing framework to ensure code quality and reliability.

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test problems/easy/two-sum.test.js

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Example: Two Sum Problem
```javascript
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
```

### Test Results
```
 PASS  problems/easy/two-sum.test.js
  Two Sum Problem
    ✓ should find two numbers that sum to target - basic case (1 ms)
    ✓ should find two numbers that sum to target - target in middle (1 ms)
    ✓ should find two numbers that sum to target - same numbers
    ✓ should handle larger array

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        0.13 s
```

## 📊 Current Progress

### ✅ Completed Problems
- **Two Sum (Easy)**: Hash Table solution with comprehensive Jest testing
  - Time Complexity: O(n)
  - Space Complexity: O(n)
  - Test Coverage: 4 test cases covering various scenarios

### 🔄 In Progress
- Setting up additional problem templates
- Expanding test coverage
- Adding more algorithm patterns

## 📚 Study Plan

### Phase 1: Foundation (Weeks 1-4)
- [x] Set up repository structure
- [x] Implement Jest testing framework
- [x] Complete Two Sum problem
- [ ] Master basic data structures (Arrays, Hash Tables, Stacks)
- [ ] Learn fundamental algorithms (Two Pointers, Sliding Window)

### Phase 2: Intermediate (Weeks 5-8)
- [ ] Advanced data structures (Trees, Graphs, Heaps)
- [ ] Complex algorithms (DFS, BFS, Dynamic Programming)
- [ ] Medium difficulty problems
- [ ] Performance optimization techniques

### Phase 3: Advanced (Weeks 9-12)
- [ ] Hard difficulty problems
- [ ] System design concepts
- [ ] Mock interviews
- [ ] Portfolio refinement

## 🛠️ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `test` | `npm test` | Run all Jest tests |
| `test:watch` | `npm run test:watch` | Run tests in watch mode |
| `test:coverage` | `npm run test:coverage` | Run tests with coverage report |
| `lint` | `npm run lint` | Run ESLint |
| `lint:fix` | `npm run lint:fix` | Fix ESLint issues |
| `format` | `npm run format` | Format code with Prettier |

## 🎯 Problem-Solving Framework

### 1. Understand the Problem
- Read the problem statement carefully
- Identify input/output requirements
- Note constraints and edge cases

### 2. Plan Your Approach
- Consider multiple solution strategies
- Analyze time and space complexity
- Choose the optimal approach

### 3. Implement the Solution
- Write clean, readable code
- Add comprehensive comments
- Follow coding best practices

### 4. Test Thoroughly
- Write Jest tests for various scenarios
- Include edge cases and error conditions
- Ensure all tests pass

### 5. Optimize
- Analyze performance bottlenecks
- Refactor for better efficiency
- Document improvements

## 📈 Success Metrics

- **Problem Completion**: Target 50+ problems solved
- **Test Coverage**: 100% test coverage for all solutions
- **Performance**: Solutions within optimal time/space complexity
- **Code Quality**: Clean, well-documented, maintainable code
- **Interview Readiness**: Confidence in solving problems under pressure

## 🔗 Useful Resources

### Learning Platforms
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [CodeSignal](https://codesignal.com/)

### Algorithm Resources
- [Grokking Algorithms](https://www.manning.com/books/grokking-algorithms)
- [CLRS Introduction to Algorithms](https://mitpress.mit.edu/books/introduction-algorithms-third-edition)
- [Algorithms by Robert Sedgewick](https://algs4.cs.princeton.edu/)

### Interview Preparation
- [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/)
- [System Design Primer](https://github.com/donnemartin/system-design-primer)
- [Tech Interview Handbook](https://www.techinterviewhandbook.org/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contributing Guidelines
- Follow the existing code style
- Add comprehensive tests for new solutions
- Update progress tracker
- Include complexity analysis
- Add detailed comments

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Tori Luciano**
- GitHub: [@ToriLuciano](https://github.com/ToriLuciano)
- Repository: [leetcode-practice](https://github.com/ToriLuciano/leetcode-practice)

---

*This repository is designed to showcase professional problem-solving skills and testing practices to potential employers. Each solution includes comprehensive testing, detailed analysis, and follows industry best practices.*
