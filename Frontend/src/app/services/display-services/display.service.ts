import { Injectable } from '@angular/core';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  displayUpper(clc: AppComponent): string { return clc.getNmu2d(); }

  displayLower(clc: AppComponent): string { return clc.getNum1d(); }

}
