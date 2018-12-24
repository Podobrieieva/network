import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

import { NetworkService } from '../../../shared/services/network.service';
import { select, Store } from '@ngrx/store';
import { State } from '../../../core/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  @Input() interest: string;
  public basicInfoForm: FormGroup;
  public educationForm: FormGroup;
  public workForm: FormGroup;
  private interestArr = [];
  private bycicle = false;
  private photgraphy = false;
  private shopping = false;
  private traveling = false;
  private eating = false;

  constructor(
    private networkService: NetworkService,
    private store: Store<State>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.basicInfoForm = this.fb.group(this.createFromGroupBasicInfo().controls);
    this.educationForm = this.fb.group(this.createFromGroupEducation().controls);
    this.workForm = this.fb.group(this.createFromGroupWorkForm().controls);
  }

  submitBasicInfo() {
    const basicInfo = {
      'email': this.email.value,
      'fullname': `${this.firstname.value} ${this.lastname.value}`,
      'name': this.firstname.value,
      'surname': this.lastname.value,
      'gender': 'string',
      'birthDate': `${this.day.value} ${this.month.value} ${this.year.value}`,
      'contact': {
        'country': this.country.value,
        'city': this.city.value
      }
    };
    this.networkService.updateProfile(basicInfo);
  }

  get firstname() {
    return this.basicInfoForm.get('firstname');
  }
  get lastname() {
    return this.basicInfoForm.get('lastname');
  }
  get email() {
    return this.basicInfoForm.get('email');
  }
  get day() {
    return this.basicInfoForm.get('day');
  }
  get month() {
    return this.basicInfoForm.get('month');
  }
  get year() {
    return this.basicInfoForm.get('year');
  }
  get country() {
    return this.basicInfoForm.get('country');
  }
  get city() {
    return this.basicInfoForm.get('city');
  }

  private createFromGroupBasicInfo() {
    return new FormGroup({
      lastname: new FormControl('', [Validators.maxLength(15), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
      firstname: new FormControl('', [Validators.maxLength(15), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      day: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      male: new FormControl(''),
      female: new FormControl(''),
      city: new FormControl(''),
      country: new FormControl(''),
      aboutMe: new FormControl('')
    });
  }

  private  submitEducationForm() {
    const educationData = {
      'education': {
        'country': '',
        'city': '',
        'school': '',
        'university': this.university.value,
        'periodOfSchool': '',
        'periodOfUniversity': `${this.universityFrom.value}${this.universityTo.value}`
      }
    };
    this.networkService.updateProfile(educationData);
  }

  get university() {
    return this.educationForm.get('university');
  }
  get universityFrom() {
    return this.educationForm.get('universityFrom');
  }
  get universityTo() {
    return this.educationForm.get('universityTo');
  }
  get description() {
    return this.educationForm.get('description');
  }
  get graduate() {
    return this.educationForm.get('graduate');
  }

  private createFromGroupEducation() {
    return new FormGroup({
      university: new FormControl ('', [Validators.maxLength(25), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
      description: new FormControl ('', [Validators.maxLength(200), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
      universityFrom: new FormControl(''),
      universityTo: new FormControl(''),
      graduate: new FormControl('')
    });
  }


  submitWorkForm() {
    const workData = {
    'work': [
      {
        'country': '',
        'city': this.companyCity.value,
        'company': this.company.value,
        // "designation": this.designation.value,
        'period': `${this.companyFrom.value}.${this.companyTo.value}`
      }
    ]
    };
    this.networkService.updateProfile(workData);
  }

  get company() {
    return this.workForm.get('company');
  }
  get designation() {
    return this.workForm.get('designation');
  }
  get companyCity() {
    return this.workForm.get('companyCity');
  }
  get companyFrom() {
    return this.workForm.get('companyFrom');
  }
  get companyTo() {
    return this.workForm.get('companyTo');
  }
  get descriptionCompany() {
    return this.workForm.get('designation');
  }

  private createFromGroupWorkForm() {
    return new FormGroup({
      company: new FormControl('', [Validators.maxLength(25), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
      description: new FormControl('', [Validators.maxLength(200), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
      companyFrom: new FormControl(''),
      companyTo: new FormControl(''),
      designation: new FormControl(''),
      companyCity: new FormControl(''),
    });
  }

  private addInterestArray (elem) {
    this.interestArr.push(elem.target.innerText);
    const int = elem.target.innerText.toLowerCase();
    this[int] = !this[int];
  }

  private AddInterestsProfile() {
    if (this.interest) { this.interestArr.push(this.interest); }
    this.interestArr.forEach(x => {this[x.toLowerCase()] = !this[x.toLowerCase()]})
    this.interest = '';
    this.networkService.updateProfile({'interests': this.interestArr});
    this.interestArr = [];
  }
}
