import { Component, OnInit, Output, EventEmitter }
  from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Hard-coded for demo purposes!
  USER_NAME: string = 'Admin';
  PASSWORD: string = 'password';

  userName: string = '';
  password: string = '';
  loginError: boolean = false;
  // used EventEmitter to send data to another component
  // listening for "userNameEvent"
  @Output() userNameEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit() { }
  onLogin(): void {
    if (this.userName === this.USER_NAME &&
      this.password === this.PASSWORD) {
      this.loginError = false;
      this.userNameEvent.emit(this.userName);
    }
    else {
      this.userName = '';
      this.password = '';
      this.loginError = true;
    }
  }
}
