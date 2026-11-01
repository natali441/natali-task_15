import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-2');


//1

  score = signal(0);

  increase() {
    this.score.update(value => value + 5);
  }

  decrease() {
    this.score.update(value => value - 5);
  }

  reset() {
    this.score.set(0);
  }


  //2

  count = signal(0);

  add() {
    this.count.update(value => value + 1);
  }

  remove() {
    this.count.update(value => Math.max(0, value - 1));
  }


//3
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
  showPassword = signal(false);


//4
export class App {

  price = signal(10);
  quantity = signal(2);

  total = computed(() => this.price() * this.quantity());

}


//5
export class App {

  exam1 = signal(60);
  exam2 = signal(70);

  average = computed(() => (this.exam1() + this.exam2()) / 2);

  passed = computed(() => this.average() >= 51);

}

//6
export class App {

  price = signal(100);
  discount = signal(20);

  discountAmount = computed(() => {
    return this.price() * this.discount() / 100;
  });

  finalPrice = computed(() => {
    return this.price() - this.discountAmount();
  });

}

//7
export class App {

  isLoggedIn = signal(false);

  login() {
    this.isLoggedIn.set(true);
  }

  logout() {
    this.isLoggedIn.set(false);
  }

}
//8
export class App {

  temperature = signal(20);

  increase() {
    this.temperature.update(value => value + 1);
  }

  decrease() {
    this.temperature.update(value => value - 1);
  }

}

//9

export class App {

  tasks = signal(0);

  add() {
    this.tasks.update(value => value + 1);
  }

  remove() {
    this.tasks.update(value => Math.max(0, value - 1));
  }

}

}


