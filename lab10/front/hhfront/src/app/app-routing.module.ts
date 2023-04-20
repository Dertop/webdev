import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyDetailComponent } from './vacancy-detail/vacancy-detail.component';
import { VacancyTop10Component } from './vacancy-top10/vacancy-top10.component';
import { HomeComponent} from './home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'companies/:id', component: CompanyDetailComponent },
  { path: 'vacancies', component: VacancyListComponent },
  { path: 'vacancies/:id', component: VacancyDetailComponent },
  { path: 'vacancies/top10', component: VacancyTop10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
