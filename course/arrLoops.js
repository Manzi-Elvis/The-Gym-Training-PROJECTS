var people = ["Greg", "Mary", "Devon", "James"];
for (var i = 0; i < people.length; i++) {
   people[i] += "!!!!!!!!!!!!";
   people[i] = "Dr. " + people[i].toUpperCase()
   console.log(people[i]);
}

people.forEach(function(person) {
      person += "(the great)";
      console.log(person);
})