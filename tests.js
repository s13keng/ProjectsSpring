// Define the alphabet for encryption/decryption
const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Function to encrypt a message
function encrypt(message, shiftValue) {
    let encryptedMessage = "";
    let counter = 0; // Counter to track every two letters

    for (let char of message) {
        // Check if the character is in the alphabet
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();

        if (alphabet.includes(lowerChar)) {
            // Find the original position, apply the shift, and wrap around using modulo
            let originalIndex = alphabet.indexOf(lowerChar);
            let newIndex = (originalIndex + shiftValue) % alphabet.length;
            if (newIndex < 0) newIndex += alphabet.length;

            // Append the shifted character (preserve case)
            const newChar = alphabet[newIndex];
            encryptedMessage += isUpperCase ? newChar.toUpperCase() : newChar;

            // Increment the counter for valid characters
            counter++;
        } else {
            // Non-alphabet character, append as is
            encryptedMessage += char;
        }

        // Insert a random letter after every two valid characters
        if (counter === 2) {
            const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
            encryptedMessage += randomChar;
            counter = 0;
        }
    }

    return encryptedMessage;
}

// Function to decrypt a message
function decrypt(encryptedMessage, shiftValue) {
    let decryptedMessage = "";
    let counter = 0; // Counter to track every two letters (skipping random letters)

    for (let char of encryptedMessage) {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();

        if (alphabet.includes(lowerChar)) {
            // Increment the counter for valid characters
            counter++;

            // If the counter hits 3, skip the random letter and reset
            if (counter === 3) {
                counter = 0;
                continue;
            }

            // Find the original position, reverse the shift, and wrap around using modulo
            let originalIndex = alphabet.indexOf(lowerChar);
            let newIndex = (originalIndex - shiftValue) % alphabet.length;
            if (newIndex < 0) newIndex += alphabet.length;

            // Append the shifted character (preserve case)
            const newChar = alphabet[newIndex];
            decryptedMessage += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            // Non-alphabet character, append as is
            decryptedMessage += char;
        }
    }

    return decryptedMessage;
}

// Test the functions
const shiftValue = 42;
const originalMessage = prompt("WHATS your message?");

// Encrypt the message
const encryptedMessage = encrypt(originalMessage, shiftValue);
console.log("Encrypted Message:", encryptedMessage);