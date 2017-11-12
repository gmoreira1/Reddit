import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { RedditsPage } from '../reddits/reddits';
import { SettingsPage } from '../settings/settings';

@Component({

  templateUrl: 'tabs.html'
})
export class TabsPage {
  //this tells the tabs component which pages
  // should be each tab's root pages
  tab1Root: any = RedditsPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = AboutPage;
  //tab4Root: any = HomePage;
  constructor(){

  }

}
