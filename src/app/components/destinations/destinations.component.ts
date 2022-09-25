import { Component, OnInit } from '@angular/core';

interface Destination {
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

  isDisabled: Boolean = false;
  handleClick() {
    this.isDisabled = true;
  };


  constructor() { }

  ngOnInit(): void {
  }

}
