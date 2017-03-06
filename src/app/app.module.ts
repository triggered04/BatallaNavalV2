import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Import Pages
import { Batalla } from '../pages/batalla/batalla';
import { Casilla } from '../utils/casilla/casilla';
import { Creditos } from '../pages/creditos/creditos';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Perfil } from '../pages/perfil/perfil';
import { Registro } from '../pages/registro/registro';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyCgF_D1ZbwQTi2hrxgBjZXJr1rYlNXIpMk",
    authDomain: "finalionic-6052c.firebaseapp.com",
    databaseURL: "https://finalionic-6052c.firebaseio.com",
    storageBucket: "finalionic-6052c.appspot.com",
    messagingSenderId: "80262380340"
};

@NgModule({
  declarations: [
    MyApp,
    Batalla,
    Creditos,
    Home,
    Login,
    Perfil,
    Casilla,
    Registro
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Batalla,
    Creditos,
    Home,
    Login,
    Perfil,
    Casilla,
    Registro
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
