# goat-menu



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type               | Default                                                                                 |
| ------------ | ------------- | ----------- | ------------------ | --------------------------------------------------------------------------------------- |
| `empty`      | `empty`       |             | `boolean`          | `false`                                                                                 |
| `emptyState` | `empty-state` |             | `any`              | `{     'headline': 'No items',     'description': 'There are no items to display',   }` |
| `showLoader` | `show-loader` |             | `boolean`          | `false`                                                                                 |
| `value`      | `value`       |             | `number \| string` | `undefined`                                                                             |


## Methods

### `setFocus() => Promise<void>`

Sets focus on first menu item. Use this method instead of the global
`element.focus()`.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [goat-empty-state](../../../data-display/empty-state)

### Graph
```mermaid
graph TD;
  tree-view --> goat-empty-state
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  goat-button --> goat-icon
  goat-button --> goat-spinner
  style tree-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
