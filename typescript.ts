import { createBuilderStatusReporter } from 'typescript';

//TODO: Tuple
// const tuple: [string, number, number] = ['Duc', 23, 165];
// console.log(tuple);

//TODO: Void
// const sayName = (name: string): void => {
//     console.log(name);
// };

// const sayHi = (name: string): void => {
//     cb(name);
// }

// const cb = (name: string): void => {
//     console.log(name);
// }

// sayHi('Duc');

//TODO: Any
// let maybe: any = 'Duc';
// maybe = 23;

// console.log(maybe);

// const randomList: any = ['Hello', 1, true];
// const strList: string[] = ['Hello', 'Hi'];

// TODO: Enum
// enum listName {
//     Duc,
//     Pham,
//     Tien,
// }

// console.log(listName.Duc); // --> 0
// console.log(listName[0]);  // --> Duc

//TODO: Never
// const error = (message: string): never => {
//     throw new Error(message);
// };

// const showError = () => error('Error');
// showError();

//TODO: Type assertions
let foo: any = 'foo';
let bar = foo as string;
console.log(typeof bar);
