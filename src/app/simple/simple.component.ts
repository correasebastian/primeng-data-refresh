import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Car } from '../cars/car';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit, OnChanges {

  @Input() car: Car;
  constructor() { }

  ngOnInit() {
    console.log('init', this.car);
    // we can call the service to get the details here or in ngOnChanges
    // figure out wich is a better option
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }


  change(car) {
    car.brand = 'hello';
  }
}
