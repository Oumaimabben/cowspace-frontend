import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faLock,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule,FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = 'loginPage';
  public faUserCircle = faUserCircle;
  public faBars = faBars;
  public faLock = faLock;
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService ,private router : Router) { }

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful, token:');
        localStorage.setItem('token', response.token);
        // handle successful login, e.g., store the token, navigate, etc.
        this.router.navigate(['/']);
      },
      error => {


        console.error('Login failed', error);
        // handle login failure
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: error.error.message,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        });
      }
    );
  }

}
