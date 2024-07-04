import { BaseEvent } from './event-management/BaseEvent';

export class CalendarEvent extends BaseEvent {
  data: any;
  title: string;
  color?: string;
  constructor(start: Date, end: Date, title: string, color: string, data: any) {
    super(start, end);
    this.data = data;
    if (color) this.color = color;
    this.title = title;
  }
}
