import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
