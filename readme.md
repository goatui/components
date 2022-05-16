![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![Build](https://github.com/goatui/components/workflows/Build/badge.svg)](https://github.com/goatui/components/actions?workflow=Build)

Checkout the complete documentation over here -> https://goatui.com

# GOAT UI

GOAT UI contains most used web components built using Stencil. So you don't need to include any additional framework
dependencies, You can simply import required component js, and right away start using it.

## Getting Started

### Script tag

- Put a script tag similar to
  this `<script type="module" src="https://unpkg.com/@goatui/components@0.9.9/dist/goatui/goatui.esm.js"></script>` in
  the head of your index.html
- Include default font Roboto in the page
- Then you can use the element anywhere in your template, JSX, html etc

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width'>
  <title>Goat UI Component</title>

  <!-- include your custom theme variable values, view variable names at https://unpkg.com/@goatui/components@0.9.9/dist/goatui/assets/styles/theme.css -->
  <!--link rel="stylesheet" href="/custom-theme.css"></link-->
  <script type='module' src='https://unpkg.com/@goatui/components@0.9.9/dist/goatui/goatui.esm.js'></script>

</head>
<body>

<goat-button size='lg' color='primary'>Click me</goat-button>

</body>
</html>
```

# Components

- 🟢 ready (feature complete for now)
- 🟡 beta (changes possible, not feature complete)
- 🔴 not ready (unstyled / no functions)
- 🔵 planned (created, but empty files)

| Name                                                                       | Component                 | State |
|----------------------------------------------------------------------------|---------------------------|-------|
| [Avatar](https://goatui.com/components/avatar)                             | goat-avatar               | 🟢    |
| [Badge](https://goatui.com/components/badge)                               | goat-badge                | 🟡    |
| [Breadcrumb](https://goatui.com/components/breadcrumb)                     | goat-breadcrumb           | 🟢    |
| [Button](https://goatui.com/components/button)                             | goat-button               | 🟢    |
| [Button Group](https://goatui.com/components/button-group)                 | goat-button-group         | 🟢    |
| Card                                                                       | goat-card                 | 🟡    |
| Card Select                                                                | goat-cardselect           | 🔵    |
| [Checkbox](https://goatui.com/components/checkbox)                         | goat-checkbox             | 🟢    |
| Chip                                                                       | goat-chip                 | 🔵    |
| [Code Editor](https://goatui.com/components/code-editor)                   | goat-card-editor          | 🟢    |
| [Code Highlighter](https://goatui.com/components/code-highlighter)         | goat-card-highlighter     | 🟢    |
| Column                                                                     | goat-col                  | 🔵    |
| Color picker                                                               | goat-colorpicker          | 🔵    |
| Date picker                                                                | goat-datepicker           | 🔵    |
| Date Time picker                                                           | goat-datetimepicker       | 🔵    |
| Dialog                                                                     | goat-dialog               | 🔵    |
| [Dropdown](https://goatui.com/components/goat-dropdown)                    | goat-dropdown             | 🟡    |
| [Empty State](https://goatui.com/components/goat-empty-state)              | goat-empty-state          | 🟡    |
| Filepicker                                                                 | goat-filepicker           | 🔵    |
| Flow Designer                                                              | goat-flow-designer        | 🔵    |
| [Form Control](https://goatui.com/components/goat-form-control)            | goat-form-control         | 🟡    |
| Grid                                                                       | goat-grid                 | 🔵    |
| Group                                                                      | goat-group                | 🔵    |
| [Header](https://goatui.com/components/header)                             | goat-header               | 🟢    |
| [Icon](https://goatui.com/components/icon)                                 | goat-icon                 | 🟢    |
| [Input](https://goatui.com/components/input)                               | goat-input                | 🟢    |
| [Link](https://goatui.com/components/link)                                 | goat-link                 | 🟢    |
| Modal                                                                      | goat-modal                | 🔵    |
| [Menu](https://goatui.com/components/menu)                                 | goat-menu                 | 🟡    |
| Month picker                                                               | goat-monthpicker          | 🔵    |
| [Notification](https://goatui.com/components/notification)                 | goat-notification         | 🟢    |
| [Notification Manager](https://goatui.com/components/notification-manager) | goat-notification-manager | 🟡    |
| Observer                                                                   | goat-observer             | 🔵    |
| Pagination                                                                 | goat-pagination           | 🔵    |
| Radio Group                                                                | goat-radiogroup           | 🔵    |
| Row                                                                        | goat-row                  | 🔵    |
| [Select](https://goatui.com/components/select)                             | goat-select               | 🟢    |
| Slider                                                                     | goat-slider               | 🔵    |
| [Spinner](https://goatui.com/components/spinner)                           | goat-spinner              | 🟢    |
| Spoiler                                                                    | goat-spoiler              | 🔵    |
| Stepper                                                                    | goat-stepper              | 🔵    |
| [Table](https://goatui.com/components/table)                               | goat-table                | 🟡    |
| Table head                                                                 | goat-tablehead            | 🔵    |
| Table row                                                                  | goat-tablerow             | 🔵    |
| [Tabs](https://goatui.com/components/tabs)                                 | goat-tabs                 | 🔵    |
| [Text](https://goatui.com/components/text)                                 | goat-text                 | 🟡    |
| [Textarea](https://goatui.com/components/textarea)                         | goat-textarea             | 🟢    |
| Time picker                                                                | goat-timepicker           | 🔵    |
| [Toast](https://goatui.com/components/toast)                               | goat-toast                | 🟢    |
| Toggle                                                                     | goat-toggle               | 🔵    |
| Tooltip                                                                    | goat-tooltip              | 🔵    |
| Week picker                                                                | goat-weekpicker           | 🔵    |
