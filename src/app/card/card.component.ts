import { Component, Input } from '@angular/core';

interface CardDetails{
  title:string,
  theme1:string,
  value:string,
  icon:string,
  percent:string,
  text:string,
  theme2:string
  }

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardData: CardDetails | undefined;
}
