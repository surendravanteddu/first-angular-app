import {Component, signal} from '@angular/core';
import {GreetingComponent} from '../components/greeting/greeting.component';
import {CounterComponent} from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  welcomeMessage = signal('Welcome to the First Angular App!');
  onKeyUp(event: KeyboardEvent) {
    console.log(event.key);
  }
}
