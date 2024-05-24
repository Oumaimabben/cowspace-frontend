import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../services/room.service';
import { jwtDecode } from 'jwt-decode';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {

  room: any; // Déclarez la propriété roomNumbers
  startdate :any
fullname: any;
number: any;
findate: any;
selectedRoomId: string | null = null;
  constructor(private roomService: RoomService) {}



  id:string=""
  decodeToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  getid():any{
    const token = localStorage.getItem('token');
    const dtoken = this.decodeToken(token!)
    console.log(token)
    return dtoken.id
  }

  ngOnInit(): void {
    // Utilisez le service pour obtenir les données
    this.roomService.getRoomName().subscribe((data: any[]) => {
    this.room =data
    });
    this.id =this.getid()
    console.log(this.id)
  }

  onbook() {

    if (this.selectedRoomId !== null) {
      const reservation = {
        startTime: this.startdate,
        endTime: this.findate,
        roomId: this.selectedRoomId,
        userId : this.id
      };

      this.roomService.addReservation(reservation).subscribe(
        response => {
          console.log('Reservation successful', response);
          Swal.fire({
            icon: 'success',
            title: 'book succ',
            text: "success",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
        },
        error => {
          console.error('Error making reservation', error);
          Swal.fire({
            icon: 'error',
            title: 'book Failed',
            text: error.error.message,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });
        }
      );
    } else {
      console.error('No room selected');
    }
  }

}
