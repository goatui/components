# p4-top-navigation



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type       | Default    |
| ----------- | ------------ | ----------- | ---------- | ---------- |
| `brandLogo` | `brand-logo` |             | `string`   | `''`       |
| `brandName` | `brand-name` |             | `string`   | `''`       |
| `brandUrl`  | `brand-url`  |             | `string`   | `'#'`      |
| `pageTitle` | `page-title` |             | `string`   | `''`       |
| `type`      | `type`       |             | `"simple"` | `'simple'` |


## Dependencies

### Depends on

- [goat-button](../../controls/button)
- [goat-svg](../../content/svg)
- [goat-divider](../../content/divider)

### Graph
```mermaid
graph TD;
  goat-header --> goat-button
  goat-header --> goat-svg
  goat-header --> goat-divider
  goat-button --> goat-icon
  goat-button --> goat-spinner
  style goat-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
