import { Calendar } from '../calendar';
import { calculateWeekRange } from '../utils';
import { addDays, differenceInDays, endOfDay, format, isEqual, startOfDay } from 'date-fns';
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

  renderBodyBackground() {
    const columns = [];
    for (let i = 0; i < 24; i++) {
      columns.push(<div class='row'></div>)
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
        <div class='scrollbar'/>
      </div>
      <div class='view-body'>
        <div class='scale'></div>
        <div class='columns'>
          {this.renderBodyBackground()}
        </div>
      </div>
    </div>;
  }
}
