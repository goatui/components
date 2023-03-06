# goat-code-editor



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description | Type      | Default               |
| ------------- | -------------- | ----------- | --------- | --------------------- |
| `language`    | `language`     |             | `string`  | `Language.javascript` |
| `lineNumbers` | `line-numbers` |             | `boolean` | `false`               |
| `value`       | `value`        |             | `string`  | `''`                  |


## Dependencies

### Depends on

- [goat-button](../../general/button)
- [goat-icon](../../general/icon)
- [goat-spinner](../../feedback/spinner)

### Graph
```mermaid
graph TD;
  goat-code-highlighter --> goat-button
  goat-code-highlighter --> goat-icon
  goat-code-highlighter --> goat-spinner
  goat-button --> goat-icon
  goat-button --> goat-spinner
  style goat-code-highlighter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
