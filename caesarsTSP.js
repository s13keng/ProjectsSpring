const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 3;

function encrypt(message, shiftValue)
  // Your encryption code here
 
{
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++)
  {
      //new var to let the message be nd will wrap around
    let char = message[i];

    if (alphabet.includes(char))
    {
    const index = alphabet.indexOf(char.toLowerCase());
    //the letter it shifts to will be called new index a
    const newIndex = (index + shiftValue) % alphabet.length;
    encryptedMessage += alphabet[newIndex];
    
    if ((i + 1) % 2 === 0) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
       encryptedMessage += alphabet[randomIndex];
    }

    else{
      encryptedMessage += char;
      }
      
    }
  }
    return encryptedMessage;
}
/*    
function decrypt (encryptedMessage)
{
  // Your decryption code here
  let decryptedMessage = '';

  return decryptedMessage;
}
*/

const originalMessage = prompt("WHATS your message?");

// Encrypt the message
const encryptedMessage = encrypt(originalMessage, shiftValue);
console.log("Encrypted Message:", encryptedMessage);