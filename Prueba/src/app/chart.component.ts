import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  template: '<canvas id="myChart"></canvas>',
})
export class ChartComponent implements OnInit {
  @Input() data: any;

  ngOnInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: this.data,
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
