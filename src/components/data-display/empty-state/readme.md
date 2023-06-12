# goat-heading



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                     | Default         |
| ---------------- | ----------------- | ----------- | -------------------------------------------------------- | --------------- |
| `action`         | `action`          |             | `string`                                                 | `undefined`     |
| `actionDisabled` | `action-disabled` |             | `boolean`                                                | `false`         |
| `actionUrl`      | `action-url`      |             | `string`                                                 | `undefined`     |
| `actionVariant`  | `action-variant`  |             | `"default" \| "ghost" \| "light" \| "link" \| "outline"` | `'default'`     |
| `description`    | `description`     |             | `string`                                                 | `undefined`     |
| `headline`       | `headline`        |             | `string`                                                 | `undefined`     |
| `illustration`   | `illustration`    |             | `"no-document"`                                          | `'no-document'` |


## Dependencies

### Used by

 - [goat-menu](../../general/menu/menu)
 - [goat-sidenav-menu](../../app-shell/sidenav-menu)
 - [goat-table](../table)
 - [tree-view](../../general/menu/tree-view)

### Depends on

- [goat-svg](../svg)
- [goat-button](../../general/button)

### Graph
```mermaid
graph TD;
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  goat-button --> goat-icon
  goat-button --> goat-spinner
  goat-menu --> goat-empty-state
  goat-sidenav-menu --> goat-empty-state
  goat-table --> goat-empty-state
  tree-view --> goat-empty-state
  style goat-empty-state fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*