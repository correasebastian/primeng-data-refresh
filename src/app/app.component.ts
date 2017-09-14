import { Component, OnInit, ViewChild } from '@angular/core';
import { Car } from './cars/car';
import { CarService } from './cars/carservice';

import { ConfirmationService, DataTable } from 'primeng/primeng';

class PrimeCar implements Car {
  constructor(public vin?, public year?, public brand?, public color?) { }
}

interface Page {
  first: number;
  rows: number;
}

interface Sort {
  field: string;
  order: 1 | -1;
  multisortmeta: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  displayDialog: boolean;
  car: Car = new PrimeCar();
  selectedCar: Car;
  newCar: boolean;
  cars: Car[];
  private currentPage: Page = {
    first: 0,
    rows: 10
  };
  private currentSort: Sort = {
    field: 'brand',
    order: 1,
    multisortmeta: null
  };

  @ViewChild(DataTable) dataTable: DataTable;

  constructor(private carService: CarService) { }

  rowTrackBy(index: number, row: any) {
    return row.vin;
  }
  ngOnInit() {
    this.getCars();
  }

  private getCars(old?) {
    this.carService.getCarsMedium()
      .subscribe(cars => {


        // this.cars = cars;
        if (old) {

          this.magic(cars);
          //   //
          //   setTimeout(() => {
          //     this.dataTable.onPageChange({ first: 30, rows: 10 });

          //     // pageination is calling the updateDataToRender
          //     // this.dataTable.updateDataToRender(this.dataTable.value);
          //     // this.dataTable.paginate(this.gridOptions);
          //     // this.blocked = false;
          // }, 0);
        } else {
          this.cars = cars;
        }

      });
  }

  magic(cars: Car[]) {

    // yo no llamaria al servicio de cars again, solo a actualizar uno y ya

    const [currentSelectedCar] = this.dataTable.expandedRows;
    const newSelectedCar = Object.assign(currentSelectedCar, { color: 'hello world' });
    const index = this.cars.indexOf(currentSelectedCar);
    const newCars =  [
      ...this.cars.slice(0, index),
      newSelectedCar,
      ...this.cars.slice(index + 1)
    ];
    this.dataTable.expandedRows = [newSelectedCar];
    this.dataTable.value = newCars;
    console.table(cars);
    // setTimeout(() => {
    // this.dataTable.sortField = 'year';
    // this.dataTable.sortOrder = -1;
    this.dataTable.sortSingle();
    this.dataTable.onPageChange({ first: this.currentPage.first, rows: this.currentPage.rows });
  }

  showDialogToAdd() {
    this.newCar = true;
    this.car = new PrimeCar();
    this.displayDialog = true;
  }

  save() {
    if (this.newCar) {

      this.cars.push(this.car);
    } else {
      this.cars[this.findSelectedCarIndex()] = this.car;

    }

    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    this.cars.splice(this.findSelectedCarIndex(), 1);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    const car = new PrimeCar();
    for (const prop in c) {
      if (c.hasOwnProperty(prop)) {
        car[prop] = c[prop];
        // code here
      }
    }
    return car;
  }

  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }

  selectCar(car: Car) {
    console.log(car);
  }

  onRowExpand(event) {
    console.log('****** on row expanded');
    console.log(event);
    const car: Car = event.data;
    // this is going to simulate the call to the backend, and will add the order details
    car.orderDetail = Math.floor((Math.random() * 100) + 1);
  }

  get expandedRows() {
    return this.dataTable.expandedRows;
  }

  see() {
    const z = this.dataTable;
    this.getCars(true);

    // setTimeout(() => {
    //   this.dataTable.sortField = 'year';
    //   this.dataTable.sortOrder = -1;
    //   this.dataTable.sortSingle();
    //   // this.dataTable.paginate(this.gridOptions);
    //   // this.blocked = false;
    // }, 0);
  }

  justToRun() {
    console.log('just ti run');
    debugger;
    const z = this.dataTable;
  }

  onPage(event) {
    console.log('paginator');
    console.log(event);
    this.currentPage = event;
  }

  onSort(event) {
    console.log('sort');
    this.currentSort = event;
    console.log(event);
  }
}
