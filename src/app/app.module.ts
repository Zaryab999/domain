import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {ConnectService} from'src/app/services/connect.service'
import { AppComponent } from './app.component';
import {HttpClient, HttpHeaders, HttpParams,HttpClientModule} from'@angular/common/http';
import { SearchgridComponent } from './searchgrid/searchgrid.component';
import {
  IgxGridModule,
  IgxInputGroupModule,
  IgxIconModule,
  IgxRippleModule,
  IgxButtonModule,
  IgxChipsModule
} from 'igniteui-angular';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxButtonModule, IgxChipsModule,IgxGridModule
   
    
  ],
  declarations: [
    AppComponent,
    SearchgridComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }