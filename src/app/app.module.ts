import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { RedditsPage } from '../pages/reddits/reddits';
import { SettingsPage } from '../pages/settings/settings';
//import { ContactPage } from '../pages/contact/contact';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LazyLoadImageModule } from 'ng-lazyload-image';

export const firebaseConfig = {
    apiKey: "AIzaSyDSjtPxxO3POTyXFMiYhtGIPRxMH_93B3U",
    authDomain: "test-2c237.firebaseapp.com",
    databaseURL: "https://test-2c237.firebaseio.com",
    projectId: "test-2c237",
    storageBucket: "test-2c237.appspot.com",
    messagingSenderId: "527467422313"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    RedditsPage,
    SettingsPage,
    //ContactPage,
    DetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LazyLoadImageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    RedditsPage,
    SettingsPage,
    //ContactPage,
    DetailsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
