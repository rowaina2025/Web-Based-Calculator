import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected text: string = '';
  protected num1: string = '';
  protected num2: string = '';
  protected op: string = '';
  protected num1d: string = '';
  protected num2d: string = '';
  protected und : boolean = false;

  getNum1d(): string {return this.num1d;}
  getNmu2d(): string {return this.num2d;}
  setNum1d(s: string) {this.num1d = s;} //unused
  setNum2d(s: string) {this.num2d = s;} //unused

}
