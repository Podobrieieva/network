import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../service/register.service'
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private alert: boolean = false;
  private message: any;
  
  @Output() changeLogin = new EventEmitter(); 

  constructor(
    private registerService: RegisterService, 
    private alertService: AlertService) { }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe(message => { 
    this.message = message;            
    });
  }
    
  deleteMassegeAlert() {
    // location.reload(true);
    this.changeLogin.emit()
    this.registerService.logout(); 
    this.message = false;       
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

