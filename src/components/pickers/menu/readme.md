# goat-menu



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type               | Default     |
| ------------ | ------------- | ----------- | ------------------ | ----------- |
| `empty`      | `empty`       |             | `boolean`          | `false`     |
| `emptyState` | `empty-state` |             | `string`           | `undefined` |
| `showLoader` | `show-loader` |             | `boolean`          | `false`     |
| `value`      | `value`       |             | `number \| string` | `undefined` |


## Methods

### `setFocus() => Promise<void>`

Sets focus on first menu item. Use this method instead of the global
`element.focus()`.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [goat-empty-state](../../informational/empty-state)

### Graph
```mermaid
graph TD;
  goat-menu --> goat-empty-state
  style goat-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
