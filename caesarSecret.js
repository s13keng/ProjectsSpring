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

//step1
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