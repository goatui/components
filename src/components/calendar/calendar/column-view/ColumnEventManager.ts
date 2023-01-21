import CalendarEvent from '../CalendarEvent';

export default class ColumnEventManager {

  #events: CalendarEvent[] = [];

  addEvents(events: CalendarEvent[]) {
    this.#events = this.#events.concat(events);
  }

  getEvents() {
    return this.#events;
  }
}
