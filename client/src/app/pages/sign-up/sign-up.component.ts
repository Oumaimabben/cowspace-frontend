import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, HttpClientModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  title = 'Sign-upPage';
  public faUserCircle = faUserCircle;
  public faBars = faBars;
  public faLock = faLock;
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService) { }

  onRegister(): void {
   this.errorMessage = '';
    this.successMessage = '';
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.authService.register(userData).subscribe(
      (response) => {
        console.log('Registration successful:', response.message);
       // this.successMessage = response.message;
        console.log(userData)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: response.message
        });
       // Clear any previous error messages
      },
      (error) => {
        console.error('Registration failed', error.message);
       // this.successMessage = error.message;
      // Clear any previous success messages
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message
      });
      }
    );
  }
}
