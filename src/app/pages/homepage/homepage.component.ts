import { Component } from '@angular/core';
import { BannerComponent } from '../../component/banner/banner.component';
import { ToolcardComponent } from '../../component/toolcard/toolcard.component';
import { FaqsectionComponent } from '../../component/faqsection/faqsection.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-homepage',
  imports: [BannerComponent, ToolcardComponent, FaqsectionComponent, FooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
