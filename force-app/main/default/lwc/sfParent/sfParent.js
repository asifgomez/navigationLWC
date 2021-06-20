import { LightningElement,track } from 'lwc';
import { pathItems, pathElements } from './paths';
import heySfLogo from '@salesforce/resourceUrl/heysflogo';
export default class SfParent extends LightningElement {
    step = 1;
    pathItems = pathItems;
    pathElements = pathElements;
    currentPath = pathElements[0];
    logo = heySfLogo;
    get isStep1(){
        return this.step === 1
      }
      get isStep2(){
        return this.step === 2
      }
      get isStep3(){
        return this.step === 3
      }
      get isStep4(){
        return this.step === 4
      }
    selectedpath(event){
        this.step = this.pathElements.indexOf(event.detail);
        this.currentPath = event.detail;
      }
      nextHandler(event){
        this.step = this.step+1;
        this.currentPath = this.pathElements[this.step];
      }
      backHandler(event){
        this.step = this.step-1;
        this.currentPath = this.pathElements[this.step];
      }
}