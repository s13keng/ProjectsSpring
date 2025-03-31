const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 42;

function encrypt (message)
  // Your encryption code here
  {
    const index = alphabet.indexOf(message.toLowerCase());
    const newIndex = (index + shiftValue) % alphabet.length;
    return alphabet[newIndex];
  }
  
  //step2
  function encryptMessage (word)
  {
    let encryptedMessage = "";
    for (let i = 0; i < word.length; i++)
    {
      encryptedMessage += encrypt(word[i], shiftValue);
    }
    
    return encryptedMessage;
  }

function decrypt (encryptedMessage)
{
  // Your decryption code here
  
  return decryptedMessage;
}