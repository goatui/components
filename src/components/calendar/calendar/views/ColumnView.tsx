import { Calendar } from '../calendar';
import { calculateWeekRange } from '../utils';
import { addDays, addHours, differenceInDays, endOfDay, format, isEqual, startOfDay } from 'date-fns';
import { h } from '@stencil/core';

export default class ColumnView {

  calendar: Calendar;

  constructor(calendar: Calendar) {
    this.calendar = calendar;
  }

  renderHeader() {
    const self = this.calendar;
    const columns = [];
    for (let i = new Date(self.dateRange.startDay); differenceInDays(startOfDay(self.dateRange.endDay), i) >= 0; i = addDays(i, 1)) {
      const cls = ['column'];
      if (isEqual(startOfDay(i), startOfDay(self.currentTime)))
        cls.push('active');
      columns.push(<div class={cls.join(' ')}>
        <div class='column-content'>
          <div class='date' onClick={() => {
            self.contextDate = i;
            self.view = 'day';
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
    const self = this.calendar;
    const columns = [];
    for (let i = new Date(self.dateRange.startDay); differenceInDays(startOfDay(self.dateRange.endDay), i) >= 0; i = addDays(i, 1)) {
      const cls = ['column'];
      if (isEqual(startOfDay(i), startOfDay(self.currentTime)))
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
              return <div class="time">{format(addHours(startTime, i / 2), 'hh a')}</div>;
            }
          })()
        }
      </div>;
      rows.push(row);
    }
    return <div class='background'>{rows}</div>;
  }


  renderColumns() {
    const self = this.calendar;
    const columns = [];
    for (let i = new Date(self.dateRange.startDay); differenceInDays(startOfDay(self.dateRange.endDay), i) >= 0; i = addDays(i, 1)) {
      const cls = ['column'];
      if (isEqual(startOfDay(i), startOfDay(self.currentTime)))
        cls.push('active');
      columns.push(<div class={cls.join(' ')}>
        <div class='column-content'>

        </div>
      </div>);
    }
    return columns;
  }


  render() {
    const self = this.calendar;
    if (self.currentView.value === 'week') {
      self.dateRange = calculateWeekRange(self.contextDate, 1);
    } else {
      self.dateRange.startDay = startOfDay(self.contextDate);
      self.dateRange.endDay = endOfDay(addDays(self.contextDate, self.currentView.days - 1));
    }


    return <div class='calendar-column-view'>
      <div class='view-header'>
        <div class='scale'>

        </div>
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

            {this.renderBodyBackground()}
            {this.renderColumns()}
          </div>
          <div class='current-time-line' style={{ top: `calc(${this.getTimePercent()}% - 1px)` }}>
            <div class='dotted-line'></div>
            <div class='dot'></div>
            <div class='line'></div>
          </div>
        </div>
      </div>
    </div>;
  }

  getTimePercent() {
    const startDate = startOfDay(this.calendar.currentTime);
    const endDate = endOfDay(this.calendar.currentTime);
    return (this.calendar.currentTime.valueOf() - startDate.valueOf()) / (endDate.valueOf() - startDate.valueOf()) * 100;
  }
}
