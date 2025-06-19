/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function logAnimalSightings (...animals)
{
	console.log(`Animal Sightings: ${animals}`);
}
	logAnimalSightings("Rhino", "Lion", "Bird");
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const combinedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(`Combined Habitats: ${combinedHabitats}`);
/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};

// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const updatedRhinoStatus = {
	...rhinoStatus, 
	population: 4502,
	status: "Not Endangered"
};

console.log("Increased Rhino Status:", updatedRhinoStatus);


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const shallowCopy = {
	...lionProfile,
	genetics: "Diverse"
};
console.log('Original Lion Profile', lionProfile);
console.log('Lion Genetic Profile', shallowCopy);
/*
/*
 * Observations:
 * TODO: Explain here.
 * Genetics was only added to the shallow copy since its stored in a diffeerent reference.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const ecosystemCopy = {
	...ecosystemHealth}
	ecosystemCopy.foodSupply.herbivores = "Low";

console.log("Original Ecosystem Health:", ecosystemHealth);
console.log("Updated Ecosystem Health:", ecosystemCopy);



/*
 * Observations:
 * TODO: Explain here.
 * By having it outside of the scope for ecosystemCopy it ended up affecting both original and copy since of their reference.
 */
