import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NumbersService } from './numbers.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService extends AppComponent{

  constructor(private number: NumbersService) { super(); }

  del(calc: AppComponent): AppComponent {
    let clc = calc as DeleteService;
    if(clc.und || clc.text.includes('Infinity')) { //undefined case
      clc.num1 = '';
      clc.und = false;
      clc.num1d = clc.num1;
      clc.num2d = '';
    }
    else if(clc.num1d.includes('E')) { return this.C(clc); } //exponent case
    if(clc.num2 != '') { clc.num2 = clc.num2.substring(0, clc.num2.length - 1); clc.num1d = clc.num2; } //delete second number case
    else if(clc.num1 != '' && clc.num1d != '') { clc.num1 = clc.num1.substring(0, clc.num1.length - 1); clc.num1d = clc.num1; } //delete first number case
    return this.number.genTxt(clc);
  }

  C(calc: AppComponent): AppComponent {
    let clc = calc as DeleteService;
    clc.num1 = '';
    clc.num2 = '';
    clc.op = '';
    clc.num1d = '';
    clc.num2d = '';
    clc.und = false;
    let c = clc as AppComponent;
    return this.number.genTxt(c);
  }
}
