import { NgFor } from '@angular/common';
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-servicecard',
  imports: [NgFor],
  templateUrl: './servicecard.component.html',
  styleUrl: './servicecard.component.css'
})
export class ServicecardComponent {
  @Input() title: string = '';
  @Input() highlights: { text: string; boldText: string }[] = [];
  @Input() learnMoreLink: string = '#';
}
