

// Validates Phone Number
export const isValidPhoneNumber = (number) => {
  return /^(([+]46)\s*(7)|07)[02369]\s*(\d{4})\s*(\d{3})$/.test(number);
}

// Validates Email
export const isValidEmail = (text) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(text)
}

// Validate Swedish SSN using Luhn algorithm 
export const validateSSN = (num) => {
  num = num.replace(/\D/g, "") // 1. Remove everything but digits 
        .split("")     // 2. Turn string into array 
        .reverse()     // 3. Reverse the order of digits 
        .slice(0,10);  // 4. Strip away the first two numbers 
        
        // Check if we got 10 digits, else return false 
        if (num.length != 10) {
          return false
        }

        var total = num.map((n) => {
          return Number(n) // Turn every element into a Number
        }).reduce((acc, current, i) => {
          // multiply every other number with two
          if (i % 2) current *= 2;
          // if larger than 10 get sum of individual digits (also n-9)
          if (current > 9) current -= 9;
          // sum it up
          return acc + current;
        });
        // Make sure if user only types 0:s, return false 
        if (total > 0) {
          return 0 === total % 10;
        } else {
          return false
        }
} 







