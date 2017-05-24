import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ETurno } from '../../app/models/ETurno';
import { BatallaModel } from '../../app/models/BatallaModel'

import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Batalla } from '../batalla/batalla';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {

  batallas:  FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, af: AngularFire) {
    this.batallas = af.database.list('/Batallas');
    
  }

  goToBatalla(event, item) {
   
    this.navCtrl.push(Batalla, {
      batalla: (item!=null)?item : BatallaModel.newBatallaModer()
    });
  }

}
