import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import this
import { AppComponent } from './app.component';
import { LoginFormComponent } from './basicForm/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent  // Declare your component here
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule  // Add this to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
