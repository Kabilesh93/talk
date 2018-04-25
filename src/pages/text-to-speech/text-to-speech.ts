import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the TextToSpeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})
export class TextToSpeechPage {

  text: string;
  rate: number;
  locale: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private popoverCtrl: PopoverController, private tts: TextToSpeech) {
      this.text = 'Enter text';
      this.rate = 0.1;
      this.locale = 'en-US';
  }

  openMenu(){
    this.navCtrl.push(MenuPage);
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(MenuPage, {  
    });
   
    popover.present({
      ev: ev
    });
  }

  playText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
  }

}
