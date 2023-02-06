import { Component, ComponentInterface, Element, h, Host, Prop } from '@stencil/core';
import { addDays, format } from 'date-fns';
import {CalendarEvent} from './CalendarEvent';


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

  @Prop() timezone;


  currentTime;
  currentView: any;

  @Prop({ mutable: true }) contextDate;


  async componentWillLoad() {

    console.log(this.view);
    if (this.timezone) {
      this.currentTime = new Date(new Date().toLocaleString('en', { timeZone: this.timezone }));
    } else {
      this.currentTime = new Date();
    }

    if (!this.contextDate) {
      this.contextDate = this.currentTime;
    }

  }


  renderCalendarView() {
    const events = [];
    this.events.forEach((event) => {
      events.push(new CalendarEvent(event.start, event.end, event.title, event));
    });


    this.currentView = this.availableViews.find((view) => {
      return view.value === this.view;
    });
    if (!this.currentView)
      return 'Invalid view';
    if (this.currentView.type === 'column') {
      return <goat-calendar-column-view
        view={this.currentView.value}
        days={this.currentView.days}
        currentTime={this.currentTime}
        contextDate={this.contextDate}
        events={events}
      />;
    }
  }

  renderHeader() {
    return <div class='calendar-header-classic'>
      <div class='header-left'>
        <goat-button variant='outline' size='sm' class='color-secondary' onClick={() => {
          this.contextDate = this.currentTime;
        }}>Today</goat-button>
        <goat-button variant='ghost' size='sm' class='color-secondary' icon='chevron-left' onClick={() => {
          this.contextDate = addDays(this.contextDate, -7);
        }}></goat-button>
        <goat-button variant='ghost' size='sm' class='color-secondary' icon='chevron-right' onClick={() => {
          this.contextDate = addDays(this.contextDate, 7);
        }}></goat-button>

        <div class='title'>
          {format(this.contextDate, 'MMMM d, yyyy')}
        </div>
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
