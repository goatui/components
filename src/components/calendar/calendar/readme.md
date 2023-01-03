# goat-avatar



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description  | Type      | Default                                                                                                                                                                                                     |
| ---------------- | ----------------- | ------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `availableViews` | `available-views` |              | `any`     | `[{ label: 'Day', value: 'day', type: 'column', days: 1 }, {     label: 'Week',     value: 'week',     type: 'column',     days: 7,   }, {     label: 'Month',     value: 'month',     type: 'month',   }]` |
| `contextDate`    | --                |              | `Date`    | `this.currentTime`                                                                                                                                                                                          |
| `events`         | --                |              | `any[]`   | `[]`                                                                                                                                                                                                        |
| `showLoader`     | `show-loader`     | Show loader. | `boolean` | `false`                                                                                                                                                                                                     |
| `timezone`       | `timezone`        |              | `string`  | `'Asia/Kolkata'`                                                                                                                                                                                            |
| `view`           | `view`            |              | `string`  | `'week'`                                                                                                                                                                                                    |


## Dependencies

### Depends on

- [goat-button](../../controls/button)
- [goat-select](../../form/select)

### Graph
```mermaid
graph TD;
  goat-calendar --> goat-button
  goat-calendar --> goat-select
  goat-button --> goat-icon
  goat-button --> goat-spinner
  goat-select --> goat-tag
  goat-select --> goat-icon
  goat-select --> goat-spinner
  goat-select --> goat-menu
  goat-select --> goat-text
  goat-select --> goat-menu-item
  goat-tag --> goat-icon
  goat-menu --> goat-empty-state
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  style goat-calendar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*