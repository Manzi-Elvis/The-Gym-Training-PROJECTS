// constructor = special method for defining the properties and methods of objects.

function car(make, model, year, gear, color){
      this.make = make,
      this.model = model,
      this.year = year,
      this.gear = gear,
      this.color = color,
      this.drive = function (){
            console.log(`You drive the ${this.model} of the year ${this.year}.`)
            if(year <= 1990){
                  console.log('You have good taste!')
            }
            else{
                  console.log('Improve on your taste in cars')
            }
            if(gear === "manual"){
                  console.log('Very Manly!!!!')
            }
            else{
                  console.log('An Automatic!')
            }

      }
}

const car1 = new car('Mercedes Benz' , "G Class" , 2008 , "manual" , 'blue');
const car2 = new car("Hummer" , 'H2' , 1990 , "automatic" , "black");
const car3 = new car('Honda' , 'Civic' , 2008 , 'automatic' , 'yellow');

car1.drive();
car2.drive();
car3.drive();