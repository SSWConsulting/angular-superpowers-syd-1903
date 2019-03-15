import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  isNewCompany: boolean;
  companyId: number;
  company = {} as Company;
  companyForm: FormGroup;

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.companyId = +this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 0;

    this.buildForm();

    if(!this.isNewCompany) {
      this.companyService.getCompany(this.companyId)
      .subscribe(company => this.companyForm.patchValue(company));
    }
  }

  buildForm() {
    this.companyForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [],
      email: ['default@ssw.com.au']
    });
  }

  saveCompany() {
    const company = {...this.companyForm.value, id: this.companyId};

    if(this.isNewCompany){
      this.companyService.addCompany(company)
      .subscribe(company => this.router.navigateByUrl('/company/list'));
    }else{
      this.companyService.updateCompany(company)
      .subscribe(company => this.router.navigateByUrl('/company/list'));
    }

  }

}
