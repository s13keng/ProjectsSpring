const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 3;

//Get the user secret message to then encrypt that message 
const secretMessage = prompt("Whats your message to me?");

// To encrypt the message on the terminal
const encryptedMessage = encrypt(secretMessage, shiftValue);
console.log("Encrypted Message:", encryptedMessage);

// To decrypt the message on the terminal
//Will take the message by user that got encrypted and it will turn back to original
const decryptedMessage = decrypt(encryptedMessage, shiftValue);
console.log("Decrypted Message:", decryptedMessage);

//Encryption part
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
//Decryption part
function decrypt (encryptedMessage, shiftValue)
{
  let decryptedMessage ="";

  for (i = 0; i < encryptedMessage.length; i++){
    //will help to only keep the 2 extra
    if ( (i+1) % 3 != 0) { 
      const char = encryptedMessage[i].toLowerCase();
      const index = alphabet.indexOf(char);
    
    if (index >= 0) {
      // To undo the shift it did in the encryption. So backward process with the wrapping 
      let newIndex = index - shiftValue;
      while (newIndex < 0) newIndex += alphabet.length; 
      decryptedMessage += alphabet[newIndex % alphabet.length];
      
    } 
    else {
      decryptedMessage += char;
    } 
    }
  }
  // Your decryption code here
  return decryptedMessage;
}
//Will decrypt using 42 shift value to it already
console.log(decrypt('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv \'zQkhhuubyjkit\' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42));
