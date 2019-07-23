import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';//To make any HTTP request you have to import HttpClientModule
import {mockApiServer} from './services/mockapiserver.service';//We also need to import our service here so that will be available to all the components in our application 
import { NavigationComponent } from './navigation/navigation.component';
import { AccountsComponent } from './accounts/accounts.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [mockApiServer],//and update provides with the service we just imported
  bootstrap: [AppComponent]
})
export class AppModule { }
