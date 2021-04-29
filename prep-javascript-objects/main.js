var person = {
  firstName: 'Jonathan',
  lastName: 'Chiang',
  hobby: 'Gaming'
};

var fullName = person.firstName + ' ' + person.lastName;

person.job = 'Architectural Designer';

person.previousJob = 'Intern';

console.log(person);
console.log("The person's name is:", fullName);
console.log("The person's current job is:", person.job);
console.log("The person's previous job is:", person.previousJob);

var myCar = {
  make: 'Honda',
  model: 'Civic',
  year: '2016'
};

myCar['owner'] = fullName;

console.log(myCar);

var carStatement = 'My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] +
' ' + myCar['make'] + ' ' + myCar['model'] + '.';

console.log(carStatement);

myCar['color'] = 'Gray';

console.log(myCar);
