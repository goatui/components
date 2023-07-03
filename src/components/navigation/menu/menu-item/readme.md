# goat-menu-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                             | Type               | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------- | ------------------ | ----------- |
| `disabled` | `disabled` | If true, the user cannot interact with the button. Defaults to `false`. | `boolean`          | `false`     |
| `selected` | `selected` | Menu item selection state.                                              | `boolean`          | `false`     |
| `value`    | `value`    | The menu item value.                                                    | `number \| string` | `undefined` |


## Events

| Event                  | Description                            | Type               |
| ---------------------- | -------------------------------------- | ------------------ |
| `goat:menu-item-click` | Emitted when the menu item is clicked. | `CustomEvent<any>` |


## Methods

### `setBlur() => Promise<void>`

Sets blur on the native `input` in `goat-input`. Use this method instead of the global
`input.blur()`.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the native `input` in `goat-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [goat-dropdown](../dropdown)
 - [goat-select](../../../data-entry/select)

### Graph
```mermaid
graph TD;
  goat-dropdown --> goat-menu-item
  goat-select --> goat-menu-item
  style goat-menu-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
