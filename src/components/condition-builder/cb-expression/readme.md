# goat-icon



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type     | Default |
| ----------- | --------- | ----------- | -------- | ------- |
| `field`     | `field`   |             | `string` | `''`    |
| `operators` | --        |             | `any[]`  | `[]`    |


## Dependencies

### Depends on

- [goat-select](../../data-entry/select)
- [goat-input](../../data-entry/input/input)
- [goat-text](../../general/text)
- [goat-cb-divider](../cb-divider)
- [goat-tag](../../data-display/tag)

### Graph
```mermaid
graph TD;
  goat-cb-expression --> goat-select
  goat-cb-expression --> goat-input
  goat-cb-expression --> goat-text
  goat-cb-expression --> goat-cb-divider
  goat-cb-expression --> goat-tag
  goat-select --> goat-icon
  goat-select --> goat-tag
  goat-select --> goat-button
  goat-select --> goat-spinner
  goat-select --> goat-menu
  goat-select --> goat-text
  goat-select --> goat-menu-item
  goat-tag --> goat-icon
  goat-button --> goat-icon
  goat-button --> goat-spinner
  goat-menu --> goat-empty-state
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  goat-input --> goat-button
  style goat-cb-expression fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
