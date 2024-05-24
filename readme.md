# GOAT UI

[![Build](https://github.com/goatui/components/workflows/Build/badge.svg)](https://github.com/goatui/components/actions?workflow=Build)
[![GitHub license](https://img.shields.io/github/license/goatui/components.svg)](/LICENSE)
![Version](https://img.shields.io/npm/v/%40goatui%2Fcomponents)

GOAT UI contains most used web components built using Stencil. So you don't need to include any additional framework
dependencies, You can simply import required component js, and right away start using it.

Checkout the complete documentation over here -> https://goatui.com

<div align="center" style="background: #b1fc3f">
  <img alt="GOAT UI LOGO" src="https://raw.githubusercontent.com/goatui/components/gh-pages/assets/img/logo.png" width="210">
</div>

## Getting Started

### Script tag

- Put a script tag similar to
  this `<script type="module" src="https://cdn.jsdelivr.net/npm/@goatui/components@2.0.0-0/dist/goatui/goatui.esm.js"></script>`
  in
  the head of your index.html
- Include default font Roboto in the page
- Then you can use the element anywhere in your template, JSX, html etc

```html
<!doctype html>
<html lang='en'>
<head>
  <meta charset='utf-8' />
  <meta name='viewport' content='width=device-width' />
  <title>Goat UI Component</title>

  <!-- include your custom theme variable values, view variable names at https://cdn.jsdelivr.net/npm/@goatui/components@2.0.0-0/dist/goatui/assets/styles/theme.css -->
  <!--link rel="stylesheet" href="/custom-theme.css"></link-->
  <script type='module' src='https://cdn.jsdelivr.net/npm/@goatui/components@2.0.0-0/dist/goatui/goatui.esm.js'></script>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&family=IBM+Plex+Sans+Condensed:ital@0;1&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Serif:ital@0;1&display=swap');

    :root {
      --font-family-base: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    }
  </style>
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
| [Accordion](https://goatui.com/components/accordion)                       | goat-accordion            | 🟢    |
| [Avatar](https://goatui.com/components/avatar)                             | goat-avatar               | 🟢    |
| [Badge](https://goatui.com/components/badge)                               | goat-badge                | 🟢    |
| [Breadcrumb](https://goatui.com/components/breadcrumb)                     | goat-breadcrumb           | 🟢    |
| [Button](https://goatui.com/components/button)                             | goat-button               | 🟢    |
| [Button Group](https://goatui.com/components/button-group)                 | goat-button-group         | 🟢    |
| [Calendar](https://goatui.com/components/calendar)                         | goat-calendar             | 🟢    |
| Card                                                                       | goat-card                 | 🟡    |
| Card Select                                                                | goat-cardselect           | 🔵    |
| [Checkbox](https://goatui.com/components/checkbox)                         | goat-checkbox             | 🟢    |
| [Code Editor](https://goatui.com/components/code-editor)                   | goat-card-editor          | 🟢    |
| [Code Highlighter](https://goatui.com/components/code-highlighter)         | goat-card-highlighter     | 🟢    |
| Column                                                                     | goat-col                  | 🔵    |
| Color picker                                                               | goat-colorpicker          | 🔵    |
| [Date picker](https://goatui.com/components/date-picker)                   | goat-date-picker          | 🟡    |
| Date Time picker                                                           | goat-datetime-picker      | 🔵    |
| Dialog                                                                     | goat-dialog               | 🔵    |
| [Dropdown](https://goatui.com/components/dropdown)                         | goat-dropdown             | 🟡    |
| [Empty State](https://goatui.com/components/empty-state)                   | goat-empty-state          | 🟡    |
| Filepicker                                                                 | goat-filepicker           | 🔵    |
| [Flow Designer ](https://goatui.com/components/flow-designer)              | goat-flow-designer        | 🔵    |
| [Form Control](https://goatui.com/components/form-control)                 | goat-form-control         | 🟡    |
| Grid                                                                       | goat-grid                 | 🔵    |
| Group                                                                      | goat-group                | 🔵    |
| [Header](https://goatui.com/components/header)                             | goat-header               | 🟢    |
| [Icon](https://goatui.com/components/icon)                                 | goat-icon                 | 🟢    |
| [Input](https://goatui.com/components/input)                               | goat-input                | 🟢    |
| [Link](https://goatui.com/components/link)                                 | goat-link                 | 🟢    |
| [Modal](https://goatui.com/components/modal)                               | goat-modal                | 🟢    |
| [Menu](https://goatui.com/components/menu)                                 | goat-menu                 | 🟡    |
| Month picker                                                               | goat-month-picker         | 🔵    |
| [Notification](https://goatui.com/components/notification)                 | goat-notification         | 🟢    |
| [Notification Manager](https://goatui.com/components/notification-manager) | goat-notification-manager | 🟡    |
| Observer                                                                   | goat-observer             | 🔵    |
| Pagination                                                                 | goat-pagination           | 🔵    |
| [Progress](https://goatui.com/components/progress)                         | goat-progress             | 🟢    |
| Radio Group                                                                | goat-radiogroup           | 🔵    |
| Row                                                                        | goat-row                  | 🔵    |
| [Select](https://goatui.com/components/select)                             | goat-select               | 🟢    |
| [Slider](https://goatui.com/components/slider)                             | goat-slider               | 🟡    |
| [Spinner](https://goatui.com/components/spinner)                           | goat-spinner              | 🟢    |
| Spoiler                                                                    | goat-spoiler              | 🔵    |
| Stepper                                                                    | goat-stepper              | 🔵    |
| [Table](https://goatui.com/components/table)                               | goat-table                | 🟡    |
| [Tabs](https://goatui.com/components/tabs)                                 | goat-tabs                 | 🟢    |
| [Tag](https://goatui.com/components/tag) / Chip                            | goat-tag                  | 🟢    |
| [Text](https://goatui.com/components/text)                                 | goat-text                 | 🟢    |
| [Textarea](https://goatui.com/components/textarea)                         | goat-textarea             | 🟢    |
| [Time picker](https://goatui.com/components/time-picker)                   | goat-time-picker          | 🟡    |
| [Tree View](https://goatui.com/components/tree-view)                       | goat-tree-view            | 🟡    |
| [Toast](https://goatui.com/components/toast)                               | goat-toast                | 🟢    |
| [Toggle](https://goatui.com/components/toggle)                             | goat-toggle               | 🟢    |
| [Tooltip](https://goatui.com/components/tooltip)                   | goat-tooltip              | 🟢    |
| Week picker                                                                | goat-week-picker          | 🔵    |

## Charts
| Name                                                           | Component           | State |
|----------------------------------------------------------------|---------------------|-------|
| [Doughnut Chart](https://goatui.com/components/chart-doughnut) | goat-chart-doughnut | 🟢   |
| [Pie Chart ](https://goatui.com/components/chart-pie)          | goat-chart-pie      | 🟢   |
