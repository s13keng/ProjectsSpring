/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Taro Tanaka";
const age = 56;
const studyField = "Watch Designer"
const participant = {
    name,
    age,
    studyField
};
console.log(`Participant:  ${name}, Age: ${age}, Study Field: ${studyField}`);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantCopy = {
	...participant,
	displayInfo ()
	{
		console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
	}
};
        participantCopy.displayInfo();
/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantEchoCopy = {
	...participant,
	displayInfo: () => {
		console.log(`Participant: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`);
	}
};
        participantEchoCopy.displayInfo();
/*
 * Observations:
 * TODO: Explain here.
 * It comes back as undefined because arrow function doesnt work well with `this` object properties.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo (participant, key, value)
{
	return {
		...participant,
		[key]: value
	};
}

const updatedParticipant = updateParticipantInfo(participant, "projectTitle", "Grammar of Design");

console.log(updatedParticipant);