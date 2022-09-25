import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  Boats: any = [
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
  
  id:any;


  constructor(private route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.Boats = this.Boats.find((el:any) => {
      return el.id == this.id;
    })
  }

}
