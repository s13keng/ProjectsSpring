function letterCount (word)
{
  if (typeof word !== "string")
  {
    console.error("Error");
    return;
  }

  for (const letter of word)
  {
    if (!alphabet.includes(letter.toLowerCase()))
    {
      console.error("Error");
      return;
    }
  }
}