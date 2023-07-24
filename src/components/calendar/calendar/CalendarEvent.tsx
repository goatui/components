import {BaseEvent} from './event-management/BaseEvent';

export  class CalendarEvent extends BaseEvent {
  data: any;
  title: string;
  constructor(start: Date, end: Date, title: string, data) {
    super(start, end);
    this.data = data;
    this.title = title;
  }
}
