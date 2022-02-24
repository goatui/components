# goat-list



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type                                                                           | Default                                                                                       |
| -------------- | --------------- | ----------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `data`         | --              |             | `any[]`                                                                        | `[]`                                                                                          |
| `emptyState`   | `empty-state`   |             | `any`                                                                          | `{     title: 'Empty List!',     message: 'There are no items to display at the moment',   }` |
| `enableSearch` | `enable-search` |             | `boolean`                                                                      | `false`                                                                                       |
| `itemVariant`  | `item-variant`  |             | `"caption" \| "default" \| "icon" \| "icon-caption" \| "img" \| "img-caption"` | `'default'`                                                                                   |
| `showLoader`   | `show-loader`   |             | `boolean`                                                                      | `false`                                                                                       |
| `value`        | `value`         |             | `number \| string`                                                             | `undefined`                                                                                   |
| `variant`      | `variant`       |             | `"default" \| "group"`                                                         | `'default'`                                                                                   |


## Events

| Event           | Description                       | Type               |
| --------------- | --------------------------------- | ------------------ |
| `goat:item-click` | Emitted when the item is clicked. | `CustomEvent<any>` |


## Methods

### `setFocus(previousItem?: boolean) => Promise<void>`

Sets focus on the first item of list.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [goat-dropdown](../goat-dropdown)
 - [goat-select](../goat-select)

### Depends on

- [goat-icon](../goat-icon)
- [goat-input](../goat-input)

### Graph
```mermaid
graph TD;
  goat-list --> goat-icon
  goat-list --> goat-input
  goat-input --> goat-icon
  goat-dropdown --> goat-list
  goat-select --> goat-list
  style goat-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
