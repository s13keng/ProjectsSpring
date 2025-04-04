const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 42;

function encrypt (message)
  // Your encryption code here
  {
    
    const index = alphabet.indexOf(message.toLowerCase());
    const newIndex = (index + shiftValue) % alphabet.length;
    return alphabet[newIndex];
  
  //step2

    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++)
    {
      encryptedMessage += encrypt(message[i], shiftValue);
    }

    if ((i + 1) % 2 === 0) {
      const randomIndex = Math.floor(Math.random() * 26);
       encryptedMessage += alphabet[randomIndex];
    }

    else {
    encryptedMessage += char;
    }
    return encryptedMessage;
  
}
    
function decrypt (encryptedMessage)
{
  // Your decryption code here
  
  return decryptedMessage;
}