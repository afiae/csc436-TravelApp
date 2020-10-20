import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

export class Travel {
  public name: string;
  public originationAirport: string;
  public destinationAirport: string;
  public departureDate: Date;
  public returnDate: Date;
  public numOfTravelers: number;
  public pricePerTicket: number;
  public tripCost: number;
}

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit{

  constructor() { }

  ngOnInit() {  }

  model = new Travel();

  Airports: string[] = [
    'ORD',
    'JFK',
    'SFO',
    'LAX',
    'ATL',
    'TPA',
    'HNL'
  ];

  onSubmit(f: NgForm): void{
    this.model.tripCost = f.numOfTravelers * this.pricePerTicket;
    console.log(this.tripCost);
  }
}

