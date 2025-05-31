import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage: string;

  constructor(private auth: AuthService, private router: Router) {}

  private encodeToBase64(str: string): string {
    const utf8Bytes = new TextEncoder().encode(str);
    const base64String = btoa(String.fromCharCode(...utf8Bytes));
    return base64String;
  }

  login() {
    this.errorMessage = '';

    const encodedUsername = this.encodeToBase64(this.username);
    const encodedPassword = this.encodeToBase64(this.password);
console.log(encodedUsername, encodedPassword)
    this.auth.login(encodedUsername, encodedPassword).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => {
        this.errorMessage = 'Usuário ou senha inválidos';
        console.error('Erro de login:', err);
      }
    });
  }
}
