import { Component, ComponentInterface, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { addDays, addHours, differenceInDays, endOfDay, format, startOfDay } from 'date-fns';
import MonthEventManager from './MonthEventManager';
import { BaseEvent } from '../event-management/BaseEvent';
import { calculateMonthRange } from '../utils';

@Component({
  tag: 'goat-calendar-month-view',
  styleUrl: 'month-view.scss',
  shadow: true,
})
export class CalendarMonthView implements ComponentInterface {
  @Element() elm!: HTMLElement;

  @Prop() events: any[] = [];

  @Prop() eventClickable: boolean = true;

  @Prop() currentTime: Date;

  @Prop() contextDate: Date;

  dateRange: any;

  weekDayEvents: any = [];

  @Event({ eventName: 'goat:month-view-date-click' }) goatMonthViewDateClick: EventEmitter;

  @Event({ eventName: 'goat:month-view-event-click' }) goatMonthViewEventClick: EventEmitter;

  async componentWillRender() {
    this.dateRange = calculateMonthRange(this.contextDate, 1 /* monday */);
    this.weekDayEvents = [];
    for (let i = new Date(this.dateRange.startDate), j = 0; j < 5; i = addDays(i, 7), j++) {
      const manager = new MonthEventManager();
      manager.addEvents(
        this.events.filter(event => {
          return event.isOverlapping(new BaseEvent(startOfDay(i), endOfDay(addDays(i, 6))));
        }),
      );
      manager.process();
      this.weekDayEvents.push(manager.columns);
    }
  }

  async componentDidLoad() {
    const viewBodyHeight = this.elm.shadowRoot.querySelector('.view-body').scrollHeight;
    this.elm.shadowRoot.querySelector('.view-body').scroll({
      top: (this.getTimePercent(this.currentTime) / 100) * viewBodyHeight - 150,
    });
  }

  renderHeader() {
    const columns = [];
    for (let i = new Date(this.dateRange.startDate), j = 0; j < 7; i = addDays(i, 1), j++) {
      const cls = ['column'];
      columns.push(
        <div class={cls.join(' ')}>
          <div class="column-content">
            <div class="day">{format(i, 'EEEE')}</div>
          </div>
        </div>,
      );
    }
    return columns;
  }

  renderMultiDayBackground(startDate) {
    const columns = [];
    for (let i = new Date(startDate), j = 0; j < 7; i = addDays(i, 1), j++) {
      const cls = ['column'];
      const diff = differenceInDays(startOfDay(i), startOfDay(this.currentTime));
      if (diff === 0) cls.push('today');
      else if (diff < 0) cls.push('past');
      else if (diff < 0) cls.push('future');
      columns.push(<div class={cls.join(' ')}>
        <div class="column-content">
<div class="day">{format(i, 'd')}</div>
        </div>
      </div>);
    }
    return columns;
  }

  renderScale() {
    const rows = [];
    for (let i = 0; i < 48; i++) {
      // @TODO: parameterize number of column, currently rendering 24 hours
      const cls = ['row'];
      if (i % 2) cls.push('hour');
      const startTime = startOfDay(new Date());
      const row = (
        <div class={cls.join(' ')}>
          {(() => {
            if (i % 2 == 0 && i) {
              return <div class="time">{format(addHours(startTime, i / 2), 'hh a')}</div>;
            }
          })()}
        </div>
      );
      rows.push(row);
    }
    return <div class="background">{rows}</div>;
  }

  renderEvents() {
    return this.weekDayEvents.map((eventDay, index) => {
      return (
        <div class="multi-day-section">
          <div class="multi-day-body-scroll">
            <div class="multi-day-background">
              <div class="columns">{this.renderMultiDayBackground(addDays(this.dateRange.startDate, index * 7))}</div>
            </div>
            <div class="multi-events">
              <div class="row-content">
                {eventDay.map(nodes => {
                  return (
                    <div class="row">
                      {nodes.map(node => {
                        const cls = ['event'];
                        if (this.eventClickable) cls.push('clickable');
                        return (
                          <div
                            class={cls.join(' ')}
                            onClick={() => {
                              if (this.eventClickable) {
                                this.goatMonthViewEventClick.emit({ event: node.data });
                              }
                            }}
                            style={{
                              left: `${this.getDatePercent(node.start, { startDate: addDays(this.dateRange.startDate, index * 7) })}%`,
                              width: `${
                                this.getDatePercent(addDays(node.end, 1), { startDate: addDays(this.dateRange.startDate, index * 7) }) -
                                this.getDatePercent(node.start, { startDate: addDays(this.dateRange.startDate, index * 7) })
                              }%`,
                            }}
                          >
                            <div class="event-title">{node.title || '(no title)'}</div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
                <div class="row-spacer"></div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  getDatePercent(date, dateRange) {
    const currentDay = differenceInDays(startOfDay(date), dateRange.startDate);
    const percent = (currentDay / 7) * 100;
    if (percent < 0) return 0;
    if (percent > 100) return 100;
    return percent;
  }

  getTimePercent(date, forDay?) {
    if (!forDay) forDay = date;
    const startDate = startOfDay(forDay);
    const endDate = endOfDay(forDay);
    const percent = ((date.valueOf() - startDate.valueOf()) / (endDate.valueOf() - startDate.valueOf())) * 100;
    if (percent < 0) return 0;
    if (percent > 100) return 100;
    return percent;
  }

  render() {
    return (
      <div class="calendar-month-view">
        <div class="view-header">
          <div class="columns">{this.renderHeader()}</div>
          <div class="scrollbar-placeholder" />
        </div>

        <div class="view-body">
          <div class="view-body-scroll">
            <div class="drawing-area">{this.renderEvents()}</div>
          </div>
        </div>
      </div>
    );
  }
}
