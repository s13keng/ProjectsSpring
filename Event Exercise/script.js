document.addEventListener("DOMContentLoaded", function ()
{
    const boxContainer = document.getElementById("box-container");
	const newBoxButton = document.getElementById("new-box-button");
	const colorForm = document.getElementById("color-form");
	const colorInput = document.getElementById("color-input");
    
    //
	function addNewBox ()
	{
		const box = document.createElement("div");
        //set it attribute to 
		box.setAttribute("data-box-id", boxIdCounter.toString()); 
        
}