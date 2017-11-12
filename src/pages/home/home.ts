import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
//import { ViewController } from 'ionic-angular';
//import {RedditsPage} from '../reddits/reddits';
import { TabsPage } from '../tabs/tabs';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  displayName;

  constructor(public navCtrl: NavController, /*private viewCtrl: ViewController,*/
    private afAuth: AngularFireAuth, public app: App) {

  }

  signInWithFacebook() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
      //this.navCtrl.setRoot(TabsPage);
          this.app.getRootNav().setRoot(TabsPage);

  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
