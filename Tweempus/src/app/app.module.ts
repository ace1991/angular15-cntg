import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { CreateTwimpModule } from './create-twimp/create-twimp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule,
    LoginModule,
    ProfileModule,
    CreateTwimpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
