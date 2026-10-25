'use strict';

// Shorten a message if it is too long
function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  }

  // Cut the message and add three dots
  return message.slice(0, maxLength) + '...';
}

// Test the function
console.log(formatMessage('Curabitur ligula sapien', 16));
console.log(formatMessage('Curabitur ligula sapien', 23));
console.log(formatMessage('Vestibulum facilisis purus nec', 20));
console.log(formatMessage('Vestibulum facilisis purus nec', 30));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));
