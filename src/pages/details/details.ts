import { Component, Input, Directive } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: '',
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;


  constructor(public navCtrl: NavController, public params: NavParams/*, private redditService: RedditService*/) {
    this.item = params.get('item');

    }
}
