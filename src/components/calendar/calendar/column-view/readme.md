# goat-calendar-column-view



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type      | Default     |
| ---------------- | ----------------- | ----------- | --------- | ----------- |
| `contextDate`    | --                |             | `Date`    | `undefined` |
| `currentTime`    | --                |             | `Date`    | `undefined` |
| `days`           | `days`            |             | `number`  | `7`         |
| `eventClickable` | `event-clickable` |             | `boolean` | `true`      |
| `events`         | --                |             | `any[]`   | `[]`        |
| `view`           | `view`            |             | `string`  | `'week'`    |


## Events

| Event                          | Description | Type               |
| ------------------------------ | ----------- | ------------------ |
| `goat:column-view-date-click`  |             | `CustomEvent<any>` |
| `goat:column-view-event-click` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [goat-calendar](..)

### Depends on

- [goat-calendar-column-view-background](column-view-background)

### Graph
```mermaid
graph TD;
  goat-calendar-column-view --> goat-calendar-column-view-background
  goat-calendar --> goat-calendar-column-view
  style goat-calendar-column-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
