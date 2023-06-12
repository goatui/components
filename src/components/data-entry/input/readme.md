# goat-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                                                                                        | Type                                                   | Default                    |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------- |
| `autocomplete` | `autocomplete` | Indicates whether the value of the control can be automatically completed by the browser.                                          | `"off" \| "on"`                                        | `'off'`                    |
| `clearable`    | `clearable`    | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.                              | `boolean`                                              | `false`                    |
| `configAria`   | `config-aria`  |                                                                                                                                    | `any`                                                  | `{}`                       |
| `debounce`     | `debounce`     | Set the amount of time, in milliseconds, to wait to trigger the `goatChange` event after each keystroke.                           | `number`                                               | `300`                      |
| `disabled`     | `disabled`     | If true, the user cannot interact with the button. Defaults to `false`.                                                            | `boolean`                                              | `false`                    |
| `name`         | `name`         | The input field name.                                                                                                              | `string`                                               | ``goat-input-${this.gid}`` |
| `placeholder`  | `placeholder`  | The input field placeholder.                                                                                                       | `string`                                               | `undefined`                |
| `readonly`     | `readonly`     | If true, the user read the value cannot modify it. Defaults to `false`.                                                            | `boolean`                                              | `false`                    |
| `required`     | `required`     | If true, required icon is show. Defaults to `false`.                                                                               | `boolean`                                              | `false`                    |
| `size`         | `size`         | The input field size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.                                             | `"lg" \| "md" \| "sm"`                                 | `'md'`                     |
| `state`        | `state`        | The input state. Possible values are: `"success"`, `"error"`, `"warning"`, 'default'. Defaults to `"default"`.                     | `"default" \| "error" \| "success" \| "warning"`       | `'default'`                |
| `type`         | `type`         | The type of control to display. Possible values are: `"text"`, `"password"`, `"number"`, `"email"`, `"tel"`. Defaults to `"text"`. | `"email" \| "number" \| "password" \| "tel" \| "text"` | `'text'`                   |
| `value`        | `value`        | The input field value.                                                                                                             | `number \| string`                                     | `''`                       |


## Events

| Event         | Description                             | Type               |
| ------------- | --------------------------------------- | ------------------ |
| `goat:blur`   | Emitted when the input loses focus.     | `CustomEvent<any>` |
| `goat:change` | Emitted when the value has changed.     | `CustomEvent<any>` |
| `goat:focus`  | Emitted when the input has focus.       | `CustomEvent<any>` |
| `goat:input`  | Emitted when a keyboard input occurred. | `CustomEvent<any>` |


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

- [goat-icon](../../general/icon)

### Graph
```mermaid
graph TD;
  goat-input --> goat-icon
  style goat-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*