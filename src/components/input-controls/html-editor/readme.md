# goat-code-editor



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                            | Type                                  | Default                    |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------- | -------------------------- |
| `debounce`    | `debounce`     | Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke. | `number`                              | `250`                      |
| `disabled`    | `disabled`     | If true, the user cannot interact with the button. Defaults to `false`.                                | `boolean`                             | `false`                    |
| `layer`       | `layer`        |                                                                                                        | `"01" \| "02" \| "background"`        | `undefined`                |
| `lineNumbers` | `line-numbers` |                                                                                                        | `"off" \| "on"`                       | `'on'`                     |
| `mentions`    | --             |                                                                                                        | `{ label: string; value: string; }[]` | `[]`                       |
| `name`        | `name`         | The input field name.                                                                                  | `string`                              | ``goat-input-${this.gid}`` |
| `readonly`    | `readonly`     |                                                                                                        | `boolean`                             | `false`                    |
| `required`    | `required`     | If true, required icon is show. Defaults to `false`.                                                   | `boolean`                             | `false`                    |
| `theme`       | `theme`        |                                                                                                        | `"vs-dark" \| "vs-light"`             | `'vs-light'`               |
| `value`       | `value`        | The input field value.                                                                                 | `string`                              | `undefined`                |


## Events

| Event                      | Description                          | Type               |
| -------------------------- | ------------------------------------ | ------------------ |
| `goat-html-editor--change` | Emitted when the value has changed.. | `CustomEvent<any>` |


## Methods

### `getComponentId() => Promise<string>`



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

### Depends on

- [goat-button](../../primitive/button/button)
- [goat-spinner](../../informational/spinner)
- [goat-code-editor](../code-editor)
- [goat-toggle](../toggle)
- [goat-menu](../../navigation/menu/menu)
- [goat-menu-item](../../navigation/menu/menu-item)

### Graph
```mermaid
graph TD;
  goat-html-editor --> goat-button
  goat-html-editor --> goat-spinner
  goat-html-editor --> goat-code-editor
  goat-html-editor --> goat-toggle
  goat-html-editor --> goat-menu
  goat-html-editor --> goat-menu-item
  goat-button --> goat-spinner
  goat-button --> goat-icon
  goat-code-editor --> goat-tag
  goat-code-editor --> goat-spinner
  goat-tag --> goat-icon
  goat-menu --> goat-empty-state
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  style goat-html-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
