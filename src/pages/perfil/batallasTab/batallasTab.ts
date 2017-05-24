import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'batallasTab',
  templateUrl: 'batallasTab.html'
})
export class BatallasTab {
   batalla:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire,navParams: NavParams) {
    this.batalla = navParams.data;
  }

}
