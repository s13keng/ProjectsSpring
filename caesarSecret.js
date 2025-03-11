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

//Given variables
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//step1 ex4
//show if one conditional is true it would give the answer if not move on to the next option
let locationStart = "";
if (emblemClue1 === 'Eagle'){
    locationStart = 'Forum';
}
else if (emblemClue1 === 'Lion'){
    locationStart = 'Colosseum';
}
else{
    locationStart = 'Villa';
}
console.log(locationStart);

//step2
// first it the and while the second is or with location being update to whatever condition true
if (emblemClue2 === 'Laurel' && locationStart === 'Forum'){
    locationStart += " of Augustus";
}
if (emblemClue2 === 'Grapes' || locationStart === 'Villa'){
    locationStart += " of Pompey";
}

//step3
// instead of using a console log to show which location i continued to use the locationstart to be update with this
switch(emblemClue3){
    case 3:
        locationStart += 'South';
        break;
    case 4:
        locationStart += 'West';
        break;
    case 7:
        locationStart += 'North';
        break;
    case 9:
        locationStart += 'East';
        break;
}

//Q- Its important to be careful of which equal to use because double equal only checks value which triple equal checks for value and type so it is more strict compared to the double.

const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

//step1 ex5
//to add his friend brutus
guests.unshift("BRUTUS");
//Q1- to find out if the array was added we can use guests[0] in the console and brutus to be added to the first spot.

//step2
//Add these two to the end of the list 
guests.push("AUGUSTUS","LUCIA")

//step3
//to see if they are in the list
const spartacusIndex = guests.indexOf("SPARTACUS");

//Q2- If he wasnt invited the outcome will be -1 because he wasnt invited.

//step4
//to remove cassius and what index he is in
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);

//step5
//to get out the first 3 guests 
const specialInvite = guests.slice(0,3);

//step6
//Will only select the first guest
const honoredGuests = guests.slice(0, 1); 
// Will get everyone else on the list of  guests
const otherGuests = guests.slice(1); 
//will put the names in order
otherGuests.sort(); 
//will combine both the vars
const sortedGuests = honoredGuests.concat(otherGuests);

//Had to add VIP since there is a const as guest already
const guestsVIP = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

//step1 ex 6
//adding a new object to the array
guestsVIP.BRUTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  };

//step2
guestsVIP.CICERO.pastGifts.push("Golden Lyre");

//step3
//new var for just the region for anthony
const antonyRegion = guestsVIP.ANTONY.region;

//step4
//will get rid of everything for cicero
delete guestsVIP.CICERO;

//step5
//given new var to then change the location for anthony 
const generalProfile = guestsVIP.ANTONY;
generalProfile.region = "Egypt";

//Q1- The new region will be changed in the original guests list because since its a reference that information that was changed with the new var will change the original and both have the same reference.

// const friend = "BRUTUS"
// const shiftValue = 3;
//already declared

//step1 ex 7
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//step2
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

//Q1- With a loops it makes it easier and have less code to be able to decrypt the message and change its index value in the alphabet.
//Q2- THe module or % just helps with the look so once it goes over the last letter it would restart instead of stopping since there no letters after z.

//step1 ex8
function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

//step2
function encryptMessage (word, shift)
{
  let encryptedMessage = "";
  for (let i = 0; i < word.length; i++)
  {
    encryptedMessage += encryptLetter(word[i], shift);
  }
  return encryptedMessage;
}

//step3

