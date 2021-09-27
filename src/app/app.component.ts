import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Carlos V.';
  age = 30;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Carlos V.',
    age: 30,
    avatar: 'https://source.unsplash.com/random',
  };

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increase() {
    this.person.age += 1;
  }
}
