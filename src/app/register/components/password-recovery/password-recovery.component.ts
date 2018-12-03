import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store} from "@ngrx/store";
import { Subscription } from "rxjs";

import { getIsEmail, getIsUserCode,  State} from "../../store";
import { RegisterService } from '../../service/register.service'
import { GetEmail } from "../../store/actions/password-recovery.actions";
import { GetCode } from "../../store/actions/code-recovery.actions";

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  private isEmailSubscription: Subscription;
  private isCodeSubscription: Subscription;
  public recoveryForm: FormGroup;

  emailShow: boolean=true;
  //codeShow: boolean= false;
  changePass:boolean = false;

  constructor( 
  	private registerService: RegisterService,
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<State> ) { 
	    this.isEmailSubscription = this.store.pipe(select(getIsEmail)).subscribe(isEmail => {
	      if (isEmail) {
	        //localStorage.setItem('accountAvailability', isEmail);        
	        //this.codeShow = true;
	      }      
	    })
		  // this.isCodeSubscription = this.store.pipe(select(getIsUserCode)).subscribe(isUserCode => {
	   //    if (isUserCode && localStorage.getItem ('accountAvailability') ) {	      	
	   //    	localStorage.setItem('accountFree', isUserCode);
    //       this.changePass = true;
	   //    		return;
    //   	} 
    //   })
  }
  

  ngOnInit() {
  	this.recoveryForm = this.fb.group(this.createFromGroup().controls);
  }

  submitEmail() {
  	this.store.dispatch(new GetEmail({'email': this.email.value}))  
  }

  //   submitCode() {
  //   let form = this.recoveryForm.value;
  //   console.log(this.password.value);   

  //   this.store.dispatch(new GetCode());  
  // }

  get email() {
    return this.recoveryForm.get('email');
  }

  get password() {
    return this.recoveryForm.get('password');
  }

  private createFromGroup() {
    return new FormGroup({      
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
    });
  }

}