# goat-table



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute        | Description                                                                                                                                                                                                                                   | Type         | Default     |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------- |
| `columns`         | --               | Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]                                                                                                    | `any[]`      | `[]`        |
| `dataSource`      | --               | Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }] | `any[]`      | `[]`        |
| `keyField`        | `key-field`      |                                                                                                                                                                                                                                               | `string`     | `'id'`      |
| `selectedRowKeys` | --               |                                                                                                                                                                                                                                               | `string[]`   | `[]`        |
| `selectionType`   | `selection-type` |                                                                                                                                                                                                                                               | `"checkbox"` | `undefined` |


## Events

| Event                      | Description | Type               |
| -------------------------- | ----------- | ------------------ |
| `goat:table-cell-click`    |             | `CustomEvent<any>` |
| `goat:table-select-change` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [goat-checkbox](../../form/checkbox)

### Graph
```mermaid
graph TD;
  goat-table --> goat-checkbox
  style goat-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*