import { Component, OnInit } from '@angular/core';
import { Company } from '../interfeices/company';
import { CompanyService } from '../servisec/company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})


export class CompanyListComponent implements OnInit {

  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies()
      .subscribe((companies) => this.companies = companies);
  }
}
