//step 1 ,get DOM content loaded to wrap it around
document.addEventListener("DOMContentLoaded", function ()
{
    //step 2 ,elements from the Dom to work with
    const boxContainer = document.getElementById("box-container");
	const newBoxButton = document.getElementById("new-box-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");
    //step 3 ,var to store values for each one
    let boxColor = null; 
	let boxIdCounter = 0; 

    //
	function addNewBox ()
	{
		const box = document.createElement("div");
        //set it attribute to 
		box.setAttribute("data-box-id", boxIdCounter.toString()); 
        //text is after box Id gets set to its data attrib and sets its box Id as text
        box.textContent = `box ${boxIdCounter}`;
        box.className = "box";

        box.style.backgroundColor = boxColor;
        
        boxIdCounter++;
    }
});