# goat-checkbox



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                                       | Type                   | Default     |
| -------------- | -------------- | --------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `disabled`     | `disabled`     | If true, the user cannot interact with the button. Defaults to `false`.           | `boolean`              | `false`     |
| `intermediate` | `intermediate` |                                                                                   | `boolean`              | `false`     |
| `label`        | `label`        | The checkbox label.                                                               | `string`               | `undefined` |
| `required`     | `required`     | If true, required icon is show. Defaults to `false`.                              | `boolean`              | `false`     |
| `rounded`      | `rounded`      |                                                                                   | `boolean`              | `false`     |
| `size`         | `size`         | The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`. | `"lg" \| "md" \| "sm"` | `'md'`      |
| `value`        | `value`        | The input field value.                                                            | `boolean`              | `false`     |


## Events

| Event         | Description                                                                                                                         | Type               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `goat:blur`   | Emitted when the input loses focus.                                                                                                 | `CustomEvent<any>` |
| `goat:change` | On change of input a CustomEvent 'goat:change' will be triggered. Event details contains parent event, oldValue, newValue of input. | `CustomEvent<any>` |
| `goat:focus`  | Emitted when the input has focus.                                                                                                   | `CustomEvent<any>` |


## Methods

### `getGid() => Promise<string>`



#### Returns

Type: `Promise<string>`



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

 - [goat-table](../../other/table)

### Graph
```mermaid
graph TD;
  goat-table --> goat-checkbox
  style goat-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
