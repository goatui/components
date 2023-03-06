import {BaseEvent} from './BaseEvent';

export class EventManager {
  events: BaseEvent[];

  constructor(events: BaseEvent[]) {
    this.events = events;
  }

  getEventsOverlappingWithDate(date: Date) {
    return this.events.filter(event => event.isOverlappingWithDate(date));
  }
}
