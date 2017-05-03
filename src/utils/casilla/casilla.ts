import { Component , Input} from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'casilla',
  templateUrl: 'casilla.html'
})
export class Casilla {

  @Input()  casillas:number[];
  @Input()  muestro:boolean =true;
  constructor(public navCtrl: NavController,navParams: NavParams) {
      this.casillas = [0,0,0,0];
      console.log(this.muestro);
  }
    selectCasilla(valores){
      this.casillas = valores;
    }
}
