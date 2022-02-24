![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

Checkout the complete documentation over here -> https://ui.p4rm.com

# GOAT UI

GOAT UI contains most used web components built using Stencil. So you don't need to include any additional framework
dependencies, You can simply import required component js, and right away start using it.

## Getting Started

### Script tag

- Put a script tag similar to
  this `<script type="module" src="https://unpkg.com/@goatui/components@1.0.3/dist/p4rm-ui/p4rm-ui.esm.js"></script>` in the head
  of your index.html
- Include default font Roboto in the page
- Then you can use the element anywhere in your template, JSX, html etc

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width'>
  <title>P4RM Component</title>

  <!-- include your custom theme variable values, view variable names at https://unpkg.com/@goatui/components@1.0.2/dist/p4rm-ui/styles/theme.css -->
  <!--link rel="stylesheet" href="/custom-theme.css"></link-->
  <script type='module' src='https://unpkg.com/@goatui/components@1.2.5/dist/p4rm-ui/p4rm-ui.esm.js'></script>

</head>
<body>

<p4-button size='lg' variant='primary'>Click me</p4-button>

</body>
</html>
```

# Components

- 🟢 ready (feature complete for now)
- 🟡 beta (changes possible, not feature complete)
- 🔴 not ready (unstyled / no functions)
- 🔵 planned (created, but empty files)

| Name                                                          | Component         | State |
|---------------------------------------------------------------|-------------------|-------|
| [Alert](https://ui.p4rm.com/component/alert.html)             | p4-alert          | 🟡    |
| [Avatar](https://ui.p4rm.com/component/avatar.html)           | p4-avatar         | 🟢    |
| [Button](https://ui.p4rm.com/component/button)                | p4-button         | 🟢    |
| Card                                                          | p4-card           | 🔵    |
| Card Select                                                   | p4-cardselect     | 🔵    |
| [Checkbox](https://ui.p4rm.com/component/checkbox.html)       | p4-checkbox       | 🟡    |
| Chip                                                          | p4-chip           | 🔵    |
| [Code Editor](https://ui.p4rm.com/component/code-editor.html) | p4-card-editor    | 🟡    |
| Column                                                        | p4-col            | 🔵    |
| Color picker                                                  | p4-colorpicker    | 🔵    |
| Date picker                                                   | p4-datepicker     | 🔵    |
| Date Time picker                                              | p4-datetimepicker | 🔵    |
| Dialog                                                        | p4-dialog         | 🔵    |
| [Dropdown](https://ui.p4rm.com/component/p4-dropdown)         | p4-dropdown       | 🟡    |
| Filepicker                                                    | p4-filepicker     | 🔵    |
| Flow Designer                                                 | p4-flow-designer  | 🔵    |
| Form                                                          | p4-form           | 🔵    |
| Grid                                                          | p4-grid           | 🔵    |
| Group                                                         | p4-group          | 🔵    |
| [Icon](https://ui.p4rm.com/component/icon)                    | p4-icon           | 🟢    |
| [Input](https://ui.p4rm.com/component/input)                  | p4-input          | 🟡    |
| Modal                                                         | p4-modal          | 🔵    |
| Menu                                                          | p4-menu           | 🔵    |
| Month picker                                                  | p4-monthpicker    | 🔵    |
| Notification                                                  | p4-notification   | 🔵    |
| Observer                                                      | p4-observer       | 🔵    |
| Pagination                                                    | p4-pagination     | 🔵    |
| Radio Group                                                   | p4-radiogroup     | 🔵    |
| Row                                                           | p4-row            | 🔵    |
| [Select](https://ui.p4rm.com/component/select)                | p4-select         | 🟡    |
| Slider                                                        | p4-slider         | 🔵    |
| Spoiler                                                       | p4-spoiler        | 🔵    |
| Stepper                                                       | p4-stepper        | 🔵    |
| [Table](https://ui.p4rm.com/component/p4-table)               | p4-table          | 🟡    |
| Table head                                                    | p4-tablehead      | 🔵    |
| Table row                                                     | p4-tablerow       | 🔵    |
| Tabs                                                          | p4-tabs           | 🔵    |
| [Textarea](https://ui.p4rm.com/component/textarea)            | p4-textarea       | 🔵    |
| Time picker                                                   | p4-timepicker     | 🔵    |
| Toggle                                                        | p4-toggle         | 🔵    |
| Tooltip                                                       | p4-tooltip        | 🔵    |
| Week picker                                                   | p4-weekpicker     | 🔵    |
