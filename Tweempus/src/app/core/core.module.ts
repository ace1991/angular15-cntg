import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule,
            RouterModule,
            HttpClientModule
            ],
  providers:[AuthGuardService, AuthenticationService],
  exports: [HeaderComponent, NavComponent],
})
export class CoreModule {}
