import {Event} from './Event';

export class EventManager {
  events: Event[];

  constructor(events: Event[]) {
    this.events = events;
  }

  getEventsOverlappingWithDate(date: Date) {
    return this.events.filter(event => event.isOverlappingWithDate(date));
  }
}
