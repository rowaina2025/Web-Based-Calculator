import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class NumbersService extends AppComponent{

  handelUndefinedAndInfinity(calc: AppComponent): NumbersService {
    let clc = calc as NumbersService;
    if(clc.num2.includes('UNDEFINED!')  || clc.num1.includes('UNDEFINED!') || clc.num1d == "Infinity") {
      clc.num2d = '';
      clc.num1 = '';
      clc.num2 = '';
      clc.op = '';
      if(clc.num1d != "Infinity"){
        clc.und = true;
        clc.num1d = "UNDEFINED!";

      }
    }
    return clc;
  }

  genTxt(calc: AppComponent): AppComponent {
    let clc = calc as NumbersService;
    clc.text = clc.num1 + clc.op + clc.num2;
    clc = this.handelUndefinedAndInfinity(clc);
    let c = clc as AppComponent
    return c;
  }

  addNumber(n: string ,calc: AppComponent): AppComponent {
    let clc = calc as NumbersService;
    if(this.firstDigit(clc)){ //undefined case, empty and zero in first number case
      clc.num1 = n;
      clc.num1d = n;
      clc.num2d = '';
      clc.und = false;
    }
    else if(clc.num2 == '0') {clc.num2 = n; clc.num1d = n;} //second number zero case
    else if(this.addSecondNumber(clc)) { //adding second number case
        clc.num2 += n;
        clc.num1d = clc.num2;
    }
    else if(this.addFirstNumber(clc)) { //adding first number case
        clc.num1 += n;
        clc.num1d = clc.num1;
    }
    return this.genTxt(clc);
  }

  firstDigit(calc: AppComponent): boolean {
    let clc = calc as NumbersService;
    if((clc.num1 == '0' || clc.num1d == '') && clc.op == '' || clc.und || clc.num1d.includes("Infinity")) {return true;}
    return false;
  }

  addFirstNumber(calc: AppComponent): boolean {
    let clc = calc as NumbersService;
    if(clc.num1 != '0' && (!clc.num1.includes('.') && clc.num1.length < 9 || clc.num1.includes('.') && clc.num1.length - clc.num1.indexOf('.') < 16) && this.op == '') { return true; }
    return false;
  }

  addSecondNumber(calc: AppComponent): boolean {
    let clc = calc as NumbersService;
    if(clc.op != '' && clc.num1 != '' &&(!clc.num2.includes('.') && clc.num2.length < 9 || clc.num1.includes('.') && clc.num2.length - clc.num2.indexOf('.') < 16)) { return true; }
    return false;
  }

  zero(calc: AppComponent): AppComponent {
    let clc = calc as NumbersService;
    if(clc.und) { //undefined case
      clc.und = false;
      clc.num1 = '0';
      clc.num1d = '0';
    }
    else if(clc.num1 != '0' && clc.op =='') { clc.num1 += '0'; clc.num1d = clc.num1; } //adding zero the first number case
    else if(clc.op != '' && clc.num2 != '0') { clc.num2 += '0'; clc.num1d = clc.num2; } //adding zero to the second number case
    return this.genTxt(clc);
  }

  point(calc: AppComponent): AppComponent {
    let clc = calc as NumbersService;
    if(clc.und || clc.num1 == '') {
      clc.und = false;
      clc.num1 = '0.';
      clc.num1d = clc.num1;
    }
    else if(!clc.num2.includes('.') && clc.op != '') {
      if(clc.num2 == '') {clc.num2 += '0.';  clc.num1d = clc.num2;}
      else {clc.num2 += '.';  clc.num1d = clc.num2;}
    }
    else if(!clc.num1.includes('.') && clc.op == '') { //needs modification
      clc.num1 += '.';
      clc.num1d = clc.num1;
    }
    let s = clc as AppComponent;
    return this.genTxt(s);
  }

}
