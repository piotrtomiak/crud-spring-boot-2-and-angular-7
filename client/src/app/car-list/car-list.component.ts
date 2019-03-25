import {Component, OnInit} from '@angular/core';
import {GiphyService} from '../shared/giphy/giphy.service';
import {CarService} from '../shared/car/car.service';
import {Car} from "../model/car";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Array<Car>;

  constructor(private carService: CarService, private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data;
      for (const car of this.cars) {
        this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
      }
    });
  }
}
