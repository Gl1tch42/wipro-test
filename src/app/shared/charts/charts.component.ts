import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { fruits } from './../../data/data';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  data: any[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = [];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [];

  constructor() {
  }

  ngOnInit() {
    console.log(fruits);
    this.createLineChart(fruits);
    this.createlineChartData(fruits);
  }

  createLineChart(fruits: any[]) {
    for (let index = 0; index < fruits[0].data.length; index++) {
      const element = fruits[0].data[index];
      this.lineChartLabels.push(element.month);
    }
  }

  createlineChartData(fruits: any[]) {

    for (let i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
      this.lineChartData.push({ data: [], label: '' })
      this.lineChartData[i].label = fruit.label;

      for (let y = 0; y < fruit.data.length; y++) {
        const data = fruit.data[y].value;
        this.lineChartData[i].data.push(data);
      }
    }
  }

}
