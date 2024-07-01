# goat-code-editor



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                            | Type                               | Default                    |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------- | -------------------------- |
| `debounce`    | `debounce`     | Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke. | `number`                           | `250`                      |
| `disabled`    | `disabled`     | If true, the user cannot interact with the button. Defaults to `false`.                                | `boolean`                          | `false`                    |
| `language`    | `language`     |                                                                                                        | `"html" \| "javascript" \| "json"` | `'javascript'`             |
| `lineNumbers` | `line-numbers` |                                                                                                        | `"off" \| "on"`                    | `'on'`                     |
| `name`        | `name`         | The input field name.                                                                                  | `string`                           | ``goat-input-${this.gid}`` |
| `readonly`    | `readonly`     |                                                                                                        | `boolean`                          | `false`                    |
| `required`    | `required`     | If true, required icon is show. Defaults to `false`.                                                   | `boolean`                          | `false`                    |
| `value`       | `value`        | The input field value.                                                                                 | `string`                           | `undefined`                |


## Events

| Event         | Description                         | Type               |
| ------------- | ----------------------------------- | ------------------ |
| `goat:change` | Emitted when the value has changed. | `CustomEvent<any>` |


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

### Used by

 - [goat-html-editor](../html-editor)

### Depends on

- [goat-tag](../../tag)
- [goat-spinner](../../spinner)

### Graph
```mermaid
graph TD;
  goat-code-editor --> goat-tag
  goat-code-editor --> goat-spinner
  goat-tag --> goat-icon
  goat-html-editor --> goat-code-editor
  style goat-code-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
