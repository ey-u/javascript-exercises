const findTheOldest = function (people) {
  return people.reduce((oldest, curr) =>
    getAge(curr) > getAge(oldest) ? curr : oldest
  );
};

function getAge(person) {
  let death = person.yearOfDeath;
  if (person.yearOfDeath == undefined) {
    death = new Date().getFullYear();
  }
  return death - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
