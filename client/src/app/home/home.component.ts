import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  registerMode = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }

   getUsers() {
    // this.http.get('https://localhost:5001/api/users').subscribe(response=> 
    //     this.users = response);
    
     this.http.get('https://localhost:5001/api/users').subscribe(response=> 
     {
         this.users = response;
     }
     ,error=>
     {
         console.log(error);
     }
     );
   }

}
