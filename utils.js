/**
 * Calculates the factorial of a number.
 *
 * @param {number} n - A non-negative integer
 * @returns {number} Factorial of `n`
 * @throws {Error} If `n` is negative
 */
function factorial(n) {
  if (n < 0) throw new Error("Negative input not allowed");
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

/**
 * Greets a user by name.
 *
 * @param {string} name - The name of the user
 * @returns {string} A greeting message
 */
function greet(name) {
  return `Hello, ${name}! Welcome to Mintlify docs.`;
}
