import {Event} from './event-management/Event';

export  class CalendarEvent extends Event {
  data: any;
  title: string;
  constructor(start: Date, end: Date, title: string, data) {
    super(start, end);
    this.data = data;
    this.title = title;
  }
}
