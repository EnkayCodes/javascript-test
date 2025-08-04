// Exercise 2: Functions
// Complete each function according to the instructions

/**
 * Task 1: Add Function
 * Create a function that adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  // TODO: Return the sum of a and b
  let c = 0;
  return c = a + b;
}

/**
 * Task 2: Multiply Function (Arrow Function)
 * Create an arrow function that multiplies two numbers
 * Use arrow function syntax: const multiply = (a, b) => { ... }
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The product of a and b
 */
const multiply = (a, b) => {
  // TODO: Return the product of a and b
  return c = a * b;
};

/**
 * Task 3: Greet User with Default Parameter
 * Create a function that greets a user with a default name
 * If no name is provided, use "Guest" as the default
 * @param {string} name - The user's name (default: "Guest")
 * @returns {string} Greeting message in format "Hello, [name]!"
 */
function greetUser(name = "Guest") {
  // TODO: Return a greeting message using the name parameter
  return `Hello, ${name}!`;
}

/**
 * Task 4: Calculate Total with Tax
 * Create a function that calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - The tax rate (as a decimal, e.g., 0.08 for 8%)
 * @returns {number} The total price including tax
 */
function calculateTotal(price, taxRate) {
  // TODO: Calculate and return the total price including tax
  // Formula: price + (price * taxRate)
  return price + (price * taxRate);
}

/**
 * Task 5: Create Counter (Closure)
 * Create a function that returns another function
 * The returned function should increment and return a counter
 * Each call to the returned function should increase the counter by 1
 * @returns {function} A function that increments and returns a counter
 */
function createCounter() {
  // TODO: Create a counter variable and return a function that increments it
  // Hint: Use closure to maintain the counter state
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
  
}

/**
 * Task 6: Process Numbers (Callback Function)
 * Create a function that takes an array of numbers and a callback function
 * Apply the callback function to each number in the array
 * @param {number[]} numbers - Array of numbers to process
 * @param {function} callback - Function to apply to each number
 * @returns {number[]} New array with processed numbers
 */
function processNumbers(numbers, callback) {
  // TODO: Create a new array by applying the callback to each number
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(callback(numbers[i]));
  }
  return result;
}

// DO NOT MODIFY: Export functions for testing
module.exports = {
  add,
  multiply,
  greetUser,
  calculateTotal,
  createCounter,
  processNumbers
};
