const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

	const usersWithStatus = users.map(user => {
		const fullName = `${user.firstName} ${user.lastName}`;
		const membershipStatus = user.points > 100 ? 'Premium' : 'Standard';
			return {fullName, membershipStatus };
	});
		//will give the full name of the user and their memebership status on console already printed
	console.log(usersWithStatus);
						  

