const friend = "BRUTUS";
const shift = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter (letter)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}


function encryptMessage (word)
{
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}

function decryptLetter (letter)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index - shift + alphabet.length) % alphabet.length;
  return alphabet[newIndex];
}
function decryptMessage (word)
{
  let decryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    decryptedMessage += decryptLetter(word[i], shift);
  }
  return decryptedMessage;
}
