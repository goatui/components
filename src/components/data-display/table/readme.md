# goat-table



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute        | Description                                                                                                                                                                                                                                   | Type              | Default                                                                              |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------ |
| `columns`         | --               | Grid columns configuration. [ {   "name":"name",   "label":"Name",   "width":300,   "fixed":true  }, {   "name":"age",   "label":"Age" } ]                                                                                                    | `any[]`           | `[]`                                                                                 |
| `data`            | --               | Grid data to display on table [{  'id': '5e7118ddce4b3d577956457f',  'age': 21,  'name': 'John',  'company': 'India',  'email': 'john@example.com',  'phone': '+1 (839) 560-3581',  'address': '326 Irving Street, Grimsley, Texas, 4048'  }] | `any[]`           | `[]`                                                                                 |
| `emptyState`      | `empty-state`    |                                                                                                                                                                                                                                               | `any`             | `{     'title': 'No items',     'description': 'There are no items to display',   }` |
| `keyField`        | `key-field`      |                                                                                                                                                                                                                                               | `string`          | `'id'`                                                                               |
| `managed`         | `managed`        |                                                                                                                                                                                                                                               | `boolean`         | `false`                                                                              |
| `page`            | `page`           |                                                                                                                                                                                                                                               | `number`          | `1`                                                                                  |
| `pageSize`        | `page-size`      |                                                                                                                                                                                                                                               | `number`          | `10`                                                                                 |
| `paginate`        | `paginate`       |                                                                                                                                                                                                                                               | `boolean`         | `true`                                                                               |
| `selectedRowKeys` | --               |                                                                                                                                                                                                                                               | `string[]`        | `[]`                                                                                 |
| `selectionType`   | `selection-type` |                                                                                                                                                                                                                                               | `"checkbox"`      | `undefined`                                                                          |
| `sortBy`          | `sort-by`        |                                                                                                                                                                                                                                               | `string`          | `undefined`                                                                          |
| `sortOrder`       | `sort-order`     |                                                                                                                                                                                                                                               | `"asc" \| "desc"` | `'asc'`                                                                              |
| `sortable`        | `sortable`       |                                                                                                                                                                                                                                               | `boolean`         | `true`                                                                               |
| `totalItems`      | `total-items`    |                                                                                                                                                                                                                                               | `any`             | `undefined`                                                                          |


## Events

| Event                      | Description | Type               |
| -------------------------- | ----------- | ------------------ |
| `goat:page`                |             | `CustomEvent<any>` |
| `goat:sort`                |             | `CustomEvent<any>` |
| `goat:table-cell-click`    |             | `CustomEvent<any>` |
| `goat:table-select-change` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [goat-checkbox](../../data-entry/checkbox)
- [goat-button](../../general/button)
- [goat-form-control](../../data-entry/form-control)
- [goat-select](../../data-entry/select)
- [goat-text](../../general/text)
- [goat-empty-state](../empty-state)

### Graph
```mermaid
graph TD;
  goat-table --> goat-checkbox
  goat-table --> goat-button
  goat-table --> goat-form-control
  goat-table --> goat-select
  goat-table --> goat-text
  goat-table --> goat-empty-state
  goat-button --> goat-icon
  goat-button --> goat-spinner
  goat-select --> goat-icon
  goat-select --> goat-tag
  goat-select --> goat-spinner
  goat-select --> goat-menu
  goat-select --> goat-text
  goat-select --> goat-menu-item
  goat-tag --> goat-icon
  goat-menu --> goat-empty-state
  goat-empty-state --> goat-svg
  goat-empty-state --> goat-button
  style goat-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
