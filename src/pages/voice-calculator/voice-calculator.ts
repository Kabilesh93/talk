import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the VoiceCalculatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voice-calculator',
  templateUrl: 'voice-calculator.html',
})
export class VoiceCalculatorPage {

  memory: any = [];
  operator: string;
  operand: number;
  answer: number;
  display: string;
  message: string;
  negative: boolean;
  recognizerState: boolean;
  micButtonColor: string;
  ntvButtonColor: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.memory = [];
    this.operator = "";
    this.operand = 0;
    this.answer = 0;
    this.display = "";
    this.message = 'hello';
    this.negative = false;
    this.recognizerState = false;
    this.micButtonColor = '#3ebe69';
    this.ntvButtonColor = '#5163ff';
  }

  recognize(){
    if(this.recognizerState === true){
      this.micButtonColor = '#3ebe69';
      this.recognizerState = false;
    }else{
      this.micButtonColor = '#84e258';
      this.recognizerState = true;
    }
  }

  inputDigit(digit: number){
    if(this.negative === true){
      this.memory.push(digit * -1);
      this.negative = false;
      this.ntvButtonColor = '#5163ff';
    }else{
      this.memory.push(digit);
      this.ntvButtonColor = '#5163ff';
    }
    
    if(!(this.operator === "")){
      this.display = String(this.operand) + " " + this.operator + " " + String(this.memory.join('') * 1);
      this.calculate();
    }else{
      this.display = String(this.memory.join('') * 1);
    }
  }

  pushDot(dot: string){
    this.memory.push(dot);
    if(!(this.operator === "")){
      this.display = String(this.operand) + " " + this.operator + " " + String(this.memory.join('') * 1) + ".";
    }else{
      this.display = String(this.memory.join('') * 1) + ".";
    }
  }

  setNegative(){
    if(this.negative === true){
      this.ntvButtonColor = '#5163ff';
      this.negative = false;
    }else{
      this.ntvButtonColor = '#70e0bc';
      this.negative= true;
    }
  }

  operation(optr: string){
    this.operand = this.memory.join('') * 1;
    this.operator = optr;
    this.display = this.display + " " + optr;
    this.memory = [];

    if(this.operator === "%"||this.operator === "√x"||this.operator === "X2"){
      this.calculate();
    }
  }

  calculate(){
    if (this.operator === "+") {
      this.answer = this.operand + (this.memory.join('') * 1);
    }
    else if (this.operator === "-") {
      this.answer = this.operand - (this.memory.join('') * 1);
    } 
    else if (this.operator === "X") {
      this.answer = this.operand * (this.memory.join('') * 1);
    }
    else if (this.operator === "/") {
      this.answer = this.operand / (this.memory.join('') * 1);
    } 
    else if (this.operator === "%") {
      this.answer = this.operand * 0.01;
    } 
    else if (this.operator === "√x") {
      this.answer = Math.sqrt(this.operand);
    }
    else if (this.operator === "X2") {
      this.answer = Math.pow(this.operand, 2);
    }
  }

  equals(){
    this.display = String(this.answer);
    this.memory = [this.answer];
    this.operator = "";
  }

  clear(){
    this.display = "";
    this.operand = 0;
    this.operator = "";
    this.answer = 0;
    this.memory = [];
  }

  backspace(){
    this.memory.pop();
    if(!(this.operator === "")){
      this.display = String(this.operand) + " " + this.operator + " " + String(this.memory.join('') * 1);
    }else{
      this.display = String(this.memory.join('') * 1);
    }
  }

  openMenu(){
    this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceCalculatorPage');
  }

}
