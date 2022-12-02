import { Component, Injectable } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DeleteService } from 'src/app/services/text-manupulation-services/delete.service';
import { NumbersService } from 'src/app/services/text-manupulation-services/numbers.service';
import { OperationService } from 'src/app/services/text-manupulation-services/operation.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
@Injectable({ providedIn: 'root' })
export class ButtonsComponent {

  constructor(private clc: AppComponent, private num: NumbersService, private operate: OperationService, private remove: DeleteService) { }

  oneOp(op: string) { this.clc = this.operate.oneOp(op, this.clc); }

  twoOp(op: string) { this.clc = this.operate.twoOp(op, this.clc); }

  equ() { this.clc = this.operate.equ(this.clc); }

  number(n: string) { this.clc = this.num.addNumber(n, this.clc); }

  point() { this.clc = this.num.point(this.clc); }

  del() { this.clc = this.remove.del(this.clc); }

  C() { this.clc = this.remove.C(this.clc); }

}
