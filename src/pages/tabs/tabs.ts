import { Component } from '@angular/core';

import { SpeechRecognitionPage } from '../speech-recognition/speech-recognition';
import { TextToSpeechPage} from '../text-to-speech/text-to-speech';
import { VoiceCalculatorPage } from '../voice-calculator/voice-calculator';
import { VoiceSearchPage } from '../voice-search/voice-search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TextToSpeechPage;
  tab2Root = SpeechRecognitionPage;
  tab3Root = VoiceSearchPage;
  tab4Root = VoiceCalculatorPage;

  constructor() {

  }
}
