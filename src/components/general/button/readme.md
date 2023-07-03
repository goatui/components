# goat-button



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                             | Type                                                     | Default     |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- |
| `block`          | `block`           | If true, fits button width to its parent width. Defaults to `false`.                                                    | `boolean`                                                | `false`     |
| `configAria`     | `config-aria`     |                                                                                                                         | `any`                                                    | `{}`        |
| `disabled`       | `disabled`        | If true, the user cannot interact with the button. Defaults to `false`.                                                 | `boolean`                                                | `false`     |
| `disabledReason` | `disabled-reason` |                                                                                                                         | `string`                                                 | `''`        |
| `href`           | `href`            | Hyperlink to navigate to on click.                                                                                      | `string`                                                 | `undefined` |
| `icon`           | `icon`            | Icon which will displayed on button. Possible values are bootstrap icon names.                                          | `string`                                                 | `undefined` |
| `iconEnd`        | `icon-end`        | Icon position.                                                                                                          | `boolean`                                                | `false`     |
| `selected`       | `selected`        | Button selection state.                                                                                                 | `boolean`                                                | `false`     |
| `showLoader`     | `show-loader`     | Show loader.                                                                                                            | `boolean`                                                | `false`     |
| `size`           | `size`            | Button size. Possible values are `"sm"`, `"md"`, `"lg"`, `"xl"`, `"xxl"`, `"none"`. Defaults to `"md"`.                 | `"lg" \| "md" \| "none" \| "sm" \| "xl" \| "xxl"`        | `'md'`      |
| `target`         | `target`          | Sets or retrieves the window or frame at which to target content.                                                       | `string`                                                 | `'_self'`   |
| `variant`        | `variant`         | Button variants. Possible values are `"default"`, `"light"`, `"outline"`, `"ghost"`, `"link"`. Defaults to `"default"`. | `"default" \| "ghost" \| "light" \| "link" \| "outline"` | `'default'` |


## Events

| Event        | Description                                                       | Type               |
| ------------ | ----------------------------------------------------------------- | ------------------ |
| `goat:click` | On click of button, a CustomEvent 'goat:click' will be triggered. | `CustomEvent<any>` |


## Methods

### `setBlur() => Promise<void>`

Sets blur on the native `button` in `goat-button`. Use this method instead of the global
`button.blur()`.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the native `button` in `goat-button`. Use this method instead of the global
`button.focus()`.

#### Returns

Type: `Promise<void>`



### `triggerClick() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [goat-calendar](../../data-display/calendar/calendar)
 - [goat-code-highlighter](../../data-display/code-highlighter)
 - [goat-empty-state](../../data-display/empty-state)
 - [goat-flow-designer](../../flow-designer/flow-designer)
 - [goat-input](../../data-entry/input)
 - [goat-notification](../../feedback/notification)
 - [goat-table](../../data-display/table)

### Depends on

- [goat-icon](../icon)
- [goat-spinner](../../feedback/spinner)

### Graph
```mermaid
graph TD;
  goat-button --> goat-icon
  goat-button --> goat-spinner
  goat-calendar --> goat-button
  goat-code-highlighter --> goat-button
  goat-empty-state --> goat-button
  goat-flow-designer --> goat-button
  goat-input --> goat-button
  goat-notification --> goat-button
  goat-table --> goat-button
  style goat-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
