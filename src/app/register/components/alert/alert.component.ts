import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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
    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message;            
        });
    }
    
    toggleAlert() {
     this.message = false;       
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

