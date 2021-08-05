import { Component, Input, OnInit } from '@angular/core';
import { fruits } from './../../data/data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  display: string[] = ['Fruits','Total'];
  rows: any[]= [];

  constructor() { }

  ngOnInit() {
    console.log(fruits);
    this.createRows(fruits);
  }

  createRows(fruits: any[]) {
    
    for (let i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
      let total: number = 0;

      this.rows.push({ data: 0, label: '' })
      this.rows[i].label = fruit.label;

      for (let y = 0; y < fruit.data.length; y++) {
        const data = fruit.data[y].value;
        total = parseInt(data) + total;
      }

      this.rows[i].data = total;
    }
  }

}
