alert('hello world');
console.log('hello world');  
console.error('this is an error');
console.warn('this is a warning'); 

// let, const
let score;
score = 19;

console.log(score)

const age = 21;

console.log(age);

// strings, numbers, boolean, null, undefined

 const names ='lily';
 const ages = 20;
 const rate = 0.25;
 const isTwo = true;
 const x = null;
 const y = undefined;
 let z;

 console.log(typeof names);
 console.log(typeof ages);
 console.log(typeof rate);
 console.log(typeof isTwo);
 console.log(typeof x);
 console.log(typeof y);

 //calculation
 const ask = 'jim';
 const year = 20;

 console.log('my name is '+ ask+' and i am ' + year);
 //template string
 const hello =  `my name is ${ask} and i am ${year}`;

 console.log(hello);

 const s = 'hi how are you';
 console.log(s.length);

 console.log(s.toUpperCase());

 console.log(s.substring(0, 6));
 console.log(s.substring(0, 6).toUpperCase());
console.log(s.split(''));

const n = 'technology, it, computers, coding';
console.log(n.split(','));

// arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5,6,7,8,9);
console.log(numbers);

const fruits = ['banana', 'apple', 'pear', 'orange', 'plum'];
fruits[5] = 'grape';
fruits.push('mango');
fruits.unshift('lemon');
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('banana'));
console.log(fruits);
console.log(fruits[1]);

const person = {
    firstName: 'blue',
    LastName: 'lily',
    old: 20,
    hobbies: ['drawing', 'cooking', 'dancing'],
    address: {
        street: 'chief street',
        city: 'buea',
        state: 'cameroon'
    }
}
console.log(person);
console.log(person.firstName, person.LastName);
console.log(person.hobbies[2] );
console.log(person.address.city);

const {firstName, LastName} = person;
console.log(firstName);
