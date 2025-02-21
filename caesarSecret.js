// codedMessage -let
 let codedMessage = '';
//decodedMessage -let 
let decodedMessage = '';
//partyLocation -let  
let partyLocation = "Garden";
//safeToGo -boolean
let safeToGo="false";
//his friend
const friend = "BRUTUS"
//With Num .isInt it will verify if it is an int n lettershift will always be 3
const letterShift = 3; 
Number.isInteger(letterShift);

//step1 ex2
//The roman alphabet and to keep them lower case
const romanAlpha = '"ABCDEFGHIJKLMNOPQRSTUVWXZ"';
const lowerRoman =romanAlpha.toLowerCase();

//step2
//gets the spot inside [] from friend and made it to new var
let firstLetter = friend[0];
//new var which is used to get the spot from alpha that is the value of firstletter in lowercase
let index = lowerRoman.indexOf(firstLetter.toLowerCase());

//Q1-The outcome of B is not 2 b/c everything starts with 0 so B would have to be 1 (A/0,B/1,C/2)

//step3
//to shift the first letter of Caesars friend by the given letterShift, which is 3 positions
let letterChange = index + letterShift;
//give the result of the letter that selected for firstLetter 
let decodedFirtLetter = lowerRoman[letterChange];

//Q2-If the letter gonna go off the amount then a modula equation will work since it would give the remainded

//step4
//to get length of the alphabet as a new var called alphalength
let alphaLength = lowerRoman.length;

//step5
// shift the first letter of Caesar's friend by the given shift value, ensuring the shift wraps around the alphabet
let extLetters = (index + letterShift) % alphaLength;
const encryptedFirstLetter = lowerRoman[extLetters];

//step6
const encryptedMessage = "EUXWXV";
let teaserCode = encryptedMessage.slice(0,3);

console.log(teaserCode);

//step1 ex3
// will get a random decimal
const randomDecimal = Math.random();

//step2
//range from 3-33 
//added one so it could cover either the 3 or number 33
const range = 33 - 3 + 1;

//Q1- The reason 1 was added to the difference between 33 and 3 is so it can include either 3 or 33 since if it was just 30 number the chances for it to be 3 or 33 wouldnt be possible.

//step3
//New var called ranNumRange to include both the decimal with the range 
const randomNumRange = randomDecimal * range;

//Q2-multiplying randomDecimal by range help us get a random number that will be within that range and its random each time. Also because random decimal will be less than 1 and being multiplied by the range it would get other numbers that random decimal is limited to.

//step4 round down the decimal number obtained in Step 3 to get a whole integer by using math.floor and the value being targeted inside
const randomInt = Math.floor(randomDecimal);

//Q3-Its better to use floor over round because with rounding it would move up and there is a chance it would go over 33 which we dont want.

//step5
//New var to hold the value of the 3-33 picked 
const shiftValue = randomInt + 3;

//Q4- Reason to add 3 was so it could actually get a a total of 33 since just 33-3 is 30 it would need 3 to the range can be 33.

console.log(shiftValue);