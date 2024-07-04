type CalendarViewType = {
  label: string;
  value: string;
  type: string;
  days?: number;
};
type EventType = {
  start: Date;
  end: Date;
  title: string;
  color?: string;
  [key: string]: any;
};

export type { CalendarViewType, EventType };
