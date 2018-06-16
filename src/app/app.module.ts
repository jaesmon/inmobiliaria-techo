import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SomeComponentComponent } from './some-component/some-component.component';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  
  declarations: [
    AppComponent,
    SomeComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}