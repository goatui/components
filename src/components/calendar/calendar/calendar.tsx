import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import ColumnView from './views/ColumnView';


/**
 * @name Calendar
 * @description The calendar component is used to display information in a daily, weekly, monthly, or category view.
 * @img /assets/img/calendar.png
 */
@Component({
  tag: 'goat-calendar',
  styleUrl: 'calendar.scss',
  shadow: true,
})
export class Calendar implements ComponentInterface {

  @Element() elm!: HTMLElement;

  @Prop() events: any[] = [];

  @Prop() availableViews: any = [{ label: 'Day', value: 'day', type: 'column', days: 1 }, {
    label: 'Week',
    value: 'week',
    type: 'column',
    days: 7,
  }, {
    label: 'Month',
    value: 'month',
    type: 'month',
  }];

  @Prop() view: string = 'week';

  /**
   * Show loader.
   */
  @Prop() showLoader: boolean = false;

  @Prop() timezone = 'Asia/Kolkata';


  currentTime = new Date(new Date().toLocaleString('en', { timeZone: this.timezone }));
  dateRange: any;
  currentView: any;

  @Prop() contextDate = this.currentTime;


  async componentWillLoad() {

    console.log(this.view);

  }


  renderCalendarView() {
    this.currentView = this.availableViews.find((view) => {
      return view.value === this.view;
    });
    if (!this.currentView)
      return 'Invalid view';
    if (this.currentView.type === 'column') {
      return new ColumnView(this).render();
    }
  }

  renderHeader() {
    return <div class='calendar-header-classic'>
      <div class='header-left'>
        <goat-button variant='outline' class='color-secondary'>Today</goat-button>
        <goat-button variant='ghost' class='color-secondary' icon='chevron-left'></goat-button>
        <goat-button variant='ghost' class='color-secondary' icon='chevron-right'></goat-button>
      </div>
      <div class='header-right'>
        <goat-select
          size='sm'
          positions={'bottom-left'}
          value={this.view}
          items={this.availableViews.map((view) => {
            return {
              'label': view.label,
              'value': view.value,
            };
          })}
          onGoat:change={(event) => {
            this.view = event.detail.value;
          }}
        ></goat-select>
      </div>
    </div>;
  }


  render() {

    return (
      <Host>
        <div class='calendar'>
          <div class='calendar-header'>
            {this.renderHeader()}
          </div>
          <div class='calendar-body'>
            <div class='view-container'>
              {this.renderCalendarView()}
            </div>
            <div class='contextual-panel'></div>
          </div>
        </div>
      </Host>
    );
  }

}
