const linkedIn = require("./index");

const queryOptions = {
	location: 'United States',
  salary: '100000',
  limit: '500'
};

linkedIn.query(queryOptions).then(response => {
	console.log(response); // An array of Job objects
});
