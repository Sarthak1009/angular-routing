import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggetIn(): boolean {
    return this.getToken() !== null;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({username, password}:any): Observable<any> {
    if(username === 'admin' && password === 'admin123'){
      this.setToken('Iamnoobbutlove****');
      return of({name: 'Sarthak Dubey', username: 'admin'});
    }
    return throwError(new Error('Invalid Credentials'));
}
}
