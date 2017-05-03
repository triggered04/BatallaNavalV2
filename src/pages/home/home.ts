import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Batalla } from '../batalla/batalla';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  items: Array<{
                P1:string,
                P2:string,
                jugador1:number[],
                jugador2:number[],
                Seljugador1:number[],
                Seljugador2:number[],
                acertoJ1:boolean,
                acertoJ2:boolean,
                monto: number,
                turno: string
              }>;
  batallas:  FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, af: AngularFire) {
    this.batallas = af.database.list('/Batallas');
    
  }

  goToBatalla(event, item) {

    this.navCtrl.push(Batalla, {
      batalla: item
    });
  }

}
