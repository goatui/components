# goat-icon



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description | Type     | Default |
| --------------- | ---------------- | ----------- | -------- | ------- |
| `operatorValue` | `operator-value` |             | `string` | `''`    |
| `operators`     | --               |             | `any[]`  | `[]`    |


## Dependencies

### Depends on

- [goat-select](../../../input-controls/select)

### Graph
```mermaid
graph TD;
  goat-cb-expression --> goat-select
  goat-select --> goat-icon
  goat-select --> goat-tag
  goat-select --> goat-button
  goat-select --> goat-spinner
  goat-select --> goat-menu
  goat-select --> goat-text
  goat-select --> goat-menu-item
  goat-tag --> goat-icon
  goat-button --> goat-spinner
  goat-button --> goat-icon
  goat-menu --> goat-empty-state
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  goat-menu-item --> goat-icon
  style goat-cb-expression fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
