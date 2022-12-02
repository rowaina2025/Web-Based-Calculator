import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { DisplayComponent } from './components/display/display.component';
import { ReqService } from './controller/req.service';
import { NumbersService } from './services/text-manupulation-services/numbers.service';
import { OperationService } from './services/text-manupulation-services/operation.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ReqService,
    NumbersService,
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
