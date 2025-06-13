	// Task 1: Declare The Task Array and The Interval ID
	// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
let oneTimeTasks = [];
let monitoringTaskId = null;
	// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)

	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
		{
			//oneTimeTasks.push({func, delay});  code not working
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
}

	// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	for (const oneTimeTask of oneTimeTasks)
	{
		setTimeout(oneTimeTask.function, oneTimeTask.delay);
	}
}
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.


	// Task 4: Start Monitoring Function
function startMonitoring ()
{
	console.log("Starting continuous monitoring of space station parameters...");

	monitoringTaskId = setInterval(
		function ()
		{
			console.log("Monitoring space station conditions");

			/* Condition to be in space */
					//making sure there is oxygen with making it a percentage of amount
				const oxygenLevel = Math.random() * 100; 
					//states on power 
				const powerStatus = Math.random() > 0.1 ? "CLEAR" : "DANGER"; 
					// communication check 
				const communicationCheck = Math.random() > 0.05 ? "Systems are good" : "Communication error"; 

			console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
		},2000
	); 
}
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.

	// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	clearInterval(monitoringTaskId);
	console.log("Continuous monitoring stopped.");
}
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.


	// Task 6: Start Countdown Function
function startCountdown (duration)
{
	let timeLeft = duration;
	console.log(`Countdown started: ${timeLeft} seconds`);

	const countdownTimerId = setInterval(
		function ()
		{
			timeLeft--;
			console.log(`T-minus ${timeLeft} seconds`);

			if (timeLeft <= 0)
			{
				clearInterval(countdownTimerId);
				console.log("Blast off!! ");
			}
		},
		 1000
		
	);
}
		// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.


		// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	startMonitoring(); 
		//begin monitoring space station conditions
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
		//stops monitoring before the countdown.
	addOneTimeTask(stopMonitoring, 10000);
		//countdown after all preparations are done
	addOneTimeTask(function () {startCountdown(10);}, 15000);

		//run the executions
	runOneTimeTasks(); 
}
		// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.


scheduleMission(); // Starts the mission.
