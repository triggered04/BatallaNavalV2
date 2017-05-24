import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BatallaModel } from '../../app/models/BatallaModel'
import {AngularFire} from 'angularfire2';


@Component({
  selector: 'batalla',
  templateUrl: 'batalla.html'
})
export class Batalla {  
  
  userid : string = "NO1D3QhDJUNIdmSVvib3TuZc2wN2";
  batalla:  BatallaModel;
  flagCasillasJ1:boolean;
  flagCasillasJ2:boolean;
  constructor(public navCtrl: NavController,af: AngularFire,navParams: NavParams) {
    this.batalla = navParams.data.batalla;
    this.flagCasillasJ1 = this.batalla.P1=='' || this.batalla.P1.split('-')[1] == this.userid;
    this.flagCasillasJ2 = this.batalla.P1!='' && this.batalla.P1.split('-')[1] != this.userid;
    console.log(this.flagCasillasJ1);
  }

}
