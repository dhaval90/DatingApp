import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any = {};
  //loggedIn: boolean = false;
  //currentUser$: Observable<User>;

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }
  login() {
    console.log(this.model);
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      //this.loggedIn = true;
    }, error => { console.log(error)});
  }

  logout(){
    this.accountService.logout();
    //this.loggedIn = false;
  }

  // getCurrentUser()
  // {
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
