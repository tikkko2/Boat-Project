import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { SharedService } from 'src/app/shared/shared.service';

// export interface Boat {
//   id: number,
//   name: string,
//   city: string,
//   country: string,
//   img: string,
//   quantity: number
// }

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.scss'],
})
export class BoatsComponent implements OnInit {
   Boats = [
    {
      id: 1,
      name: 'Delphia 47',
      city: 'Gdansk',
      country: 'Poland',
      img: './assets/photo1.png',
      quantity: 8,
      amount: 580,
    },
    {
      id: 2,
      name: 'Sense 55',
      city: 'Portofino',
      country: 'Italy',
      img: './assets/photo2.png',
      quantity: 12,
      amount: 950,
    },
    {
      id: 3,
      name: 'Delphia 47',
      city: 'Palma de Mallorca',
      country: 'Spain',
      img: './assets/photo3.png',
      quantity: 10,
      amount: 820,
    },
    {
      id: 4,
      name: 'Cruisier 41S',
      city: 'Lisbon',
      country: 'Portugal',
      img: './assets/photo4.png',
      quantity: 8,
      amount: 400,
    },
    {
      id: 5,
      name: 'GEMI 1S',
      city: 'Honolulu',
      country: 'Hawaii',
      img: './assets/honolulu-hawaii.webp',
      quantity: 14,
      amount: 540,
    },
    {
      id: 6,
      name: 'NAVI 212',
      city: 'Miami',
      country: 'Florida',
      img: './assets/miami-florida.webp',
      quantity: 4,
      amount: 390,
    },
    {
      id: 7,
      name: 'IACHTA S',
      city: 'Venice',
      country: 'Italy',
      img: './assets/venice-italy.webp',
      quantity: 6,
      amount: 600,
    },
    {
      id: 8,
      name: 'KRUIZI 433',
      city: 'Oslo',
      country: 'Norway',
      img: './assets/oslo-norway.webp',
      quantity: 18,
      amount: 990,
    },
  ];

  
  
  constructor(private route: ActivatedRoute) {}
  // constructor(private shared: SharedService) {}


  ngOnInit(): void {
    
  }
}
