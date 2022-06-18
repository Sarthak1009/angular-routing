import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit()
  {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((result) => {
        this.router.navigate(['admin']);
      },(err: Error) => {alert(err.message)})
    }
  }
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.auth.isLoggetIn()) {
      this.router.navigate(['admin']);
    }
  }

}
