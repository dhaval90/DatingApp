import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //@Input() usersFromHomeComponent: any;   //Getting data from home  component to register component (Parent to Child Component)
  @Output() cancelRegister = new EventEmitter(); //Providing data from register component to home component
  model:any = {};
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error =>  {console.log(error);
    })
    console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
