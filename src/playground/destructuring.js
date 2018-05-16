
/*
 * OBJECT DESCTRUCTURING
 */

// const Person = {
//   name : "Simba",
//   age : 35,
//   location :
//   {
//     city :"Dallas",
//   }
// };

// const {name ,age } = Person;
// const {city,temp:temperature=1000} = Person.location;

// if(city && temperature){
// console.log(`${name} is ${age} years old and lives in ${city} where it is currently ${temperature} fahrenheits`);
// }

// // Object destructuring challenge

// const book = {
//   title:"Ego is the enemy",
//   author:'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name:publisherName ='Self Published'}=book.publisher;
// console.log(`${publisherName}`);


/*
 * ARRAY DESCTRUCTURING
 */

// const address = ['10075 Royal Lane','Dallas',,'75234'];
// const [street,,state='New York',] = address;
// console.log(`you are living at ${street}, in the state of ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [itemName,,,large] = item;

console.log(`A large ${itemName} costs ${large}.`);