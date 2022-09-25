import { Component, OnInit } from '@angular/core';

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
      destination: [
        {
          city: 'Gdansk',
          counry: 'Poland',
        },
      ],

      img: './assets/photo1.png',
      quantity: 8,
    },
    {
      id: 2,
      name: 'Sense 55',
      city: 'Portofino',
      counry: 'Italy',
      img: './assets/photo2.png',
      quantity: 12,
    },
    {
      id: 3,
      name: 'Delphia 47',
      city: 'Palma de Mallorca',
      counry: 'Spain',
      img: './assets/photo3.png',
      quantity: 10,
    },
    {
      id: 4,
      name: 'Cruisier 41S',
      city: 'Lisbon',
      counry: 'Portugal',
      img: './assets/photo4.png',
      quantity: 8,
    },
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
