import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the TextToSpeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const MEDIA_FILES_KEY = 'mediaFiles';

@IonicPage()
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})
export class TextToSpeechPage {

  text: string;
  rate: number;
  locale: string;
  mediaFiles = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private popoverCtrl: PopoverController, private tts: TextToSpeech,
     private mediaCapture: MediaCapture, private storage: Storage, private file: File, private media: Media) {
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

  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      this.storeMediaFiles(res);
    }, (err: CaptureError) => console.error(err));
  }

  play(myFile) {
    const audioFile: MediaObject = this.media.create(myFile.localURL);
    audioFile.play();
  }
 
  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    })
  }

}
