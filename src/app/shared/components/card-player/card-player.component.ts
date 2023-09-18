import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent {
  @Input() track: any = {};
  @Input() mode: 'small' | 'big' = 'small';
}
