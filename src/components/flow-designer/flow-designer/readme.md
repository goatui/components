# goat-flow-designer



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default |
| ------------ | ------------ | ----------- | --------- | ------- |
| `activities` | --           |             | `any[]`   | `[]`    |
| `blockSize`  | `block-size` |             | `number`  | `16`    |
| `disabled`   | `disabled`   |             | `boolean` | `false` |


## Dependencies

### Depends on

- [goat-canvas](../canvas)
- [goat-icon](../../general/icon)
- [goat-tag](../../data-display/tag)
- [goat-button-group](../../general/button-group)
- [goat-button](../../general/button)

### Graph
```mermaid
graph TD;
  goat-flow-designer --> goat-canvas
  goat-flow-designer --> goat-icon
  goat-flow-designer --> goat-tag
  goat-flow-designer --> goat-button-group
  goat-flow-designer --> goat-button
  goat-tag --> goat-icon
  goat-button --> goat-icon
  goat-button --> goat-spinner
  style goat-flow-designer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
