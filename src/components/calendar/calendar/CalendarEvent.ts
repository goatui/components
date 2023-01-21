import { differenceInMilliseconds } from 'date-fns';

export default class CalendarEvent {
  id: string;
  title: string;

  start: Date;

  end: Date;

  data: any;

  length() {
    return differenceInMilliseconds(this.end, this.start);
  }
}
