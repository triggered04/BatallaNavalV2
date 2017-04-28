import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'batalla',
  templateUrl: 'batalla.html'
})
export class Batalla {

  batallas:  FirebaseListObservable<any>;
   
  constructor(public navCtrl: NavController,af: AngularFire) {
    
  }

}
