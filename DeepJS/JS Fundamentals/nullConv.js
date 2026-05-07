// Nullable conversion
// you are given an object with properties that may contain null or undefined values. 
// Your task is to implement a function called convertNullableValues that checks 
// if any of the properties in the object contains null or undefined.
//  If a property is null convert it to zero and if a property is undefined
//  convert it to an empty string. Return the modified object.


function convertNullable(value) {
      if (value === null) {
            return 0;
      }
      if (value === undefined) {
            return '';
      }
      return value;
}
function convertNullableValues(obj) {
      const result = {};
      for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                  result[key] = convertNullable(obj[key]);
            }
      }
      return result;
}
const input = {
      name: 'Elvis',
      age: null,
      email: undefined,
      city: 'Kigali'
};
console.log(convertNullableValues(input));