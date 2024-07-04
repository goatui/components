import { endOfDay, startOfDay } from 'date-fns';

export class BaseEvent {
  gid: string;

  end: Date;

  start: Date;

  constructor(start: Date, end: Date) {
    this.gid = crypto.randomUUID();
    this.start = start;
    this.end = end;
  }

  length() {
    return this.end.valueOf() - this.start.valueOf();
  }

  isOverlapping(event: BaseEvent) {
    let totalLength = null;
    if (this.start.valueOf() <= event.start.valueOf()) totalLength = event.end.valueOf() - this.start.valueOf();
    else totalLength = this.end.valueOf() - event.start.valueOf();
    return this.length() + event.length() >= totalLength;
  }

  isOverlappingWithoutTime(event: BaseEvent) {
    let totalLength = null;
    if (startOfDay(this.start).valueOf() <= startOfDay(event.start).valueOf()) totalLength = endOfDay(event.end).valueOf() - startOfDay(this.start).valueOf();
    else totalLength = endOfDay(this.end).valueOf() - startOfDay(event.start).valueOf();
    return this.length() + event.length() >= totalLength;
  }

  isOverlappingWithDate(date: Date) {
    return this.start.valueOf() <= date.valueOf() && this.end.valueOf() >= date.valueOf();
  }
}
