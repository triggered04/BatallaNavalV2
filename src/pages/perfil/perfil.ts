import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {BatallasTab} from './batallasTab/batallasTab'

@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class Perfil {
  tab1Root: any = BatallasTab;
  tab2Root: any = BatallasTab;
  tab3Root: any = BatallasTab;

  constructor(public navCtrl: NavController) {
  }
}
