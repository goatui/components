# goat-button



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                       | Type     | Default     |
| -------- | --------- | ----------------------------------------------------------------- | -------- | ----------- |
| `href`   | `href`    | Hyperlink to navigate to on click.                                | `string` | `undefined` |
| `target` | `target`  | Sets or retrieves the window or frame at which to target content. | `string` | `undefined` |


## Methods

### `triggerClick() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [goat-breadcrumb-item](../breadcrumb/breadcrumb-item)
 - [goat-footer-copyright](../application/footer/footer-copyright)
 - [goat-footer-links](../application/footer/footer-links)
 - [goat-input-url](../input-controls/input/input-url)

### Graph
```mermaid
graph TD;
  goat-breadcrumb-item --> goat-link
  goat-footer-copyright --> goat-link
  goat-footer-links --> goat-link
  goat-input-url --> goat-link
  style goat-link fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with love!*
