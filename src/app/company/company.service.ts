import { Injectable } from '@angular/core';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(): Company[] {
    return [
      {name: 'Company A', phone: 12448, email: 'companyA@ssw.com.au'},
      {name: 'Company B', phone: 12448, email: 'companyB@ssw.com.au'},
      {name: 'Company C', phone: 12448, email: 'companyC@ssw.com.au'},
      {name: 'Company D', phone: 12448, email: 'companyD@ssw.com.au'}
    ];
  }
}
