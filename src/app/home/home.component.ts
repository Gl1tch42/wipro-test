import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  fruits: any[] = [
    {
      "name":"Apple",
      "sales": [
        {
          "month":"1",
          "value":"12"
        },
        {
          "month":"2",
          "value":"20"
        },
        {
          "month":"3",
          "value":"22"
        },
      ]
    },

    {
      "name":"Avocado",
      "sales": [
        {
          "month":"1",
          "value":"15"
        },
        {
          "month":"2",
          "value":"12"
        },
        {
          "month":"3",
          "value":"20"
        },
      ]
    },

    {
      "name":"Banana",
      "sales": [
        {
          "month":"1",
          "value":"13"
        },
        {
          "month":"2",
          "value":"16"
        },
        {
          "month":"3",
          "value":"9"
        },
      ]
    },
    {
      "name":"Blueberries",
      "sales": [
        {
          "month":"1",
          "value":"17"
        },
        {
          "month":"2",
          "value":"12"
        },
        {
          "month":"3",
          "value":"8"
        },
      ]
    },
    {
      "name":"Kiwi",
      "sales": [
        {
          "month":"1",
          "value":"8"
        },
        {
          "month":"2",
          "value":"9"
        },
        {
          "month":"3",
          "value":"12"
        },
      ]
    },

    {
      "name":"Orange",
      "sales": [
        {
          "month":"1",
          "value":"11"
        },
        {
          "month":"2",
          "value":"6"
        },
        {
          "month":"3",
          "value":"10"
        },
      ]
    },
  ]

  ngOnInit() {
  }

}
