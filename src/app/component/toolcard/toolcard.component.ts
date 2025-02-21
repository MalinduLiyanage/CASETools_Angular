import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolcard',
  imports: [NgFor],
  templateUrl: './toolcard.component.html',
  styleUrl: './toolcard.component.css'
})
export class ToolcardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Input() highlights: { text: string; boldText: string }[] = [];
  @Input() learnMoreLink: string = '#';
}
