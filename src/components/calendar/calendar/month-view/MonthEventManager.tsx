import { CalendarEvent } from '../CalendarEvent';
import { differenceInMilliseconds, endOfDay, startOfDay } from 'date-fns';

export class ColumnEvent extends CalendarEvent {
  width: number = 1;

  constructor(event: CalendarEvent) {
    super(event.start, event.end, event.title, event.color, event.data);
  }
}

export default class MonthEventManager {
  #events: ColumnEvent[] = [];

  columns: ColumnEvent[][];

  constructor() {}

  addEvents(events: CalendarEvent[]) {
    events.forEach(event => {
      this.#events.push(new ColumnEvent(event));
    });
  }

  process() {
    this.columns = [];
    let events = this.#events.sort((a, b) => {
      return differenceInMilliseconds(a.start, b.start) || b.length() - a.length();
    });

    let oldLength = null;
    /* Bucketing */
    while (events.length) {
      if (oldLength == events.length) throw new Error('Events not processed in previous run, breaking infinite loop');
      oldLength = events.length;

      const column = [];
      for (let i = 0; i < events.length; i++) {
        if (i == 0) column.push(events[i]);
        else if (differenceInMilliseconds(startOfDay(events[i].start), endOfDay(column[column.length - 1].end)) >= 0) {
          column.push(events[i]);
        }
      }
      this.columns.push(column);
      events = events.filter(e => {
        return !column.find(ce => {
          return ce.gid == e.gid;
        });
      });
    }

    for (let i = 0; i < this.columns.length - 1; i++) {
      this.columns[i].forEach(event => {
        for (let j = i + 1; j < this.columns.length; j++) {
          if (
            this.columns[j].find(colEvent => {
              return event.isOverlapping(colEvent);
            })
          ) {
            break;
          }
          event.width++;
        }
      });
    }
  }
}
