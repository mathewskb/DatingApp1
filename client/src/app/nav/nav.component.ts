import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'Dating App';
  model: any = {};
  
  
  constructor(public _accountservice: AccountService,
              private router : Router,
              private toastrService : ToastrService
              ) { }

  ngOnInit(): void {
    
  }

  login() {
    this._accountservice.login(this.model).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/members');
    }, error => {
      console.log(error);
      this.toastrService.error(error.error);
    }, null);

  }

  logout() {
    this._accountservice.logout();
    this.router.navigateByUrl('/');
  }

}
