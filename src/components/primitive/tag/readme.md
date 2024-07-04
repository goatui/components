# goat-heading



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                                                                                                           | Default  |
| ---------- | ----------- | ----------- | -------------------------------------------------------------------------------------------------------------- | -------- |
| `color`    | `color`     |             | `"blue" \| "error" \| "gray" \| "green" \| "info" \| "primary" \| "red" \| "success" \| "warning" \| "yellow"` | `'gray'` |
| `filter`   | `filter`    |             | `boolean`                                                                                                      | `false`  |
| `imageSrc` | `image-src` |             | `string`                                                                                                       | `''`     |
| `selected` | `selected`  |             | `boolean`                                                                                                      | `false`  |
| `size`     | `size`      | Text size.  | `"md" \| "sm"`                                                                                                 | `'md'`   |
| `value`    | `value`     |             | `string`                                                                                                       | `''`     |


## Events

| Event              | Description | Type               |
| ------------------ | ----------- | ------------------ |
| `goat:click`       |             | `CustomEvent<any>` |
| `goat:tag-dismiss` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [goat-cb-compound-expression](../../application/condition-builder/cb-compound-expression)
 - [goat-cb-predicate](../../application/condition-builder/cb-predicate)
 - [goat-code-editor](../../input-controls/code-editor)
 - [goat-condition-builder](../../application/condition-builder/condition-builder)
 - [goat-flow-designer](../../application/flow-designer/flow-designer)
 - [goat-select](../../input-controls/select)

### Depends on

- [goat-icon](../icon)

### Graph
```mermaid
graph TD;
  goat-tag --> goat-icon
  goat-cb-compound-expression --> goat-tag
  goat-cb-predicate --> goat-tag
  goat-code-editor --> goat-tag
  goat-condition-builder --> goat-tag
  goat-flow-designer --> goat-tag
  goat-select --> goat-tag
  style goat-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
