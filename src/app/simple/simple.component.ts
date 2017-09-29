import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Car } from '../cars/car';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    debugger;
    console.log('changes on simple car', changes.car.currentValue);
  }


  change(car) {
    car.brand = 'hello';
  }
}
