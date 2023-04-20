import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Company } from '../interfeices/company';
import { Vacancy } from '../interfeices/vacancy';
import { CompanyService } from '../servisec/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {

  company: Company = {} as Company;
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if(_id) {
        let companyId = +_id;
        this.companyService.getCompany(companyId).subscribe(
          ( company ) => this.company = company);
        this.getVacancies(companyId);
      }
    });
  }

  getVacancies(companyId: number){
    this.companyService.getCompanyVacancies(companyId).subscribe(
      ( vacancies: Vacancy[]) => this.vacancies = vacancies);
  }
}

