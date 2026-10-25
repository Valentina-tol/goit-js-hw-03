'use strict';

// Check if a message contains spam or sale
function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();

  // Check for forbidden words
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

// Test the function
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('Amazing Sale, only tonight!'));
console.log(checkForSpam('Trust me, this is not a spam message!'));
console.log(checkForSpam('Get rid of sPaM emails. Our book is on sale!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
