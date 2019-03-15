import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  companies$: BehaviorSubject<Company[]> = new BehaviorSubject<Company[]>([]);

  constructor(
    private httpClient: HttpClient
  ) {
    this.loadCompanies();
  }

  loadCompanies() {
    this.httpClient.get<Company[]>(`${this.API_BASE}/company`)
    .pipe(
      catchError(this.errorHandler)
    ).subscribe(c => this.companies$.next(c));
  }

  getCompanies(): Observable<Company[]> {
    return this.companies$;
  }

  deleteCompany(id: number) {
    console.log('SERVICE DELETE COMPANY CALLED', id);
    return this.httpClient.delete<Company>(`${this.API_BASE}/company/${id}`)
    .pipe(
      catchError(this.errorHandler)
    ).subscribe(c => this.loadCompanies());
  }

  addCompany(company: Company) {
    return this.httpClient.post<Company>(
      `${this.API_BASE}/company`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(
      catchError(this.errorHandler)
    ).subscribe(c => this.loadCompanies());
  }


  getCompany(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.API_BASE}/company/${id}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  updateCompany(company: Company) {
    return this.httpClient.put<Company>(
      `${this.API_BASE}/company/${company.id}`, company,
      { headers: new HttpHeaders().set('content-type', 'application/json') }
    ).pipe(
      catchError(this.errorHandler)
    ).subscribe(c => this.loadCompanies());
  }

  errorHandler(error): Observable<any> {
    console.error('ERROR HANDLED', error);
    return new Observable();
  }

}
