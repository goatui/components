import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns/esm';


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



