import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards=[
    {title:"Sales", value:2.382,percent:-3.65 ,theme:"text-danger",icon:"truck"},
    {title:"Earnings",value:21.300,percent:6.65,theme:"text-success",icon:"dollar-sign"},
    {title:"Visitors",value:14.212,percent:5.25,theme:"text-success",icon:"users"},
    {title:"Orders",value:64,percent:-2.25,theme:"text-danger",icon:"shopping-cart"}
  ];
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan','Feb','Mar','Apr',
      'May','Jun','Jul','Aug',
      'Sep','Oct','Nov','Dec'
    ],
    datasets: [
      {
        data: [ 2115, 1562, 1584, 1892, 1587, 1923, 2566,2448,2805,3438,2917,3327 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'blue',
        backgroundColor: '#f5fcff'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = false;
}
