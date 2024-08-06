import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RegisterComponent } from './register/resgister.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  
    RegisterComponent,
            LoginComponent,
            
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
