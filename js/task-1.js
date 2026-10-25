'use strict';

// Check the total cost and the customer's credits
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;

  // Check if the customer has enough credits
  if (totalPrice > customerCredits) {
    return 'Insufficient funds!';
  }

  // Return the order message
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

// Test the function
console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));
