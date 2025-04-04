const alphabet = "abcdefghijklmnopqrstuvwxyz";
const shiftValue = 42;

function encrypt (message)
  // Your encryption code here
{
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++)
  {
      //new var to let the message be nd will wrap around
    let letter =message[i].toLowerCase();

    if (alphabet.includes(letter)){
    const index = alphabet.indexOf(letter());
    //the letter it shifts to will be called new index a
    const newIndex = (index + shiftValue) % alphabet.length;
    encryptedMessage += alphabet[newIndex];
    
    if ((i + 1) % 2 === 0) {
      const randomIndex = Math.floor(Math.random() * 26);
       encryptedMessage += alphabet[randomIndex];
    }
  }
    else{
      encryptedMessage += letter;
      }
  }
    return encryptedMessage;
}
    
function decrypt (encryptedMessage)
{
  // Your decryption code here
  let decryptedMessage = '';

  return decryptedMessage;
}