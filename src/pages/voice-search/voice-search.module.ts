import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceSearchPage } from './voice-search';

@NgModule({
  declarations: [
    VoiceSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceSearchPage),
  ],
})
export class VoiceSearchPageModule {}
