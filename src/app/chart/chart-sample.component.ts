import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";

@Component ({
  templateUrl: './chart-sample.html',
  styleUrls: ['./chart-sample.css']
})

export class ChartSampleComponent {
    public line = d3.line();
    public arc = d3.arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

    svg : any;

    OnInit() {
      this.line;
      this.arc;
  
      this.svg.append(this.arc);
    }
};
