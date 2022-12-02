import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ReqService } from '../../controller/req.service';
import { NumbersService } from './numbers.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService extends AppComponent{

  constructor(private httpService: ReqService, private number: NumbersService) { super(); }

  //generates deisplayed text on switching when operand is added
  txt2(calc: AppComponent): OperationService {
    let clc = calc as OperationService;
    clc.num2d = clc.num1 + clc.op;
    clc.num1d = '';
    return clc;
  }

  oneOp(s: string, calc: AppComponent): AppComponent {
    let clc = calc as OperationService;
    if(s == 'addInv') {
      if(clc.num1 == '0') {
        clc.num1 = '-';
        clc.num1d = clc.num1;
      }
    }
    if(clc.num1 != '' && clc.op == '' || clc.num2 != '' && !clc.und && clc.text.search('Infinity') == -1) {
      if(clc.num2 != ''){
        let n = clc.num2;
        this.httpService.oneOp(n, '/' + s).subscribe(
          (res)=> {
            clc.num2= res;
            clc.num1d = res;
            return this.number.genTxt(clc);
          }
        );
      }
      else if(clc.num1 != '' && clc.op == '' && !clc.und && clc.text.search('Infinity') == -1) {
        let n = clc.num1;
        this.httpService.oneOp(n, '/' + s).subscribe(
          (res)=> {
            clc.num1= res;
            clc.num1d = res;
            clc.num2d = '';
            return this.number.genTxt(clc);
          }
        );
      }
    }
    return clc;
  }

  twoOp(s: string, calc: AppComponent): AppComponent {
    let clc = calc as OperationService;
    if(clc.num1 != '' && !clc.und && clc.num2 == '' &&  !clc.text.includes('Infinity')) { //append operator
      clc.op = s;
      clc = this.txt2(clc);
      return this.number.genTxt(clc);
    }
    else if(clc.num2 != '' && clc.op != '') { //send request and append operator
      let n = clc.text;
      this.httpService.twoOp(n).subscribe(
        (res) => {
          clc.num1 = res;
          clc.op = s;
          clc.num2 = '';
          clc = this.txt2(clc);
          return this.number.genTxt(clc);
        }
      );
    }
    return clc;
  }

  equ(calc: AppComponent): AppComponent {
    let clc = calc as OperationService;
    if(clc.und ||  clc.text.search('Infinity') == -1) { //undefined case
      clc.num1 = '';
      clc.und = false;
      clc.num1d = clc.num1;
      clc.num2d = '';
    }
    //check
    let n = clc.text;
    this.httpService.twoOp(n).subscribe(
      (res) => {
        clc.num1 = res;
        clc.num2 = '';
        clc.op = '';
        clc.num1d = res;
        clc.num2d = clc.num2;
        return this.number.genTxt(clc);
      }
    );
    return clc;
  }

}
