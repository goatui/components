# goat-menu-item



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                             | Type      | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | If true, the user cannot interact with the button. Defaults to `false`. | `boolean` | `false`     |
| `heading`  | `heading`  | The menu item value.                                                    | `string`  | `'Heading'` |
| `open`     | `open`     | Menu item selection state.                                              | `boolean` | `false`     |


## Events

| Event                  | Description                            | Type               |
| ---------------------- | -------------------------------------- | ------------------ |
| `goat:menu-item-click` | Emitted when the menu item is clicked. | `CustomEvent<any>` |


## Shadow Parts

| Part      | Description |
| --------- | ----------- |
| `"title"` |             |


## Dependencies

### Depends on

- [goat-icon](../../../../general/icon)

### Graph
```mermaid
graph TD;
  goat-accordion-item --> goat-icon
  style goat-accordion-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
