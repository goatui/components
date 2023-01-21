import { Component, ComponentInterface, Element, h, Prop } from '@stencil/core';
import { addDays, addHours, differenceInDays, endOfDay, format, isEqual, startOfDay } from 'date-fns';
import { calculateWeekRange, EventBucket, EventNode } from '../utils';
import ColumnEventManager from './ColumnEventManager';


@Component({
  tag: 'goat-calendar-column-view',
  styleUrl: 'column-view.scss',
  shadow: true,
})
export class CalendarColumnView implements ComponentInterface {

  @Element() elm!: HTMLElement;

  @Prop() events: any[] = [];

  @Prop() view = 'week';

  @Prop() days = 7;

  @Prop() currentTime: Date;

  @Prop() contextDate: Date;

  dateRange: any;


  singleDayEvents: any = {};

  manager: ColumnEventManager;
  async componentWillLoad() {
    this.manager = new ColumnEventManager();
    this.manager.addEvents(this.events);

  }

  async componentDidLoad() {
    const viewBodyHeight = this.elm.shadowRoot.querySelector('.view-body').scrollHeight;
    this.elm.shadowRoot.querySelector('.view-body').scroll({ top: (this.getTimePercent(this.currentTime) / 100) * viewBodyHeight - 150 });
  }


  renderHeader() {
    const columns = [];
    for (let i = new Date(this.dateRange.startDate); differenceInDays(startOfDay(this.dateRange.endDate), i) >= 0; i = addDays(i, 1)) {
      const cls = ['column'];
      const diff = differenceInDays(startOfDay(i), startOfDay(this.currentTime));
      if (diff === 0)
        cls.push('today');
      else if (diff < 0)
        cls.push('past');
      else if (diff < 0)
        cls.push('future');

      columns.push(<div class={cls.join(' ')}>
        <div class='column-content'>
          <div class='date' onClick={() => {
            alert('date clicked');
          }}>
            {format(i, 'dd')}
          </div>
          <div class='day'>
            {format(i, 'E')}
          </div>
        </div>
      </div>);
    }
    return columns;
  }


  renderBackgroundColumns() {
    const columns = [];
    for (let i = new Date(this.dateRange.startDate); differenceInDays(startOfDay(this.dateRange.endDate), i) >= 0; i = addDays(i, 1)) {
      const cls = ['column'];
      if (isEqual(startOfDay(i), startOfDay(this.currentTime)))
        cls.push('active');
      columns.push(<div class={cls.join(' ')}>
      </div>);
    }
    return columns;
  }

  renderBodyBackground() {
    const rows = [];
    for (let i = 0; i < 48; i++) { // @TODO: parameterize number of column, currently rendering 24 hours
      const cls = ['row'];
      if (i % 2)
        cls.push('hour');
      const row = <div class={cls.join(' ')}>
        {this.renderBackgroundColumns()}
      </div>;
      rows.push(row);
    }
    return <div class='background'>{rows}</div>;
  }

  renderScale() {
    const rows = [];
    for (let i = 0; i < 48; i++) { // @TODO: parameterize number of column, currently rendering 24 hours
      const cls = ['row'];
      if (i % 2)
        cls.push('hour');
      const startTime = startOfDay(new Date());
      const row = <div class={cls.join(' ')}>
        {
          (() => {
            if (i % 2 == 0 && i) {
              return <div class='time'>{format(addHours(startTime, i / 2), 'hh a')}</div>;
            }
          })()
        }
      </div>;
      rows.push(row);
    }
    return <div class='background'>{rows}</div>;
  }

  renderEvents() {
    const columns = [];
    for (let i = new Date(this.dateRange.startDate), j = 0; differenceInDays(startOfDay(this.dateRange.endDate), i) >= 0; i = addDays(i, 1), j++) {
      const cls = ['column'];
      if (isEqual(startOfDay(i), startOfDay(this.currentTime)))
        cls.push('active');
      columns.push(<div class={cls.join(' ')}>
        <div class='column-content'>
          {
            (() => {
              if (this.eventDays[format(startOfDay(i), 'dd-MM-yyyy')]) {
                const eventDay = this.eventDays[format(startOfDay(i), 'dd-MM-yyyy')];
                const columnsLength = eventDay.length;
                return eventDay.map((nodes, columnIndex) => {
                  return nodes.map((node) => {
                    return <div class='event' style={{
                      top: `${this.getTimePercent(node.event.start, startOfDay(i))}%`,
                      height: `${this.getTimePercent(node.event.end, startOfDay(i)) - this.getTimePercent(node.event.start, startOfDay(i))}%`,
                      left: `${columnIndex / columnsLength * 100}%`,
                      width: `calc(${(1 * node.width) / columnsLength * 100}% - 1px)`,
                    }}>
                      <div class='event-title'>{node.event.title || '(no title)'}</div>
                    </div>;
                  });
                });
              }
            })()
          }

        </div>
      </div>);
    }
    return <div class='events-container'>{
      columns
    }</div>;
  }

  getDatePercent() {
    const currentDay = differenceInDays(startOfDay(this.currentTime), this.dateRange.startDate);
    return (currentDay / this.dateRange.totalDays) * 100;
  }

  getTimePercent(time, forDay?) {
    if (!forDay)
      forDay = time;
    const startDate = startOfDay(forDay);
    const endDate = endOfDay(forDay);
    const percent = (time.valueOf() - startDate.valueOf()) / (endDate.valueOf() - startDate.valueOf()) * 100;
    if (percent < 0)
      return 0;
    if (percent > 100)
      return 100;
    return percent;
  }


  render() {
    if (this.view === 'week') {
      this.dateRange = calculateWeekRange(this.contextDate, 1);
    } else {
      this.dateRange.startDate = startOfDay(this.contextDate);
      this.dateRange.endDate = endOfDay(addDays(this.contextDate, this.days - 1));
      this.dateRange.totalDays = this.days;
    }


    return <div class='calendar-column-view'>
      <div class='view-header'>
        <div class='scale' />
        <div class='columns'>
          {this.renderHeader()}
        </div>
        <div class='scrollbar-placeholder' />
      </div>
      <div class='view-body'>
        <div class='view-body-scroll'>
          <div class='scale'>
            {this.renderScale()}
          </div>
          <div class='drawing-area'>
            <goat-calendar-column-view-background columns={this.dateRange.totalDays} />
            {this.renderEvents()}
          </div>
          {
            (() => {
              if (this.currentTime.valueOf() > this.dateRange.startDate.valueOf() - 1 && this.currentTime.valueOf() < this.dateRange.endDate.valueOf() + 1) {
                return <div class='current-time-line'
                            style={{ top: `calc(${this.getTimePercent(this.currentTime)}% - 1px)` }}>
                  <div class='time'>{format(this.contextDate, 'hh:mm a')}</div>
                  <div class='dash-line' style={{ width: `${this.getDatePercent()}%` }}></div>
                  <div class='dot' style={{ 'left': `calc( ${this.getDatePercent()}% - 0.25rem)` }}></div>
                  <div class='line'
                       style={{
                         'left': `${this.getDatePercent()}%`,
                         width: `${(1 / this.dateRange.totalDays) * 100}%`,
                       }}></div>
                </div>;
              }
            })()
          }
        </div>
      </div>
    </div>;
  }


}
