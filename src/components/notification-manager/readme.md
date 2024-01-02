# goat-alert



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                           | Default          |
| ---------- | ---------- | ----------- | -------------------------------------------------------------- | ---------------- |
| `name`     | `name`     |             | `string`                                                       | `'global'`       |
| `position` | `position` |             | `"bottom-left" \| "bottom-right" \| "top-left" \| "top-right"` | `'bottom-right'` |


## Dependencies

### Used by

 - [goat-code-highlighter](../data-display/code-highlighter)

### Depends on

- [goat-toast](../toast)
- [goat-notification](../notification)

### Graph
```mermaid
graph TD;
  goat-notification-manager --> goat-toast
  goat-notification-manager --> goat-notification
  goat-toast --> goat-icon
  goat-notification --> goat-button
  goat-notification --> goat-icon
  goat-button --> goat-icon
  goat-button --> goat-spinner
  goat-code-highlighter --> goat-notification-manager
  style goat-notification-manager fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
