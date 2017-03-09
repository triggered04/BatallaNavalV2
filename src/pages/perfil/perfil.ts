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

  batalla1:FirebaseListObservable<any>;
  batalla2:FirebaseListObservable<any>;
  batalla3:FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, af: AngularFire) {

   this.batalla1 =af.database.list('/Batallas',{
      query: {  
        orderByChild: "P1",
        equalTo: "Rikki"+"-"+"NO1D3QhDJUNIdmSVvib3TuZc2wN2"
        }
    });

    this.batalla2 = af.database.list('/Batallas',{
      query: {  
        orderByChild: "P2",
        equalTo: "Rikki"+"-"+"NO1D3QhDJUNIdmSVvib3TuZc2wN2"
      }
    });
    this.batalla3 = af.database.list('/Batallas',{
      query: {  
        orderByChild: "turno",
        equalTo: "Nadie"
      }
    });;
  }
}
