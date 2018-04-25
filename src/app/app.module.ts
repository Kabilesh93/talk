import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { MyApp } from './app.component';

import { SpeechRecognitionPage } from '../pages/speech-recognition/speech-recognition';
import { TextToSpeechPage} from '../pages/text-to-speech/text-to-speech';
import { VoiceCalculatorPage } from '../pages/voice-calculator/voice-calculator';
import { VoiceSearchPage } from '../pages/voice-search/voice-search';
import { MenuPage } from '../pages/menu/menu';
import { HelpPage } from '../pages/help/help';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SpeechRecognitionPage,
    TextToSpeechPage,
    VoiceCalculatorPage,
    VoiceSearchPage,
    MenuPage,
    HelpPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpeechRecognitionPage,
    TextToSpeechPage,
    VoiceCalculatorPage,
    VoiceSearchPage,
    MenuPage,
    HelpPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TextToSpeech,
    SpeechRecognition,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {}
