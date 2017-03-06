import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
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

  batallasCreadas:  FirebaseListObservable<any>;
  batallasComenzadas:  FirebaseListObservable<any>;
  batallasFinalizadas:  FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {
    this.tab1Root.batalla =af.database.list('/Batallas',{
      query: {  
        orderByChild: "P1.split('-')[1]",
        equalTo:  "Rikki"
      }
    });
    this.tab2Root.batalla = af.database.list('/Batallas',{
      query: {  
        orderByChild: "P2.split('-')[1]",
        equalTo:  "Rikki"
      }
    });
    this.tab3Root.batalla = af.database.list('/Batallas');
  }
}
