// src/app/services/room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = 'http://localhost:8801/api/rooms/all';

  constructor(private http: HttpClient) {}

  getRoomName(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addReservation(reservation: any): Observable<any> {
    const url = 'http://localhost:8801/api/reservation/';
    return this.http.post(url, reservation);
  }
}
