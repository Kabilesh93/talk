import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { TextToSpeechMock } from '@ionic-native-mocks/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Geolocation } from '@ionic-native/geolocation';
import { MediaCapture } from '@ionic-native/media-capture';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { MyApp } from './app.component';

import { SpeechRecognitionPage } from '../pages/speech-recognition/speech-recognition';
import { TextToSpeechPage} from '../pages/text-to-speech/text-to-speech';
import { VoiceCalculatorPage } from '../pages/voice-calculator/voice-calculator';
import { MenuPage } from '../pages/menu/menu';
import { HelpPage } from '../pages/help/help';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    SpeechRecognitionPage,
    TextToSpeechPage,
    VoiceCalculatorPage,
    MenuPage,
    HelpPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeechRecognitionPage,
    TextToSpeechPage,
    VoiceCalculatorPage,
    MenuPage,
    HelpPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: TextToSpeech, useClass: TextToSpeechMock },
    SpeechRecognition,
    Geolocation,
    MediaCapture,
    Media,
    File
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
