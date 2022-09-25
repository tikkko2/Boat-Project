import { Component, OnInit } from '@angular/core';
// import { SharedService } from 'src/app/shared/shared.service';


export interface Destination {
  id: number;
  boats: any;
  img: string;
  city: string;
  country: string;
}

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {
  Destinations: Destination[] = [
    {
      id: 1,
      boats: [],
      img: '../assets/figueira.png',
      city: 'Figueira da Foz',
      country: 'Portugal'
    },
    {
      id: 2,
      boats: [],
      img: '../assets/ibiza.png',
      city: 'Ibiza',
      country: 'Spain'
    },
    {
      id: 3,
      boats: [],
      img: '../assets/palma.png',
      city: 'Palma de Mallorca',
      country: 'Spain'
    },
    {
      id: 4,
      boats: [],
      img: '../assets/portofino.png',
      city: 'Portofino',
      country: 'Italy'
    },
    {
      id: 5,
      boats: [],
      img: '../assets/port.png',
      city: 'Port Hercules',
      country: 'Monaco'
    }
  ];

  moreDestinations = [
    {
      id: 6,
      boats: [],
      img: '../assets/helsinki-finland.webp',
      city: 'Helsinki',
      country: 'Finland'
    },
    {
      id: 7,
      boats: [],
      img: '../assets/venice-italy.webp',
      city: 'Venice',
      country: 'Italy'
    },
    {
      id: 8,
      boats: [],
      img: '../assets/palma.png',
      city: 'Palma de Mallorca',
      country: 'Spain'
    },
    {
      id: 9,
      boats: [],
      img: '../assets/portofino.png',
      city: 'Portofino',
      country: 'Italy'
    },
    {
      id: 10,
      boats: [],
      img: '../assets/port.png',
      city: 'Port Hercules',
      country: 'Monaco'
    }

  ];

  Boats = [
    {
      id: 1,
      name: 'Delphia 47',
      city: 'Port Hercules',
      country: 'Monaco',
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
      city: 'Figueira da Foz',
      country: 'Portugal',
      img: './assets/photo4.png',
      quantity: 8,
      amount: 400,
    },
    {
      id: 5,
      name: 'GEMI 1S',
      city: 'Figueira da Foz',
      country: 'Portugal',
      img: './assets/honolulu-hawaii.webp',
      quantity: 14,
      amount: 540,
    },
    {
      id: 6,
      name: 'NAVI 212',
      city: 'Ibiza',
      country: 'Spain',
      img: './assets/miami-florida.webp',
      quantity: 4,
      amount: 390,
    },
    {
      id: 7,
      name: 'IACHTA S',
      city: 'Portofino',
      country: 'Italy',
      img: './assets/venice-italy.webp',
      quantity: 6,
      amount: 600,
    },
    {
      id: 8,
      name: 'KRUIZI 433',
      city: 'Ibiza',
      country: 'Spain',
      img: './assets/oslo-norway.webp',
      quantity: 18,
      amount: 990,
    },
  ];

  isDisabled: Boolean = false;
  handleClick() {
    this.isDisabled = true;
  };

  constructor() { }
  // constructor(private shared: SharedService) { }

  ngOnInit(): void {

    for (let i = 0; i < this.Boats.length; i++) {
      const boat = this.Boats[i];
      for (let j = 0; j < this.Destinations.length; j++) {
        const destination = this.Destinations[j];
        if (boat.city === destination.city && boat.country === destination.country) {
          destination.boats.length += 1;
        }
      }
    }
  }

}
