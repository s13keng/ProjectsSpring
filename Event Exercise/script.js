//step 1 ,get DOM content loaded to wrap it around
document.addEventListener("DOMContentLoaded", function ()
{
    //step 2 ,elements from the Dom to work with
    const boxContainer = document.getElementById("box-container");
	const newBoxButton = document.getElementById("new-box-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");
    //step 3 ,var to store values for each one and starting point
    let boxColor = null; 
	let boxIdCounter = 0; 

    //box Container
	function addNewBox (){
		const box = document.createElement("div");
    //set it attribute to 
		box.setAttribute("data-box-id", boxIdCounter.toString()); 
    //text is after box Id gets set to its data attrib and sets its box Id as text
        box.textContent = `box ${boxIdCounter}`;
        box.className = "box";
    //Will continue using the set color
        box.style.backgroundColor = boxColor;
    //to append as a child to box container ele
        boxContainer.appendChild(box);

        boxIdCounter++; 
    //continue counting the boxes 
    }
    //colorForm
    colorForm.addEventListener("submit",function(e){
        e.preventDefault();
    //get rid of spaces
        const newColor = colorInput.value.trim();
    //To select all boxes so that they all stay the same
        const boxes = document.querySelectorAll(".box");
            for (const box of boxes){
                box.style.backgrounfColor = newColor;
            }
    //After a color were selected to clear box 
        colorInput.value = "";
    //will change the current selected color to the new one
        boxColor = newColor;

    });
    //newBoxButton
    newBoxButton.addEventListener("click", function (){
    //When clicked it will make a new box
	
		addNewBox();
	});

	document.addEventListener("dblclick", function (event){
    //with double clicking it will remove the box
	
		if (event.target.classList.contains("box")){
			event.target.remove(); 
		}
	});
    
    document.addEventListener("mouseover", function (event){
    //will show coordinates
	
        if (event.target.classList.contains("box")){
			event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`;
        }
    });
    document.addEventListener("mouseout", function (event){
    //bring back the text using Id from the data attr
	
        if (event.target.classList.contains("box")){
			const boxId = event.target.getAttribute("data-box-id");
			event.target.textContent = `Box ${boxId}`;
		}
	});
    window.addEventListener("keydown", function (event){
    // will ignores key presses made for color input
	
		if (event.target.id === "color-input"){
			return;
        }
        
		//either n will create a new box
		if (event.key === "n" && event.key === "N"){
			addNewBox(); 
		}
	});
});