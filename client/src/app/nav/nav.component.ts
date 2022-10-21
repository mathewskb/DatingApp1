import { Component, OnInit } from '@angular/core';
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
  
  
  constructor(public _accountservice: AccountService) { }

  ngOnInit(): void {
    
  }

  login() {
    this._accountservice.login(this.model).subscribe(data => {
    }, error =>
      console.log(error)
      , null);

  }

  logout() {
    this._accountservice.logout();
  }

}
