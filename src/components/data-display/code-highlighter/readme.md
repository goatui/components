# goat-code-editor



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default               |
| ------------- | -------------- | ----------- | --------- | --------------------- |
| `format`      | `format`       |             | `boolean` | `true`                |
| `hideCopy`    | `hide-copy`    |             | `boolean` | `false`               |
| `language`    | `language`     |             | `string`  | `Language.javascript` |
| `lineNumbers` | `line-numbers` |             | `boolean` | `false`               |
| `value`       | `value`        |             | `string`  | `''`                  |


## Dependencies

### Depends on

- [goat-notification-manager](../../notification-manager)
- [goat-button](../../button)
- [goat-spinner](../../spinner)

### Graph
```mermaid
graph TD;
  goat-code-highlighter --> goat-notification-manager
  goat-code-highlighter --> goat-button
  goat-code-highlighter --> goat-spinner
  goat-notification-manager --> goat-toast
  goat-notification-manager --> goat-notification
  goat-toast --> goat-icon
  goat-notification --> goat-button
  goat-notification --> goat-icon
  goat-button --> goat-icon
  goat-button --> goat-spinner
  style goat-code-highlighter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
