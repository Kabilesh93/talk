import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceCalculatorPage } from './voice-calculator';

@NgModule({
  declarations: [
    VoiceCalculatorPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceCalculatorPage),
  ],
})
export class VoiceCalculatorPageModule {}
