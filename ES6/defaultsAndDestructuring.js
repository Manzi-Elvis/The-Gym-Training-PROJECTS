function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

console.log(houseDescriptor());
console.log(houseDescriptor({}));
console.log(houseDescriptor({houseColor: "red"}));
console.log(houseDescriptor({shutterColors:['orange' , 'blue']}));
console.log(houseDescriptor({houseColor: 'red' , shutterColors: ['white' , 'grey' , 'blue']}));

// OUTPUT:
// I have a green house with red shutters
// I have a green house with red shutters
// I have a red house with red shutters
// I have a green house with orange and blue shutters
// I have a red house with white and grey and blue shutters