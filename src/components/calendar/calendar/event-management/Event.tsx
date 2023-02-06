export class Event {
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

  isOverlapping(event: Event) {
    let totalLength = null;
    if (this.start.valueOf() <= event.start.valueOf()) totalLength = event.end.valueOf() - this.start.valueOf();
    else totalLength = this.end.valueOf() - event.start.valueOf();
    return this.length() + event.length() >= totalLength;
  }

  isOverlappingWithDate(date: Date) {
    return this.start.valueOf() <= date.valueOf() && this.end.valueOf() >= date.valueOf();
  }
}
