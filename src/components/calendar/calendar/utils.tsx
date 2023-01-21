import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns/esm';
import CalendarEvent from './CalendarEvent';
import { differenceInMilliseconds } from 'date-fns';


/**
 * Calculates start and end dates of month in a calendar.
 * @param date Context date for which range need to calculated.
 * @param weekStartsOn A numeric value. The index of the first day of the week (0 - Sunday)
 */
export function calculateMonthRange(date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 1) {
  const startDate = startOfWeek(startOfMonth(date), { weekStartsOn });
  const endDate = endOfWeek(endOfMonth(date), { weekStartsOn });
  return {
    startDate,
    endDate,
    totalDays: 42,
  };
}

/*
 *
 */
export function calculateWeekRange(date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 1) {
  const startDate = startOfWeek(date, { weekStartsOn });
  const endDate = endOfWeek(date, { weekStartsOn });
  return {
    startDate,
    endDate,
    totalDays: 7,
  };
}

export class EventNode {
  event: CalendarEvent;

  width: number = 1;

  constructor(event) {
    this.event = event;
  }

}


export class EventBucket {

  eventNodes: EventNode[] = [];

  columns: EventNode[][];

  constructor() {

  }


  insert(node: EventNode) {
    this.eventNodes.push(node);
  }

  process() {
    this.columns = [];
    let events = this.eventNodes.sort((a, b) => {
      return differenceInMilliseconds(a.event.start, b.event.start) || b.event.length() - a.event.length();
    });

    let oldLength = null;
    /* Bucketing */
    while (events.length) {
      if (oldLength == events.length)
        throw new Error('Events not processed in previous run, breaking infinite loop');
      oldLength = events.length;

      const column = [];
      for (let i = 0; i < events.length; i++) {
        if (i == 0)
          column.push(events[i]);
        else if (differenceInMilliseconds(events[i].event.start, column[column.length - 1].event.end) >= 0) {
          column.push(events[i]);
        }
      }
      this.columns.push(column);
      events = events.filter((e) => {
        return !column.find((ce) => {
          return ce.event == e.event;
        });
      });
    }

    for (let i = 0; i < this.columns.length - 1; i++) {

      this.columns[i].forEach((event) => {
        for (let j = i + 1; j < this.columns.length; j++) {
          if (this.columns[j].find((colEvent) => {
            return this.#eventOverlapping(event.event, colEvent.event);
          })) {
            break;
          }
          event.width++;
        }
      });

    }
  }

  #eventOverlapping(eventA: CalendarEvent, eventB: CalendarEvent) {
    if (differenceInMilliseconds(eventA.start, eventB.start) > 0) {
      const temp = eventA;
      eventA = eventB;
      eventB = temp;
    }
    const totalLength = differenceInMilliseconds(eventB.end, eventA.start);
    return totalLength < eventA.length() + eventB.length();
  }

}



