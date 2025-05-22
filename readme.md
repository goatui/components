# 🐐 GoatUI Components

[![License](https://img.shields.io/github/license/goatui/components)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@goatui/components)](https://www.npmjs.com/package/@goatui/components)

GoatUI is a lightweight, modular web component library designed to simplify UI development with reusable, accessible, and performant components built using TypeScript, SCSS, and Astro.

## 🚀 Quick Start

### Installation

Install GoatUI components via npm or yarn:

```sh
npm install @goatui/components
# or
yarn add @goatui/components
```

### Basic Usage

Import the desired component into your application:

```typescript
import '@goatui/components/button';
```

Use the component directly in your HTML or JSX:

```html
<goat-button size="lg" color="primary">Click Me!</goat-button>
```

## 📚 Components

GoatUI components are categorized for easy discovery and usage:

### 🖱️ Inputs & Forms

Components for building interactive forms and capturing user input effectively:

- **Button (`goat-button`)**: Actionable buttons with multiple style variants.
- **Checkbox (`goat-checkbox`)**: Simple, stylable checkboxes for forms.
- **Input (`goat-input`)**: Text fields supporting various types (email, password, number).
- **Radio (`goat-radio`)**: Radio buttons for mutually exclusive selections.
- **Select (`goat-select`)**: Customizable dropdown select components.
- **Switch (`goat-switch`)**: Toggle switches for boolean inputs.

### 📖 Layout & Navigation

Components for structuring your application's layout and simplifying navigation:

- **Navbar (`goat-navbar`)**: Responsive navigation bar component.
- **Sidebar (`goat-sidebar`)**: Collapsible sidebar for navigation menus.
- **Tabs (`goat-tabs`)**: Tabbed content navigation with customizable styles.

### 🗂️ Data Display

Components tailored for displaying structured data clearly:

- **Table (`goat-table`)**: Versatile tables with sorting, pagination, and responsive features.
- **List (`goat-list`)**: Styled lists for items and navigation.
- **Card (`goat-card`)**: Flexible containers for content display.

### ⚠️ Feedback & Messaging

Components designed for user notifications, alerts, and feedback:

- **Alert (`goat-alert`)**: User-friendly notifications and alerts.
- **Modal (`goat-modal`)**: Accessible dialog windows for content and actions.
- **Tooltip (`goat-tooltip`)**: Informative tooltips on hover or focus.

### 🔄 Loaders & Progress Indicators

Indicate loading states or progress clearly:

- **Loader (`goat-loader`)**: Animated loading spinner.
- **Progress Bar (`goat-progress`)**: Visual indication of operation progress.

## 🎨 Customization

GoatUI components are fully customizable. Override default styles easily by importing SCSS variables:

```scss
@import '@goatui/components/styles/variables';

$primary-color: #4a90e2;
$border-radius: 8px;
```

## ♿ Accessibility

GoatUI components follow best practices for web accessibility (WCAG 2.1) ensuring your applications are usable by everyone.

## 🛠️ Development & Contribution

### Setup

Clone and install dependencies:

```sh
git clone https://github.com/goatui/components.git
cd components
npm install
npm run dev
```

### Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Testing

Run tests with Jest:

```sh
npm test
```

## 📄 License

GoatUI Components is open-source software licensed under the [MIT License](LICENSE).

---

Made with 💖 by the GoatUI Community.
