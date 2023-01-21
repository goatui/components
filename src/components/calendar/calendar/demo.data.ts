import { addHours, startOfDay } from 'date-fns';
import CalendarEvent from './CalendarEvent';

export function generateEvents() {

  const events = [];

  const now = startOfDay(new Date());

  let event = new CalendarEvent();
  event.title = '34';
  event.start = addHours(now, 1);
  event.end = addHours(now, 2);
  events.push(event);

  event = new CalendarEvent();
  event.title = '1';
  event.start = addHours(now, 3);
  event.end = addHours(now, 4);
  events.push(event);

  event = new CalendarEvent();
  event.title = '2';
  event.start = addHours(now, 2);
  event.end = addHours(now, 4);
  events.push(event);


  event = new CalendarEvent();
  event.title = '3';
  event.start = addHours(now, 5);
  event.end = addHours(now, 6);
  events.push(event);


  event = new CalendarEvent();
  event.title = '4';
  event.start = addHours(now, 3);
  event.end = addHours(now, 6);
  events.push(event);

  event = new CalendarEvent();
  event.title = '5';
  event.start = addHours(now, 1);
  event.end = addHours(now, 16);
  events.push(event);

  return events;
}
