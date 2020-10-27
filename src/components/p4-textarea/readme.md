# p4-textarea



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                             | Type                    | Default        |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------- | ----------------------- | -------------- |
| `clearInput`  | `clear-input` | If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.   | `boolean`               | `false`        |
| `debounce`    | `debounce`    | Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. | `number`                | `0`            |
| `disabled`    | `disabled`    | If true, the user cannot interact with the button. Defaults to `false`.                                 | `boolean`               | `false`        |
| `inline`      | `inline`      | If true, the form will be in inline format. Defaults to `false`.                                        | `boolean`               | `false`        |
| `name`        | `name`        | The input field name.                                                                                   | `string`                | `this.inputId` |
| `placeholder` | `placeholder` | The input field placeholder.                                                                            | `string`                | `undefined`    |
| `required`    | `required`    | If true, required icon is show. Defaults to `false`.                                                    | `boolean`               | `false`        |
| `size`        | `size`        | The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.                       | `"lg" \| "md" \| "sm"`  | `'md'`         |
| `type`        | `type`        | Button variants Possible values are `"text"`. Defaults to `"text"`.                                     | `"number" \| "text"`    | `'text'`       |
| `value`       | `value`       | The input field value.                                                                                  | `string`                | `undefined`    |
| `variant`     | `variant`     | Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.                   | `"dashed" \| "default"` | `'default'`    |


## Events

| Event      | Description                             | Type               |
| ---------- | --------------------------------------- | ------------------ |
| `p4Blur`   | Emitted when the input loses focus.     | `CustomEvent<any>` |
| `p4Change` | Emitted when the value has changed..    | `CustomEvent<any>` |
| `p4Focus`  | Emitted when the input has focus.       | `CustomEvent<any>` |
| `p4Input`  | Emitted when a keyboard input occurred. | `CustomEvent<any>` |


## Methods

### `setBlur() => Promise<void>`

Sets blur on the native `input` in `ion-input`. Use this method instead of the global
`input.blur()`.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the native `input` in `ion-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [p4-icon](../p4-icon)

### Graph
```mermaid
graph TD;
  p4-textarea --> p4-icon
  style p4-textarea fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
