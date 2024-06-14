const person = {
  name: 'James Williams',
  age: 30,
  profession: 'Lawyer',
  salary: 4000,
  address: {
    street: 'Main Street, 123',
    city: 'New York',
    zipCode: '12345'
  },
  interests: ['soccer', 'movies', 'traveling'],
  projects: {
    project1: 'Construction of XPTO Building',
    project2: 'City Park Renovation'
  },
  email: 'jamesWilliams@email.com',
  phone: '(123) 456-7890'
};

function howManyStrings (obj) {
  let numberOfStrings = 0;
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      numberOfStrings++;
    }
  }
  return numberOfStrings;
}

console.log(howManyStrings(person));
