const memeForm = document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");

memeForm.addEventListener("submit", function (e) {
    e.preventDefault();


    const imageURL = document.getElementById("imgInput").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;
//  Will use all 3 components to create the meme
    createMeme(imageURL, topText, bottomText);

//  Clear what was input
    memeForm.reset();
});

function createMeme(imageURL, topText, bottomText) {
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    const memeImage = document.createElement("img");
    memeImage.src = imageURL;
    memeDiv.appendChild(memeImage);
// top text to connect it to the img
    const topTextDiv = document.createElement("div");
    topTextDiv.classList.add("top-text");
    topTextDiv.textContent = topText;
    memeDiv.appendChild(topTextDiv);
//  bottom text to connect it to the img
    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("bottom-text");
    bottomTextDiv.textContent = bottomText;
    memeDiv.appendChild(bottomTextDiv);

//  Will have a remove button to get rid of it
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        memeContainer.removeChild(memeDiv);
    });

    memeDiv.appendChild(removeButton);
//  Put it all together to the div
    memeContainer.appendChild(memeDiv);
};