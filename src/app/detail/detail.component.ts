import { Component, Input } from '@angular/core';
import { ProductinfoComponent } from '../productinfo/productinfo.component';

// import { UserinfoComponent } from '../userinfo/userinfo.component';
// import { ProductinfoComponent } from '../productinfo/productinfo.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ProductinfoComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  @Input() productInfo?: any;
}
