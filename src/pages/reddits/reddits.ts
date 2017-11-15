import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';
//import * as firebase from 'firebase/app';
//import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  category: any;
  limit: any;
  displayName;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private redditService: RedditService) {
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;

    });
    this.getDefaults();
  }

    ngOnInit(){
      
      this.getPosts(this.category, this.limit);
    }

    getDefaults(){
      if (localStorage.getItem('category') != null){
      this.category = localStorage.getItem('category');
      } else {
      this.category = 'sports';
      }

      if (localStorage.getItem('limit') != null){
      this.limit = localStorage.getItem('limit');
      } else {
      this.limit = '10';
      }
    }

    getPosts(category, limit){
      this.redditService.getPosts(category, limit).subscribe(response => {

        this.items = response.data.children;


      });
    }

    viewItem(item){
      this.navCtrl.push(DetailsPage, {
        item:item
      });
    }

    changeCategory(){
      this.getPosts(this.category, this.limit);
    }
}
