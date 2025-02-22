import { Component } from '@angular/core';
import { ServicecardComponent } from '../../component/servicecard/servicecard.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-toolspage',
  imports: [ServicecardComponent, FooterComponent],
  templateUrl: './toolspage.component.html',
  styleUrl: './toolspage.component.css'
})
export class ToolspageComponent {

}
