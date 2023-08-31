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

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
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

interface Resource<T> { // T is a generic type
  uid: number;
  resourceName: string;
  data: T; // T is a generic type
}
