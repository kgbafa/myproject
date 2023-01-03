import { Component } from '@angular/core';
import { User } from '../interfaces/user';

//Le selector permet de appeler ce composant home 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  etudiants: number = 322;
  dir: any = { prenom: 'Adrien' };

  user: User = { id: 1, name: 'John', email: 'john@gmail.com' };

  quantites: number[] = [12, 189, 17, 12];

  users: User[] = [
    { id: 1, name: 'John', email: 'john@gmail.com' },
    { id: 2, name: 'Jane', email: 'jane@gmail' },
    { id: 3, name: 'Simon', email: 'simon@gmail' },
    { id: 4, name: 'Johana', email: 'johana@gmail' },
  ];

  data: any[] = [{
    "id": 1,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
        "libelle": "lib1",
        "description": "desc1"
      },
      {
        "libelle": "lib1",
        "description": "desc1"
      }
    ]
  },
  {
    "id": 2,
    "name": "abc",
    "address": {
      "streetName": "cde",
      "streetId": 2
    },
    "projets": [
      {
        "libelle": "lib1",
        "description": "desc1"
      },
      {
        "libelle": "lib1",
        "description": "desc1"
      }
    ]
  }]

  afficheMessage(message: string): void {
    alert("mon message: " + message);
  }

  afficheMessage2(message: string, event:any): void {
    alert("mon message: " + message);
    event.preventDefault();
    event.stopPropagation();
  }

}
