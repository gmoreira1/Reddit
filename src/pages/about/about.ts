import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  displayName;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public app: App) {

  }
  
  signOut() {
    this.afAuth.auth.signOut();
    //this.navCtrl.setRoot(HomePage);
    this.app.getRootNav().setRoot(HomePage);
  }

}
