import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../../app/cars/car';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';


const cars = {
  'data': [{
    vin: 'a1653d4d',
    brand: 'VW',
    year: 1998,
    color: 'White',
    action: 'print ticket'
  },
  {
    vin: 'ddeb9b10',
    brand: 'Mercedes',
    year: 1985,
    color: 'Green',
    action: 'print ticket'
  },
  {
    vin: 'd8ebe413',
    brand: 'Jaguar',
    year: 1979,
    color: 'Silver',
    action: 'print ticket'
  },
  {
    vin: 'aab227b7',
    brand: 'Audi',
    year: 1970,
    color: 'Black',
    action: 'print ticket'
  },
  {
    vin: '631f7412',
    brand: 'Volvo',
    year: 1992,
    color: 'Red',
    action: 'print ticket'
  },
  {
    vin: '7d2d22b0',
    brand: 'VW',
    year: 1993,
    color: 'Maroon',
    action: 'print ticket'
  },
  {
    vin: '50e900ca',
    brand: 'Fiat',
    year: 1964,
    color: 'Blue',
    action: 'print ticket'
  },
  {
    vin: '4bbcd603',
    brand: 'Renault',
    year: 1983,
    color: 'Maroon',
    action: 'print ticket'
  },
  {
    vin: '70214c7e',
    brand: 'Renault',
    year: 1961,
    color: 'Black',
    action: 'print ticket'
  },
  {
    vin: 'ec229a92',
    brand: 'Audi',
    year: 1984,
    color: 'Brown',
    action: 'print ticket'
  },
  {
    vin: '1083ee40',
    brand: 'VW',
    year: 1984,
    color: 'Silver',
    action: 'print ticket'
  },
  {
    vin: '6e0da3ab',
    brand: 'Volvo',
    year: 1987,
    color: 'Silver',
    action: 'print ticket'
  },
  {
    vin: '5aee636b',
    brand: 'Jaguar',
    year: 1995,
    color: 'Maroon',
    action: 'print ticket'
  },
  {
    vin: '7cc43997',
    brand: 'Jaguar',
    year: 1984,
    color: 'Orange',
    action: 'print ticket'
  },
  {
    vin: '88ec9f66',
    brand: 'Honda',
    year: 1989,
    color: 'Maroon',
    action: 'print ticket'
  },
  {
    vin: 'f5a4a5f5',
    brand: 'BMW',
    year: 1986,
    color: 'Blue',
    action: 'print ticket'
  },
  {
    vin: '15b9a5c9',
    brand: 'Mercedes',
    year: 1986,
    color: 'Orange',
    'action': 'print ticket'
  },
  {
    'vin': 'f7e18d01',
    'brand': 'Mercedes',
    'year': 1991,
    'color': 'White',
    'action': 'print ticket'
  },
  {
    'vin': 'cec593d7',
    'brand': 'VW',
    'year': 1992,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': 'd5bac4f0',
    'brand': 'Renault',
    'year': 2001,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': '56b527c8',
    'brand': 'Jaguar',
    'year': 1990,
    'color': 'Yellow',
    'action': 'print ticket'
  },
  {
    'vin': '1ac011ff',
    'brand': 'Audi',
    'year': 1966,
    'color': 'Maroon',
    'action': 'print ticket'
  },
  {
    'vin': 'fc074185',
    'brand': 'BMW',
    'year': 1962,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': '606ba663',
    'brand': 'Honda',
    'year': 1982,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': 'd05060b8',
    'brand': 'Mercedes',
    'year': 2003,
    'color': 'Silver',
    'action': 'print ticket'
  },
  {
    'vin': '46e4bbe8',
    'brand': 'Mercedes',
    'year': 1986,
    'color': 'White',
    'action': 'print ticket'
  },
  {
    'vin': 'c29da0d7',
    'brand': 'BMW',
    'year': 1983,
    'color': 'Brown',
    'action': 'print ticket'
  },
  {
    'vin': '24622f70',
    'brand': 'VW',
    'year': 1973,
    'color': 'Maroon',
    'action': 'print ticket'
  },
  {
    'vin': '7f573d2c',
    'brand': 'Mercedes',
    'year': 1991,
    'color': 'Red',
    'action': 'print ticket'
  },
  {
    'vin': 'b69e6f5c',
    'brand': 'Jaguar',
    'year': 1993,
    'color': 'Yellow',
    'action': 'print ticket'
  },
  {
    'vin': 'ead9bf1d',
    'brand': 'Fiat',
    'year': 1968,
    'color': 'Maroon',
    'action': 'print ticket'
  },
  {
    'vin': 'bc58113e',
    'brand': 'Renault',
    'year': 1981,
    'color': 'Silver',
    'action': 'print ticket'
  },
  {
    'vin': '2989d5b1',
    'brand': 'Honda',
    'year': 2006,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': 'c243e3a0',
    'brand': 'Fiat',
    'year': 1990,
    'color': 'Maroon',
    'action': 'print ticket'
  },
  {
    'vin': 'e3d3ebf3',
    'brand': 'Audi',
    'year': 1996,
    'color': 'White',
    'action': 'print ticket'
  },
  {
    'vin': '45337e7a',
    'brand': 'Mercedes',
    'year': 1982,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': '36e9cf7e',
    'brand': 'Fiat',
    'year': 2000,
    'color': 'Orange',
    'action': 'print ticket'
  },
  {
    'vin': '036bf135',
    'brand': 'Mercedes',
    'year': 1973,
    'color': 'Black',
    'action': 'print ticket'
  },
  {
    'vin': 'ad612e9f',
    'brand': 'Mercedes',
    'year': 1975,
    'color': 'Red',
    'action': 'print ticket'
  },
  {
    'vin': '97c6e1e9',
    'brand': 'Volvo',
    'year': 1967,
    'color': 'Green',
    'action': 'print ticket'
  },
  {
    'vin': 'ae962274',
    'brand': 'Volvo',
    'year': 1982,
    'color': 'Red',
    'action': 'print ticket'
  },
  {
    'vin': '81f8972a',
    'brand': 'BMW',
    'year': 2007,
    'color': 'Black',
    'action': 'print ticket'
  },
  {
    'vin': 'f8506743',
    'brand': 'Audi',
    'year': 1975,
    'color': 'Blue',
    'action': 'print ticket'
  },
  {
    'vin': '596859d1',
    'brand': 'Fiat',
    'year': 2002,
    'color': 'Green',
    'action': 'print ticket'
  },
  {
    'vin': 'd83c1d9a',
    'brand': 'Volvo',
    'year': 1972,
    'color': 'Black',
    'action': 'print ticket'
  },
  {
    'vin': '32f41550',
    'brand': 'Mercedes',
    'year': 1978,
    'color': 'Brown',
    'action': 'print ticket'
  },
  {
    'vin': 'c28cd2e4',
    'brand': 'Volvo',
    'year': 1982,
    'color': 'Silver',
    'action': 'print ticket'
  },
  {
    'vin': '80890dcc',
    'brand': 'Audi',
    'year': 1962,
    'color': 'White',
    'action': 'print ticket'
  },
  {
    'vin': '4bf1aeb5',
    'brand': 'VW',
    'year': 2000,
    'color': 'Silver',
    'action': 'print ticket'
  },
  {
    'vin': '45ca4786',
    'brand': 'BMW',
    'year': 1995,
    'color': 'Maroon',
    'action': 'print ticket'
  }
  ]
};

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getCarsMedium() {
    // return this.http.get('src/app/resources/data/cars-medium.json')
    //             .map(res => <Car[]> res.json());
    return Observable.of(cars)
      .map(data => {
        return [...data.data].slice(0, 9);
      });
  }
}
