import { Invoice } from './classes/Invoices.js';
import { Payments } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  
  let values: [string, string, number] = [toFrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payments(...values);
  }

  list.render(doc, type.value, 'end');
});

// Generics

const addUID = <T extends {name: string}>(obj: T) => { // T extends object means that the type of T must be an object with a name property
  let uid = Math.floor(Math.random() * 1000);

  return {...obj, uid};
} 

let docOne = addUID({ name: 'mario', age: 40 });

console.log(docOne);
console.log(docOne.name);
console.log(docOne.age);
console.log(docOne.uid);

// Generics with interfaces

interface Resource<T> { 
  uid: number;
  resourceType: ResourceType;
  data: T;
}

// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

const docTwo: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'shaun of the dead' }
}

const docThree: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { name: 'yoshi' }
}

// Tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
tup[2] = false;

// tup[0] = false; // error because the first element must be a string

let student: [string, number];
student = ['chun-li', 223423]; // correct
// student = [234234, 'chun-li']; // error because the first element must be a string



