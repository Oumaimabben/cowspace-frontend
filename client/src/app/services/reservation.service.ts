// reservation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl = 'http://localhost:8801/api/reservations';

  constructor(private http: HttpClient) { }

  createReservation(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, data);
  }
}
