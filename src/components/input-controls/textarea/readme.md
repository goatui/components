# goat-textarea



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                               | Type                    | Default                    |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------- |
| `actions`     | --            |                                                                                                           | `any[]`                 | `[]`                       |
| `debounce`    | `debounce`    | Set the amount of time, in milliseconds, to wait to trigger the `goat:change` event after each keystroke. | `number`                | `300`                      |
| `disabled`    | `disabled`    | If true, the user cannot interact with the button. Defaults to `false`.                                   | `boolean`               | `false`                    |
| `inline`      | `inline`      | If true, the form will be in inline format. Defaults to `false`.                                          | `boolean`               | `false`                    |
| `name`        | `name`        | The input field name.                                                                                     | `string`                | ``goat-input-${this.gid}`` |
| `placeholder` | `placeholder` | The input field placeholder.                                                                              | `string`                | `undefined`                |
| `required`    | `required`    | If true, required icon is show. Defaults to `false`.                                                      | `boolean`               | `false`                    |
| `size`        | `size`        | The button size. Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.                         | `"lg" \| "md" \| "sm"`  | `'md'`                     |
| `value`       | `value`       | The input field value.                                                                                    | `string`                | `undefined`                |
| `variant`     | `variant`     | Button variants Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.                     | `"dashed" \| "default"` | `'default'`                |


## Events

| Event               | Description                                | Type               |
| ------------------- | ------------------------------------------ | ------------------ |
| `goat:action-click` | Emitted when the action button is clicked. | `CustomEvent<any>` |
| `goat:blur`         | Emitted when the input loses focus.        | `CustomEvent<any>` |
| `goat:change`       | Emitted when the value has changed..       | `CustomEvent<any>` |
| `goat:focus`        | Emitted when the input has focus.          | `CustomEvent<any>` |
| `goat:input`        | Emitted when a keyboard input occurred.    | `CustomEvent<any>` |


## Methods

### `getGid() => Promise<string>`



#### Returns

Type: `Promise<string>`



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




----------------------------------------------

*Built with love!*
