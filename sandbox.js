var names = ['Alice', 'Bob', 'Eve'];
names.push('Mallory');
names.push(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'
var numbers = [1, 2, 3];
numbers.push('hello'); // Error: Argument of type '"42"' is not assignable to parameter of type 'number'
numbers.push(4);
var mixed = [1, 'hello', true];
var letters_and_numbers = [1, 'hello', 4];
letters_and_numbers.push(5);
letters_and_numbers.push('world');
letters_and_numbers.push(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
// objects
var person = {
    name: 'Alice',
    age: 42,
};
person.name = 'Bob';
person.name = 42; // Error: Type '42' is not assignable to type 'string'
person.age = 43;
person.age = 'forty-three'; // Error: Type '"forty-three"' is not assignable to type 'number'
person.skill = 'Programming'; // Error: Property 'skill' does not exist on type '{ name: string; age: number; }'
person = ['Alice', 42]; // Error: Type 'string[]' is not assignable to type '{ name: string; age: number; }'
person = {
    name: 'Alice',
    age: 42,
    skill: 'Programming',
}; // Error: Type '{ name: string; age: number; skill: string; }' is not assignable to type '{ name: string; age: number; }'
person = {
    name: 'Sabina',
    age: 30,
}; // OK
// explicit types
var character;
var age;
var isLoggedIn;
character = 42; // Error: Type '42' is not assignable to type 'string'
character = 'mario';
age = 'mario'; // Error: Type '"hello"' is not assignable to type 'number'
age = 42;
isLoggedIn = 42; // Error: Type '42' is not assignable to type 'boolean'
isLoggedIn = true;
var ninjas; // must be an array of strings
ninjas = ['mario', 'luigi'];
ninjas = ['mario', 42]; // Error: Type 'number' is not assignable to type 'string'
// union types
var mixedArray; // must be an array of strings or numbers
mixedArray = ['mario', 42];
mixedArray = ['mario', 'luigi', 42];
mixedArray = [42, 'mario', true]; // Error: Type 'boolean' is not assignable to type 'string | number'
var mixedUpArray; // must be an array of strings, numbers or booleans
mixedUpArray = ['mario', 42];
mixedUpArray = ['mario', 'luigi', 42];
mixedUpArray = [42, 'mario', true];
// any type
var anything;
anything = 'hello';
anything = 42;
anything = true;
var anythingArray;
anythingArray = ['mario', 42];
anythingArray = ['mario', 'luigi', 42];
anythingArray = [42, 'mario', true];
var ninjaOne;
ninjaOne = { name: 'mario', age: 30 };
ninjaOne = { name: 42, age: 'mario' };
ninjaOne = ['mario', 42]; // this is ok because arrays are objects in JavaScript
var anotherNinja; // specifies the type of object, i.e. not an array
anotherNinja = { name: 'mario', age: 30 };
anotherNinja = ['mario', 42]; // Error: Type 'string[]' is not assignable to type '{}'
// Although TS seems to be ok with this as no error is arising.
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 30 };
ninjaTwo = { name: 42, age: 'mario' }; // Error: Type 'number' is not assignable to type 'string'
