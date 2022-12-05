import { endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns/esm';

/**
 * Sets the year of the Date object using local time.
 * @param year A numeric value for the year.
 * @param month A numeric value for the month (1 for January, 12 for December).
 * @param weekStartsOn A numeric value. The index of the first day of the week (0 - Sunday)
 */
export function calculateMonthRange(date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 1) {
  const startDay = startOfWeek(startOfMonth(date), { weekStartsOn });
  const endDay = endOfWeek(endOfMonth(date), { weekStartsOn });
  return {
    startDay,
    endDay,
  };
}

export function calculateWeekRange(date, weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 1) {
  const startDay = startOfWeek(date, { weekStartsOn });
  const endDay = endOfWeek(date, { weekStartsOn });
  return {
    startDay,
    endDay,
  };
}
