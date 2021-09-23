import { ThrowStmt } from '@angular/compiler';

// especificando el tipode dato
const username: string = 'Carlos';

// podemos especificar mas de un posible tipo de dato
const dni: number | string = 586;

// definiendo la clase Person - old way
class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

// definimos la clase Employee - modern way
class Employee {
  // no necesitamos indicar las propiedades de la clase name y salary, bastó con indicarlo dentro del constructor.
  constructor(private name: string, private salary: number) {}

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getSalary() {
    return this.salary;
  }

  setSalary(salary: number) {
    this.salary = salary;
  }
}
