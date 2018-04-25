import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the VoiceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voice-search',
  templateUrl: 'voice-search.html',
})
export class VoiceSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openMenu(){
    this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceSearchPage');
  }

}
