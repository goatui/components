# goat-alert



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                           | Type                                          | Default  |
| --------- | --------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------- |
| `message` | `message` | Message to display in the toast.                                                                      | `string`                                      | `''`     |
| `state`   | `state`   | Toast state. Possible values are `"success"`, `"error"`, `"info"`, `"warning"`. Defaults to `"info"`. | `"error" \| "info" \| "success" \| "warning"` | `'info'` |


## Dependencies

### Used by

 - [goat-notification-manager](../notification-manager)

### Depends on

- [goat-icon](../../primitive/icon)

### Graph
```mermaid
graph TD;
  goat-toast --> goat-icon
  goat-notification-manager --> goat-toast
  style goat-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
