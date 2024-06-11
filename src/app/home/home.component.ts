import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  list = [
    'Iphone 5',
    'Iphone 6',
    'Iphone 7',
    'Iphone 8',
    'Iphone 9',
    'Iphone 10',
    'Iphone 11',
    'Iphone 12',
  ];
  p = 1;
}
