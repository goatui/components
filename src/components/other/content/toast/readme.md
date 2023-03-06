# goat-alert



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                                          | Default  |
| --------- | --------- | ----------- | --------------------------------------------- | -------- |
| `message` | `message` |             | `string`                                      | `''`     |
| `state`   | `state`   |             | `"error" \| "info" \| "success" \| "warning"` | `'info'` |


## Dependencies

### Used by

 - [goat-notification-manager](../../../feedback/notification-manager)

### Depends on

- [goat-icon](../../../general/icon)

### Graph
```mermaid
graph TD;
  goat-toast --> goat-icon
  goat-notification-manager --> goat-toast
  style goat-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
