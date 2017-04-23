import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { AddadminComponent } from './component/addadmin/addadmin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { MainviewComponent } from './component/mainview/mainview.component';
import { OffersComponent } from './component/offers/offers.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { RewardsComponent } from './component/rewards/rewards.component';
import { RolesComponent } from './component/roles/roles.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { UserComponent } from './component/user/user.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AddadminComponent,
    MainviewComponent,
    OffersComponent,
    PagenotfoundComponent,
    RewardsComponent,
    RolesComponent,
    SidebarComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
