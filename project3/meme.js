const memeForm = document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");

//
memeForm.addEventListener("submit", function (e) {
    e.preventDefault();


    const imageURL = document.getElementById("imgInput").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
//use all three to create meme
    createMeme(imageURL, topText, bottomText);

// Go back to normal after clearing inputs
    memeForm.reset();
});