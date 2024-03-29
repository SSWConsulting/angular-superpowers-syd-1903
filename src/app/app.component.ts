import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebootcamp-crm';
  now = Date();

  companyCount$: Observable<number>;


  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyCount$ = this.companyService.getCompanies().pipe(
      map(c => c.length)
    );
  }

}
