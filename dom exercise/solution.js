document.addEventListener("DOMContentLoaded", function ()
{
//function testAllTasks ()
{
	firstTask();
	secondTask();
	thirdTask();
	forthTask();
	fifthTask();
	sixthTask();
	seventhTask();
	eigthTask();
    ninthTask();
}});

//Task 1
function firstTask ()
{
	document.getElementById("task1").innerText = "Completed task1";
}
//Task2
function secondTask ()
{
    document.getElementById("task2").innerHTML = "<button>Submit</button>";
}
//Task3
function thirdTask ()
{
    document.body.style.backgroundColor = '#232323';
}
//Task4
function forthTask ()
{
    document.querySelectorAll(".item").forEach(item =>
        {
            item.style.border = "2px solid black";
        });
}
//Task5
function fifthTask ()
{
    document.getElementById("task5").href = 'https://www.springboard.com/';
}
//Task6
function sixthTask ()
{
    document.getElementById("task6").value = 'DOM Master';
}
//Task7
function seventhTask ()
{
    document.getElementById("task7").classList.add('new-class');
    //to see if it contains new class which it responds with true
    document.getElementById("task7").classList.contains('new-class');
}
//Task8
function eigthTask ()
{
    const newButton =document.createElement("button")
    newButton.innerText = "Button"
    document.getElementById("task8").appendChild(newButton)
}
//Task9
function ninthTask()
{
    const 
}