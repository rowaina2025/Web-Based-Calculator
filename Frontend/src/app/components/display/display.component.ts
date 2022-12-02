import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DisplayService } from 'src/app/services/display-services/display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor(private clc: AppComponent, private display: DisplayService) {  }

  displayLower(): string { return this.display.displayLower(this.clc);}

  displayUpper(): string { return this.display.displayUpper(this.clc);}
}
