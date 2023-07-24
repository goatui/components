import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';
import { addDays, addMonths, format } from 'date-fns';
import { CalendarEvent } from './CalendarEvent';

/**
 * @name Calendar
 * @description The calendar component is used to display information in a daily, weekly, monthly, or category view.
 * @category Data Display
 * @tags calendar
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

  @Prop() availableViews: any = [
    { label: 'Day', value: 'day', type: 'column', days: 1 },
    {
      label: 'Week',
      value: 'week',
      type: 'column',
      days: 7,
    },
    {
      label: 'Month',
      value: 'month',
      type: 'month',
    },
  ];

  @Prop() view: string = 'week';

  @Prop() eventClickable: boolean = true;

  /**
   * Show loader.
   */
  @Prop() showLoader: boolean = false;

  @Prop() timezone;

  currentTime;
  currentView: any;

  @Prop({ mutable: true }) contextDate;

  @Event({ eventName: 'goat:calendar-event-click' }) goatCalendarEventClick: EventEmitter;

  @Listen('goat:column-view-date-click')
  columnViewDateClick(evt) {
    this.view = 'day';
    this.contextDate = evt.detail.date;
  }

  @Listen('goat:column-view-event-click')
  columnViewEventClick(evt) {
    this.goatCalendarEventClick.emit(evt.detail.event);
  }

  @Listen('goat:month-view-event-click')
  monthViewEventClick(evt) {
    this.goatCalendarEventClick.emit(evt.detail.event);
  }

  async componentWillLoad() {
    if (this.timezone) {
      this.currentTime = new Date(new Date().toLocaleString('en', { timeZone: this.timezone }));
    } else {
      this.currentTime = new Date();
    }
    if (!this.contextDate) {
      this.contextDate = this.currentTime;
    }
  }

  async componentWillRender() {
    this.currentView = this.availableViews.find(view => view.value === this.view);
  }

  previous() {
    if (this.currentView.days) {
      this.contextDate = addDays(this.contextDate, -1 * this.currentView.days);
    } else if (this.currentView.type === 'month') {
      this.contextDate = addMonths(this.contextDate, -1);
    }
  }

  next() {
    if (this.currentView.days) {
      this.contextDate = addDays(this.contextDate, this.currentView.days);
    } else if (this.currentView.type === 'month') {
      this.contextDate = addMonths(this.contextDate, 1);
    }
  }

  renderHeader() {
    return (
      <div class="calendar-header-classic">
        <div class="header-left">
          <goat-button variant="outline" size="sm" block class="color-secondary" onClick={() => (this.contextDate = this.currentTime)}>
            Today
          </goat-button>
          <goat-button
            variant="ghost"
            size="sm"
            class="color-secondary"
            icon="chevron--left"
            onClick={() => this.previous()}
          ></goat-button>
          <goat-button
            variant="ghost"
            size="sm"
            class="color-secondary"
            icon="chevron--right"
            onClick={() => this.next()}
          ></goat-button>
          <div class="title">{format(this.contextDate, 'MMMM d, yyyy')}</div>
        </div>
        <div class="header-right">
          <goat-select
            size="sm"
            positions={'bottom-left'}
            value={this.view}
            items={this.availableViews.map(view => {
              return {
                label: view.label,
                value: view.value,
              };
            })}
            onGoat:change={event => {
              this.view = event.detail.value;
            }}
          ></goat-select>
        </div>
      </div>
    );
  }

  renderCalendarView() {
    if (!this.currentView) return 'Invalid view';

    const events = this.events.map(event => {
      return new CalendarEvent(event.start, event.end, event.title, event);
    });

    if (this.currentView.type === 'column') {
      return (
        <goat-calendar-column-view
          view={this.currentView.value}
          days={this.currentView.days}
          currentTime={this.currentTime}
          contextDate={this.contextDate}
          eventClickable={this.eventClickable}
          events={events}
        />
      );
    } else if (this.currentView.type === 'month') {
      return <goat-calendar-month-view currentTime={this.currentTime} contextDate={this.contextDate} eventClickable={this.eventClickable} events={events} />;
    }
  }

  render() {
    return (
      <Host>
        <div class="calendar">
          <div class="calendar-header">{this.renderHeader()}</div>
          <div class="calendar-body">
            <div class="view-container">{this.renderCalendarView()}</div>
            <div class="contextual-panel"></div>
          </div>
        </div>
      </Host>
    );
  }
}
