import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import { MenuPage } from '../menu/menu';


/**
 * Generated class for the SpeechRecognitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speech-recognition',
  templateUrl: 'speech-recognition.html',
})
export class SpeechRecognitionPage {

  matches: String[];
  isRecording = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private speechRecognition: SpeechRecognition, private plt: Platform, 
    private cd: ChangeDetectorRef, public loadingCtrl: LoadingController) {
  }

  isIos() {
    return this.plt.is('ios');
  }
 
  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }
 
  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }
 
  startListening() {

    this.presentLoadingCustom();

  }

  presentLoadingCustom() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box"></div>
          <p>loading</p>
        </div>`,
      duration: 5000
    });
  
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });
  
    loading.present();
  }

  openMenu(){
    this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeechRecognitionPage');
  }

}
