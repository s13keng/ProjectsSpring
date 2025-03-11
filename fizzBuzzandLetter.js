function fizzBuzz (n)
{
    //to make sure the number is up to 100 but not equal to it
    if (!Number.isInteger(n) || n < 1 || n >= 100)
  {
    console.error("Error");
    return;
  }

  for (let i = 1; i <= n; i++)
  {
    //will see if its able to be divided by those numbers
    const remainderBy3 = i % 3;
    const remainderBy5 = i % 5;

    if()
