import { Component, OnInit, OnDestroy } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {


  constructor(
    private companyService: CompanyService
    ) { }

  companies$: Observable<Company[]>;

  ngOnInit() {
    this.companies$ = this.companyService.getCompanies()
    .pipe(
      tap(x => console.log('COMPANY LIST TAP', x))
    );
  }

  deleteClicked(company: Company) {
    this.companyService.deleteCompany(company.id);
  }

}
