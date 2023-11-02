import { Component, ComponentInterface, h, Host } from '@stencil/core';
import loadGoogleCharts from '../../../3d-party/google-charts';

/**
 * @name ChartDoughnut
 * @description Use tags to label, categorize, or organize items using keywords that describe them.
 * @category Up coming
 * @tag controls
 * @example <goat-chart-doughnut class="color-red"></goat-chart-doughnut>
 */
@Component({
  tag: 'goat-chart-doughnut',
  styleUrl: 'chart-doughnut.scss',
  shadow: true,
})
export class ChartDoughnut implements ComponentInterface {
  private nativeElement?: HTMLElement;

  async componentWillLoad() {
    if (!window['google']) {
      await loadGoogleCharts();
    }
  }

  initializeChart() {
    const that = this;
    const google = window['google'];
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7],
      ]);

      var options = {
        pieHole: 0.4,
        slices: {
          0: { color: '#4589ff' },
          1: { color: 'transparent' },
        },
        legend: 'none',
      };

      var chart = new google.visualization.PieChart(that.nativeElement);
      chart.draw(data, options);
    }
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
