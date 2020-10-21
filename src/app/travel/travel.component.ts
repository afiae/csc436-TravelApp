import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

export class Travel {
  public originationAirport: string;
  public destinationAirport: string;
  public departureDate: Date;
  public returnDate: Date;
  public numOfTravelers: number;
  public tripCost: number;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {   }

  // tslint:disable-next-line: member-ordering
  model = new Travel();

  // tslint:disable-next-line: member-ordering
  Airports: string[]  = [
    'ORD',
    'SFO',
    'LAX',
    'CUN',
    'LGA',
    'SNA',
    'HNL',
    'ICN',
    'JFK',
    'IAH',
    'DPS',
    'KEF'
  ];

  onSubmit(f: NgForm): void{
    this.model.tripCost = 150 * this.model.numOfTravelers;
    console.log(this.model.tripCost);
  }
}

