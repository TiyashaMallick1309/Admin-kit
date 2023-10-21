import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
cards=[
  {
    title:"Sales",
    icon:"fa-truck",
    value:"2.382",
    percent: "-3.65%",
    text:"Since last week",
    theme1:"primary", 
    theme2:"danger"
  },
  {
    title:"Earnings",
    icon:"fa-dollar-sign",
    value:"$21.300",
    percent: "6.65%",
    text:"Since last week",
    theme1:"primary", 
    theme2:"success"
  },
  {
    title:"Visitors",
    icon:"fa-users",
    value:"14.212",
    percent: "5.25%",
    text:"Since last week",
    theme1:"primary", 
    theme2:"success"
  },
  {
    title:"Orders",
    icon:"fa-shopping-cart",
    value:"64",
    percent: "-2.25%",
    text:"Since last week",
    theme1:"primary", 
    theme2:"danger"
  },
];
}