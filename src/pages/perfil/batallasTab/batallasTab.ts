import { Component, Input } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'batallasTab',
  templateUrl: 'batallasTab.html'
})
export class BatallasTab {
    @Input() batalla:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, af: AngularFire) {
  
  }

}
