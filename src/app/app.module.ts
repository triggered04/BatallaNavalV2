import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Batalla } from '../pages/batalla/batalla';
import { Creditos } from '../pages/creditos/creditos';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Perfil } from '../pages/perfil/perfil';
import { Registro } from '../pages/registro/registro';

@NgModule({
  declarations: [
    MyApp,
    Batalla,
    Creditos,
    Home,
    Login,
    Perfil,
    Registro
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Batalla,
    Creditos,
     Home,
    Login,
    Perfil,
    Registro
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
