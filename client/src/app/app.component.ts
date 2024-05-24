import { Component } from '@angular/core';
import { RouterOutlet  } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,LoginComponent,SignUpComponent, HomeComponent,BookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
