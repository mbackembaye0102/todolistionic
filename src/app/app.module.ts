import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
export const firebaseConfig = {
  apiKey: "AIzaSyBPVIzxFvwhuKS5cl7FV9yq0WhiHMfNukM",
  authDomain: "todo-5583d.firebaseapp.com",
  databaseURL: "https://todo-5583d.firebaseio.com",
  projectId: "todo-5583d",
  storageBucket: "todo-5583d.appspot.com",
  messagingSenderId: "336552095702",
  appId: "1:336552095702:web:2a038175c1e048c356be77",
  measurementId: "G-VSLK3NC2YX"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
 
}
