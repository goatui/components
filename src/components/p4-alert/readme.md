# p4-alert



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                                          | Default  |
| ------------- | ------------- | ----------- | --------------------------------------------- | -------- |
| `description` | `description` |             | `string`                                      | `''`     |
| `dismissible` | `dismissible` |             | `boolean`                                     | `false`  |
| `message`     | `message`     |             | `string`                                      | `''`     |
| `state`       | `state`       |             | `"error" \| "info" \| "success" \| "warning"` | `'info'` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `p4:dismiss` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [p4-button](../p4-button)

### Graph
```mermaid
graph TD;
  p4-alert --> p4-button
  p4-button --> p4-icon
  p4-button --> p4-spinner
  style p4-alert fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
