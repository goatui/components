import { Component, ComponentInterface, h, Host, Prop, Watch } from '@stencil/core';
import loadD3JS from '../../../3d-party/d3js';
import { debounce } from '../../../utils/utils';

/**
 * @name ChartDoughnut
 * @description A doughnut chart is a circular chart with a blank center. The chart is similar to a pie chart with the center cut out. The area in the center can be used to display information.
 * @category Up coming
 * @tag controls
 * @img /assets/img/chart-doughnut.png
 * @imgDark /assets/img/chart-doughnut-dark.png
 */
@Component({
  tag: 'goat-chart-doughnut',
  styleUrl: 'chart-doughnut.scss',
  shadow: true,
})
export class ChartDoughnut implements ComponentInterface {
  private nativeElement?: HTMLElement;

  @Prop({ reflect: true }) width: number = 0;
  @Prop({ reflect: true }) height: number = 0;
  @Prop({ reflect: true }) margin: number = 10;

  @Prop() data: any = [];

  svg: any;

  async componentWillLoad() {
    if (!window['d3']) {
      await loadD3JS();
    }
  }

  @Watch('width')
  @Watch('height')
  @Watch('margin')
  @Watch('data')
  async handlePropChange(_newValue: string, _oldValue: string, _propName: string) {
    this.updateChart();
  }

  getPieData() {
    const d3 = window['d3'];

    // Compute the position of each group on the pie:
    const pie = d3
      .pie()
      .sort(null) // Do not sort group by size
      .value(d => d.value);
    return pie(this.data);
  }

  updateChart = debounce(() => {
    const d3 = window['d3'];

    const radius = this.getRadius();

    // The arc generator
    const arc = d3
      .arc()
      .innerRadius(radius * 0.5) // This is the size of the donut hole
      .outerRadius(radius * 0.8);

    const data_ready = this.getPieData();

    d3.select(this.nativeElement.querySelector('svg')).attr('width', this.width).attr('height', this.height);
    this.svg.attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    const path = this.svg.selectAll('path').data(data_ready);
    path.transition().duration(500).attr('d', arc);
  }, 100);

  getRadius() {
    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    return Math.min(this.width, this.height) / 2 - this.margin;
  }

  getArc() {
    const d3 = window['d3'];

    const radius = this.getRadius();

    // The arc generator
    return d3
      .arc()
      .innerRadius(radius * 0.5) // This is the size of the donut hole
      .outerRadius(radius * 0.8);
  }

  initializeChart() {
    // const that = this;
    const d3 = window['d3'];

    // append the svg object to the div called 'my_dataviz'
    this.svg = d3
      .select(this.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    const pieData = this.getPieData();
    // set the color scale
    const color = d3
      .scaleOrdinal()
      .domain(this.data.map(d => d.name))
      .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), this.data.length).reverse());

    const svg = this.svg;
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    this.svg
      .selectAll('path')
      .data(pieData)
      .join('path')
      .attr('d', this.getArc())
      .attr('fill', d => {
        return color(d.data.label);
      })
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .attr('class', 'arc')
      .on('mouseover', function () {
        var current = this;
        current.setAttribute('tooltip-target', 'tooltip');
        var others = svg.selectAll('.arc').filter(function (_el) {
          return this != current;
        });
        others.style('opacity', 0.3);
      })
      .on('mouseout', () => {
        this.svg.selectAll('.arc').style('opacity', 1);
      });

    // Another arc that won't be drawn. Just for labels positioning
    /* const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);*/

    // Add the polylines between chart and labels:
    /*svg
      .selectAll('allPolylines')
      .data(data_ready)
      .join('polyline')
      .attr('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', 1)
      .attr('points', function (d) {
        const posA = arc.centroid(d); // line insertion in the slice
        const posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
        const posC = outerArc.centroid(d); // Label position = almost the same as posB
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC];
      });

    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .join('text')
      .text(d => d.data[0])
      .attr('transform', function (d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style('text-anchor', function (d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? 'start' : 'end';
      });*/
  }

  componentDidLoad() {
    setTimeout(() => this.initializeChart(), 1000);
  }

  render() {
    return (
      <Host>
        <div class={'chart-container'} ref={el => (this.nativeElement = el as HTMLElement)}></div>
      </Host>
    );
  }
}
