import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {


  constructor(
    private companyService: CompanyService
    ) { }

  companies: Company[];

  ngOnInit() {
    const component: CompanyListComponent = this;

    this.companyService.getCompanies()
    // .subscribe(function(companies) {
    //   component.companies = companies;
    // });
    .subscribe(companies => {
      console.log('inside the subscription');
      this.companies = companies;
    },
    error => {
      console.error('ERROR !!', error);
    },
    () => {
      console.log('Observable completed');
    });
  }



}
