import { Component , Input} from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'casilla',
  templateUrl: 'casilla.html'
})
export class Casilla {

  @Input()  casillas:number[] ;
  @Input()  muestro:boolean;
  constructor(public navCtrl: NavController) {
  }
    selectCasilla(valores){
      this.casillas = valores;
    }
}
