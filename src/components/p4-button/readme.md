# p4-button



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                           | Type                                   | Default     |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `block`          | `block`           | If true, fits button width to its parent width. Defaults to `false`.                                  | `boolean`                              | `false`     |
| `disabled`       | `disabled`        | If true, the user cannot interact with the button. Defaults to `false`.                               | `boolean`                              | `false`     |
| `disabledReason` | `disabled-reason` |                                                                                                       | `string`                               | `''`        |
| `ghost`          | `ghost`           | If true, button styles are updated to work better on white background. Defaults to `false`.           | `boolean`                              | `false`     |
| `href`           | `href`            |                                                                                                       | `string`                               | `undefined` |
| `icon`           | `icon`            | Icon which will displayed on button. Possible values are bootstrap icon names.                        | `string`                               | `undefined` |
| `iconEnd`        | `icon-end`        | Icon position.                                                                                        | `boolean`                              | `false`     |
| `showLoader`     | `show-loader`     |                                                                                                       | `boolean`                              | `false`     |
| `size`           | `size`            | Button size. Possible values are `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.                          | `"lg" \| "md" \| "sm"`                 | `'md'`      |
| `target`         | `target`          |                                                                                                       | `"_blank" \| "_self"`                  | `'_self'`   |
| `variant`        | `variant`         | Button variants. Possible values are `"primary"`, `"secondary"`, `"danger"`. Defaults to `"primary"`. | `"danger" \| "primary" \| "secondary"` | `'primary'` |


## Events

| Event      | Description                                                     | Type               |
| ---------- | --------------------------------------------------------------- | ------------------ |
| `p4:click` | On click of button, a CustomEvent 'p4:click' will be triggered. | `CustomEvent<any>` |


## Dependencies

### Used by

 - [p4-alert](../p4-alert)

### Depends on

- [p4-icon](../p4-icon)
- [p4-spinner](../p4-spinner)

### Graph
```mermaid
graph TD;
  p4-button --> p4-icon
  p4-button --> p4-spinner
  p4-alert --> p4-button
  style p4-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
