import { calculateWeekRange } from '../utils';
import { addDays, endOfDay, startOfDay } from 'date-fns';

export function calculateDateRange(view, contextDate, days) {
  if (view === 'week') {
    return calculateWeekRange(contextDate, 1 /* monday */);
  } else {
    const dateRange: any = {};
    dateRange.startDate = startOfDay(contextDate);
    dateRange.endDate = endOfDay(addDays(contextDate, days - 1));
    dateRange.totalDays = days;
    return dateRange;
  }
}
