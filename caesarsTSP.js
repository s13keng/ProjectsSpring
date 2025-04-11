const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 3;

function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  //counter would be used to watch over the two extra letters
  let counter = 0; 
   
  //make sure they are in the alphabet
for (let char of message) {
  //keep the upper case and lower case characters separated
  //upperCase will be a boolean to make sure if the letter given the same as its uppercase version to ensure they aere the same
    const isUpperCase = char === char.toUpperCase();
    const lowerChar = char.toLowerCase();

  if (alphabet.includes(lowerChar))
    {
    const index = alphabet.indexOf(lowerChar);
    //var newindex will have the shift to it and wrap around alphabet 
    const newIndex = (index + shiftValue) % alphabet.length;
    if (newIndex < 0) newIndex += alphabet.length;

    // To make sure on case and it will keep it when ran
    const newChar = alphabet[newIndex];
    encryptedMessage += isUpperCase ? newChar.toUpperCase() : newChar;
    //increase counter per characters
    counter++;

    } 
    else{
      encryptedMessage += char;
    }
    //make sure to add 2 letters afterwards
    if (counter === 2) {
      //make sure number doesnt go over 2
      const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
      encryptedMessage += randomChar;
      counter = 0;
      
    }
  }
  return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  let decryptedMessage = "";
  let counter = 0; // Counter to track every two letters (skipping random letters)

  for (let char of encryptedMessage) {
      
      if (alphabet.includes(char)) {
          // Increment the counter for valid characters
          counter++;

          // If the counter hits 3, skip the random letter and reset
          if (counter === 3) {
              counter = 0;
              continue;
          }

          // Find the original position, reverse the shift, and wrap around using modulo
          let Index = alphabet.indexOf(char.toLowerCase());
          let newIndex = (Index - shiftValue) % alphabet.length;
          if (newIndex < 0) newIndex += alphabet.length;

          // Append the shifted character (preserve case)
          const newChar = alphabet[newIndex];

        } else {
          // Non-alphabet character, append as is
          decryptedMessage += char;
      }
  }

  return decryptedMessage;
}



          /*
function decrypt (encryptedMessage, shiftValue)
{
  let decryptedMessage = '';

  for (i = 0; i < encryptedMessage.length; i++){
    if ( (i+1) % 3 !== 0) { // ignore random insertions
      const char = encryptedMessage[i].toLowerCase();
      const index = alphabet.indexOf(char);
      if (index >= 0) {
          let newIndex = index - shiftValue;
          while (newIndex < 0) newIndex += alphabet.length; // here is how you avoid negative indexes
          decryptedMessage += alphabet[newIndex % alphabet.length];
      } else {
        decryptedMessage += char;
      } 
    }
  }
  // Your decryption code here
  return decryptedMessage;
}
*/

// console.log(decrypt('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv \'zQkhhuubyjkit\' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42));


const originalMessage = prompt("Whats your message?");

// Encrypt the message
const encryptedMessage = encrypt(originalMessage, shiftValue);
console.log("Encrypted Message:", encryptedMessage);


// Decrypt the message
const decryptedMessage = decrypt(encryptedMessage, shiftValue);
console.log("Decrypted Message:", decryptedMessage);

