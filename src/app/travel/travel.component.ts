import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent implements OnInit{
  departureDate: Date;
  returnDate: Date;
  numOfTravelers = 1;
  tripCost = 0;
  origin = '';
  destination = '';

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
  ];

  constructor() { }

  ngOnInit(): void {   }

  calculatePrice(numOfTravelers): void {
    this.tripCost = 150 * numOfTravelers;
  }
}

