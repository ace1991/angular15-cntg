import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweempus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css']
})
export class TwimpCardComponent {
  @Input() twimp!:Twimp;
  @Output() eventoLike = new EventEmitter();

  marcarFavorito(): void {
    this.twimp.favorite ? this.twimp.favorite=false : this.twimp.favorite=true;
    console.log("ID Twimp: " + this.twimp.id + " - Fav: " + this.twimp.favorite)
    this.eventoLike.emit(this.twimp.favorite);
  }

}
