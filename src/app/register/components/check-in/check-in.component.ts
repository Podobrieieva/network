import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {
	public registerForm:FormGroup;
  public currentUrl: string;	
  constructor( private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  	this.registerForm = this.fb.group(this.createFromGroup().controls, {validator: this.passwordConfirming});
  }

  submitHandler() {
    localStorage.setItem('isRegistered', 'true');
    console.log('33333333333333333')
    this.router.navigate(['']);
  }

  get firstname() {
  	return this.registerForm.get('firstname');
  }
  get lastname() {
  	return this.registerForm.get('lastname');
  }
  get email() {
  	return this.registerForm.get('email');
  }
  get password() {
  	return this.registerForm.get('password');
  }
  get confirmPassword() {
  	return this.registerForm.get('confirmPassword');
  }

  private createFromGroup() {
  	return new FormGroup({
  		lastname:new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
  		firstname:new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern('^[a-zA-Zа-яА-Я]+$')]),
  		email: new FormControl('', [Validators.required, Validators.email]),
  		password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]),
      confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  	})
  }

  private passwordConfirming(c: AbstractControl): { invalid: boolean, matching: any } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true, matching: 'Passwords are not matching'};
    }
  }
}



