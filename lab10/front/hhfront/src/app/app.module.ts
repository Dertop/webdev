import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyService } from './servisec/company.service';
import { VacancyService } from './servisec/vacancy.service';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { VacancyTop10Component } from './vacancy-top10/vacancy-top10.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    VacancyListComponent,
    VacancyDetailComponent,
    VacancyTop10Component,
    CompanyDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CompanyService,
    VacancyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
