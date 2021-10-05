import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widthImg = 80;
  name = 'Carlos';
  age = 30;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;

  // objeto para el login
  register = {
    name: '',
    email: '',
    password: '',
  };

  person = {
    name: 'Julian',
    age: 5,
    avatar: 'https://source.unsplash.com/random',
  };

  names: string[] = ['Nicolás', 'Carlos', 'Mario', 'Antonio', 'Priscila'];
  newName = '';

  // Array de products de tipo Products
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increase() {
    this.person.age += 1;
  }

  // capturamos el evento que nos envia angular
  onScroll(event: Event) {
    // obtenemos el tipo de elemento html div
    const element = event.target as HTMLElement;
    //leemos la posicion
    console.info(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addNewName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    // del array names, de la posicion: index, 1 elemeto eliminamos.
    this.names.splice(index, 1);
  }

  onRegister() {
    console.info(this.register);
  }
}
