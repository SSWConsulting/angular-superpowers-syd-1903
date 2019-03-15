import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  deleteCompany(id: number): Observable<Company> {
    console.log('SERVICE DELETE COMPANY CALLED', id);
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error): Observable<any> {
    console.error('ERROR HANDLED', error);
    return new Observable();
  }

}
