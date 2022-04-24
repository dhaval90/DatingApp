import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "https://localhost:5001/api/";
  private currentUserSource = new ReplaySubject<User>(1); //ReplaySubject (Rxjs) is a buffer component used to store last 'n' number of variable values
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  login(model:any)
  {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
          const user = response;
          if(user) {
            localStorage.setItem('user', JSON.stringify(user)); //Set user in localStorage
            this.currentUserSource.next(user);                  //Set user in ReplaySubject
          }
      })
      )
  }

  register(model:any)
  {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((response: User) => {
        if(response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.currentUserSource.next(response);
      }
      })
    )
  }

  setCurrentUser(user: User)
  {
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
