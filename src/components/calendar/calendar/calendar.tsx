import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import { calculateWeekRange } from './utils';
import { addDays, differenceInDays, endOfDay, format, isEqual, startOfDay } from 'date-fns';



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


  renderHeaderColumns() {
    const columns = [];
    for (let i = new Date(this.dateRange.startDay); differenceInDays(startOfDay(this.dateRange.endDay), i) >= 0; i = addDays(i, 1)) {
      const cls = ['column'];
      if (isEqual(startOfDay(i), startOfDay(this.currentTime)))
        cls.push('active');
      columns.push(<div class={cls.join(' ')}>
        <div class='date' onClick={() => {
          this.contextDate = i;
          this.view = 'day';
        }}>
          {format(i, 'dd')}
        </div>
        <div class='day'>
          {format(i, 'E')}
        </div>
      </div>);
    }
    return columns;
  }

  renderBodyColumns() {

  }

  renderColumnView() {
    if (this.currentView.value === 'week') {
      this.dateRange = calculateWeekRange(this.contextDate, 1);
    } else {
      this.dateRange.startDay = startOfDay(this.contextDate);
      this.dateRange.endDay = endOfDay(addDays(this.contextDate, this.currentView.days - 1));
    }


    return <div class='calendar-column-view'>
      <div class='view-header'>
        <div class='scale'>

        </div>
        <div class='columns'>
          {this.renderHeaderColumns()}
        </div>
        <div class='scrollbar'>

        </div>
      </div>
      <div class='view-body'>
        <div class='scale'>

        </div>
        <div class='columns'>
          {this.renderBodyColumns()}
        </div>
        <div class='scrollbar'>

        </div>
      </div>
    </div>;
  }

  renderCalendarView() {
    this.currentView = this.availableViews.find((view) => {
      return view.value === this.view;
    });
    if (!this.currentView)
      return 'Invalid view';
    if (this.currentView.type === 'column') {
      return this.renderColumnView();
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
            <div class='contextual-panel'>
              contextual panel
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
