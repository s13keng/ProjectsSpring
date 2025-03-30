function letterCount (word)
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
//If there were to be any numbers or symbols in the input it would give an error
  if (typeof word !== "string")
    {
      console.error("Error");
      return;
    }
  
  for (const letter of word)
    {
//make sure any letter given will become lowercase if given in upper
  if (!alphabet.includes(letter.toLowerCase()))
    {
      console.error("Error");
      return;
    }
  }
  let letterCounts = {};

  for (let letter of word)
    {
    let lowerCaseLetter = letter.toLowerCase();
// It will continue to count if the letter is already picked up that its in the alphabet
  if (letterCounts[lowerCaseLetter] !== undefined)
    {
      letterCounts[lowerCaseLetter]++;
    }
  else
    {
      letterCounts[lowerCaseLetter] = 1;
    }
  }
  return letterCounts;
}
