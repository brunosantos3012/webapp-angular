import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomerRegisterComponent } from './pages/customer-register/customer-register.component';
import { CustomerConsultComponent } from './pages/customer-consult/customer-consult.component';
import { CustomerEditionModalComponent } from './components/customer-edition-modal/customer-edition-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerRegisterComponent,
    CustomerConsultComponent,
    CustomerEditionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
