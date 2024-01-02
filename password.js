// password-generator.js
const generatePassword = require('generate-password');

// Function to generate a random password
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 5, // Change the length as needed
    numbers: true,
    symbols: false,
    uppercase: false,
    excludeSimilarCharacters: true,
  });

  return password;
}

// Console.log the generated password
const newPassword = generateRandomPassword();
console.log('Generated Password:', newPassword);