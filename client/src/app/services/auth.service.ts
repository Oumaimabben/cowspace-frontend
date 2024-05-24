
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface RegisterResponse {
  success: boolean;
  message: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = 'http://localhost:8801/api/auth/register';

  constructor(private http: HttpClient) { }

  register(userData:any): Observable<RegisterResponse> {
    const headers = new HttpHeaders({

    });
    console.log(userData);


    return this.http.post<RegisterResponse>(this.registerUrl, userData)
  }


  private apiUrl = 'http://localhost:8801/api/auth/login';


  login(email: string, password: string): Observable<any> {

    const body = { email, password };

    return this.http.post(this.apiUrl, body);
  }

}
