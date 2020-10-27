# p4-grid



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                        | Type         | Default     |
| --------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------- |
| `columnConfig`  | --               | The grid columns configuration. Sample [{"name":"name","label":"Name","width":300,"fixed":true},{"name":"age","label":"Age"},{"name":"eyeColor","label":"Eye Color","width":500}]. | `any[]`      | `[]`        |
| `data`          | --               |                                                                                                                                                                                    | `any[]`      | `[]`        |
| `rowKey`        | `row-key`        |                                                                                                                                                                                    | `string`     | `'id'`      |
| `selectionType` | `selection-type` |                                                                                                                                                                                    | `"checkbox"` | `undefined` |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `p4CellClick`    |             | `CustomEvent<any>` |
| `p4SelectChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [p4-checkbox](../p4-checkbox)

### Graph
```mermaid
graph TD;
  p4-grid --> p4-checkbox
  style p4-grid fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
