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

 login() {
  this.errorMessage = '';
  this.auth.login(this.username, this.password).subscribe({
    next: () => this.router.navigate(['/home']),
    error: (err) => {
      this.errorMessage = 'Usuário ou senha inválidos';
      console.error('Erro de login:', err);
    }
  });
}

}
