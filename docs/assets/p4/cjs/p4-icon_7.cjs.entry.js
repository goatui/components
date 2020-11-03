'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9711ecf8.js');
const utils = require('./utils-e2589673.js');

const Alarm = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-alarm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg>`;

const ChevronLeft = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>`;

const ChevronRight = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

const ChevronDown = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>`;

const ChevronUp = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>`;

const House = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>`;

const Book = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-book" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
</svg>`;

const ColumnsGap = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-columns-gap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"/>
</svg>`;

const Search = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg>`;

const PieChartFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pie-chart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.985 8.5H8.207l-5.5 5.5a8 8 0 0 0 13.277-5.5zM2 13.292A8 8 0 0 1 7.5.015v7.778l-5.5 5.5zM8.5.015V7.5h7.485A8.001 8.001 0 0 0 8.5.015z"/>
</svg>`;

const Tools = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
  <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg>`;

const Trash = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`;

const X = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`;

const Envelope = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
</svg>`;

const InboxFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-inbox-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg>`;

const Inbox = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-inbox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
</svg>`;

const InfoCircle = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
  <circle cx="8" cy="4.5" r="1"/>
</svg>`;

const InfoCircleFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>`;

const CaretDownFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>`;

const CaretUpFill = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>`;

const Pencil = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>`;

const Info = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
  <circle cx="8" cy="4.5" r="1"/>
</svg>`;

const p4IconCss = ":host{display:inline-block;color:var(--color-gray-10, #36363e)}:host-context(.item){--color:initial;color:var(--color)}:host(.danger){color:var(--color-red-6, #ff4c47)}:host(.success){color:var(--color-green-6, #48ff4d)}:host(.primary){color:var(--color-primary, var(--color-indigo-6, #4c48ff))}";

const ICONS = {
  'alarm': Alarm,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  'chevron-down': ChevronDown,
  'envelope': Envelope,
  'house': House,
  'book': Book,
  'columns-gap': ColumnsGap,
  'search': Search,
  'pie-chart-fill': PieChartFill,
  'tools': Tools,
  'trash': Trash,
  'x': X,
  'inbox-fill': InboxFill,
  'inbox': Inbox,
  'info-circle': InfoCircle,
  'info-circle-fill': InfoCircleFill,
  'caret-down-fill': CaretDownFill,
  'caret-up-fill': CaretUpFill,
  'pencil': Pencil,
  'info': Info
};
const P4Icon = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = 'alarm';
    /**
     * Icon variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getCssClasses() {
    const cls = ['icon-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    let Icon = ICONS[this.type];
    if (!Icon)
      return null;
    Icon = Icon.replace('width="1em"', 'width="' + this.getSize() + '"').replace('height="1em"', 'height="' + this.getSize() + '"');
    return (index.h(index.Host, null, index.h("div", { innerHTML: Icon, class: this.getCssClasses() })));
  }
};
P4Icon.style = p4IconCss;

const p4InputCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}.input-component{}.input-component.size-lg{height:2.75rem}.input-component.size-md{height:2rem}.input-component.size-sm{height:1.5rem}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

let inputIds = 0;
const P4Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.p4Input = index.createEvent(this, "p4Input", 7);
    this.p4Change = index.createEvent(this, "p4Change", 7);
    this.p4Blur = index.createEvent(this, "p4Blur", 7);
    this.p4Focus = index.createEvent(this, "p4Focus", 7);
    this.inputId = `p4-input-${inputIds++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The input field value.
     */
    this.value = '';
    /**
     * The input field size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Input field variants to add additional styling
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The type of control to display. The default type is text.
     */
    this.type = 'text';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `p4Change` event after each keystroke.
     */
    this.debounce = 0;
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */
    this.autocomplete = 'off';
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  getCssClasses() {
    const cls = ['input-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ') + ' ';
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.p4Change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  debounceChanged() {
    this.p4Change = utils.debounceEvent(this.p4Change, this.debounce);
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }
  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.el,
    }));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.el,
    }));
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() :
      (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = utils.findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, index.h("div", { class: this.getCssClasses() }, index.h("input", { class: "native-input", name: this.name, "aria-labelledby": labelId, ref: input => this.nativeInput = input, type: this.type, placeholder: this.placeholder, autocomplete: this.autocomplete, value: value, tabindex: this.tabindex, required: this.required, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, disabled: this.disabled }), index.h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && index.h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, index.h("p4-icon", { type: "x", size: "1.1rem", class: "icon" }))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "debounce": ["debounceChanged"]
  }; }
};
P4Input.style = p4InputCss;

const p4ItemCss = ":host{display:block}";

const P4Item = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
P4Item.style = p4ItemCss;

const p4LabelCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}:host-context(.item){--color:initial;display:block;color:var(--color);font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}:host([text-wrap]){white-space:normal}::slotted(*) h1,::slotted(*) h2,::slotted(*) h3,::slotted(*) h4,::slotted(*) h5,::slotted(*) h6{text-overflow:inherit;overflow:inherit}.label-component{padding-bottom:0.5rem;display:inline-block}:host(.required)::before{display:inline-block;margin-right:4px;color:var(--color-red-6, #ff4c47);font-size:14px;font-family:SimSun, sans-serif;line-height:1;content:\"*\"}";

const P4Label = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "label-component" }, index.h("slot", null))));
  }
};
P4Label.style = p4LabelCss;

const p4SelectCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}.select-component{}.select-component.mode-read .native-input{display:none}.select-component.mode-edit .select-selection-item{display:none}.select-component .select-result{position:absolute;top:110%;width:100%;left:0;padding:0.2rem 0;z-index:1000;background-color:white;box-shadow:0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);transition:background 1s cubic-bezier(0.075, 0.82, 0.165, 1)}.select-component .select-result .select-option{padding:0.25rem 0.75rem;cursor:pointer}.select-component .select-result .select-option.select-option-active{background-color:var(--color-gray-2, #eef0f2)}.select-component .no-data{text-align:center;color:var(--color-gray-8, #626175);padding:15px}.select-component .no-data p4-icon{max-height:4em;max-width:4em}.select-component .no-data .no-data-text{font-size:1.2em}.select-component.size-lg{height:2.75rem}.select-component.size-lg .display-value{line-height:2}.select-component.size-md{height:2rem}.select-component.size-sm{height:1.5rem}.select-component.size-sm .display-value{line-height:1}";

let inputIds$1 = 0;
const P4Select = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.p4Input = index.createEvent(this, "p4Input", 7);
    this.p4Change = index.createEvent(this, "p4Change", 7);
    this.p4ActionClick = index.createEvent(this, "p4ActionClick", 7);
    this.p4Blur = index.createEvent(this, "p4Blur", 7);
    this.p4Focus = index.createEvent(this, "p4Focus", 7);
    this.inputId = `p4-select-${inputIds$1++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    this.showLoader = false;
    this.filterOptions = true;
    this.config = { itemValue: 'value', itemLabel: 'label' };
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.options = [];
    this.actions = [];
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `onChange` event after each keystroke.
     */
    this.debounce = 0;
    this.mode = 'read';
    this.searchString = '';
    this.onChange = (item) => {
      if (!this.disabled) {
        this.setReadable();
        this.value = this.getItemValue(item);
        this.searchString = '';
        this.p4Change.emit(item);
      }
    };
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.searchString = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onKeyDown = (ev) => {
      if (ev.key === 'Enter') {
        if (this.activeOption)
          this.onChange(this.activeOption);
      }
      else if (ev.key === 'ArrowDown') {
        const options = this.getDisplayOptions();
        if (!this.activeOption)
          this.activeOption = options[0];
        else {
          const index = options.findIndex((option) => {
            return this.getItemValue(option) == this.getItemValue(this.activeOption);
          });
          this.activeOption = options[(index + 1) % options.length];
        }
      }
      else if (ev.key === 'ArrowUp') {
        const options = this.getDisplayOptions();
        if (!this.activeOption)
          this.activeOption = options[options.length - 1];
        else {
          const index = options.findIndex((option) => {
            return this.getItemValue(option) == this.getItemValue(this.activeOption);
          });
          this.activeOption = options[((options.length + index - 1) % options.length)];
        }
      }
    };
    this.onActionClick = (action) => {
      this.p4ActionClick.emit(action.name);
    };
    this.setEditable = () => {
      if (!this.disabled && this.mode == 'read') {
        if (this.options.length)
          this.activeOption = this.options[0];
        this.mode = 'edit';
        setTimeout(() => {
          this.setFocus();
        }, 100);
      }
    };
    this.setReadable = () => {
      if (!this.disabled && this.mode == 'edit') {
        this.mode = 'read';
      }
    };
    this.onBlur = () => {
      this.hasFocus = false;
      setTimeout(() => {
        this.setReadable();
      }, 300);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter')
        this.clearTextInput(ev);
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = null;
      this.searchString = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.p4Change = utils.debounceEvent(this.p4Change, this.debounce);
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  optionsWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    }
  }
  configWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.config = JSON.parse(newValue);
    }
  }
  getOptionLabelByValue(value) {
    if (typeof this.options !== 'string') {
      const item = this.options.find((item) => {
        return this.getItemValue(item) === value;
      });
      if (item)
        return this.getItemLabel(item);
      else
        return this.placeholder;
    }
  }
  getItemValue(item) {
    return item[this.config.itemValue];
  }
  getItemLabel(item) {
    return item[this.config.itemLabel];
  }
  hasValue() {
    return (this.value || '').toString().length > 0;
  }
  getComponentStyleClasses() {
    const cls = ['component input-component select-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('mode-' + this.mode);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }
  getActions() {
    return this.actions.map((action) => {
      return index.h("button", { type: "button", onClick: () => this.onActionClick(action) }, index.h("p4-icon", { type: action.icon, size: "1rem", class: "icon" }));
    });
  }
  getModeIcon() {
    if (this.showLoader)
      return index.h("button", { type: "button", disabled: true }, index.h("p4-spinner", { class: "icon", size: "1.5rem" }));
    else if (this.mode === 'read') {
      return index.h("button", { type: "button", onClick: () => setTimeout(() => this.setEditable()) }, index.h("p4-icon", { type: "chevron-down", size: "1rem", class: "icon" }));
    }
    else {
      return index.h("button", { type: "button", disabled: true }, index.h("p4-icon", { type: "search", size: "1rem", class: "icon" }));
    }
  }
  getDisplayOptions() {
    let options = [];
    if (typeof this.options !== 'string') {
      options = this.options;
      if (this.filterOptions)
        options = this.options.filter((item) => {
          return (!this.searchString || this.getItemLabel(item).toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
        });
    }
    return options;
  }
  getOptions() {
    if (typeof this.options !== 'string') {
      const options = this.getDisplayOptions();
      if (this.mode == 'edit')
        return index.h("div", { class: "select-result" }, index.h("div", { class: "select-items" }, options.length ?
          options.map((item) => {
            return index.h("div", { class: {
                'select-option': true,
                'select-option-active': (this.activeOption && this.getItemValue(item) === this.getItemValue(this.activeOption)),
              }, "data-value": this.getItemValue(item), "on-mouseover": () => {
                this.activeOption = item;
              }, "on-click": () => this.onChange(item) }, this.getItemLabel(item));
          })
          :
            (!this.searchString && !this.filterOptions && !this.showLoader) ?
              (index.h("div", { class: "no-data" }, index.h("p4-icon", { type: "pencil", size: "100%" }), index.h("div", { class: "no-data-text" }, "Please enter text to search")))
              : (index.h("div", { class: "no-data" }, index.h("p4-icon", { type: "inbox-fill", size: "100%" }), index.h("div", { class: "no-data-text" }, "No data")))));
    }
  }
  async componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
    this.optionsWatcher(this.options);
    this.configWatcher(this.config);
  }
  render() {
    const labelId = this.inputId + '-lbl';
    const label = utils.findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, index.h("div", { class: this.getComponentStyleClasses() }, index.h("input", { class: "native-input", ref: input => this.nativeInput = input, type: "text", "aria-labelledby": labelId, name: this.name, value: this.searchString, placeholder: this.placeholder, tabindex: this.tabindex, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, onKeyDown: this.onKeyDown }), index.h("div", { class: "select-selection-item display-value", tabindex: "1", onFocus: this.setEditable, onClick: this.setEditable }, this.getOptionLabelByValue(this.value)), index.h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && index.h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, index.h("p4-icon", { type: "x", size: "1.1rem", class: "icon" })), this.getActions(), this.getModeIcon()), this.getOptions())));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "options": ["optionsWatcher"],
    "config": ["configWatcher"]
  }; }
};
P4Select.style = p4SelectCss;

const p4SpinnerCss = ":host{display:inline-block}.spinner-component.variant-default{color:var(--color-black, #000)}.spinner-component.variant-primary{color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.spinner-component.variant-danger{color:var(--color-red-6, #ff4c47)}.spinner-component.variant-success{color:var(--color-green-6, #48ff4d)}";

const P4Spinner = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Spinner variants to add additional styling
     * Possible values are `"default"`, `"primary"`, `"danger"`, `"success"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * The Icon size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
  }
  getSize() {
    let size = '16px';
    if (this.size === 'lg')
      size = '32px';
    else if (this.size === 'sm')
      size = '12px';
    else if (this.size === 'md')
      size = '16px';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }
  getCssClasses() {
    const cls = ['spinner-component'];
    cls.push('variant-' + this.variant);
    return cls.join(' ');
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: this.getCssClasses() }, index.h("svg", { version: "1.1", class: "loader icon-svg", x: "0px", y: "0px", width: this.getSize(), height: this.getSize(), viewBox: "0 0 50 50", fill: "currentColor" }, index.h("path", { fill: "#000", d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" }, index.h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))))));
  }
};
P4Spinner.style = p4SpinnerCss;

const p4TextareaCss = "*{box-sizing:border-box}::selection{color:#fff;background:#1890ff}:host{display:block}.input-component{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);position:relative;display:flex;box-sizing:border-box;min-width:0;margin-bottom:var(--space-3, 0.75rem);background-color:var(--color-white, #fff);border:1px solid var(--color-gray-6, #9f9eb2);font-variant:tabular-nums;list-style:none;font-feature-settings:\"tnum\";width:100%;color:var(--color-gray-5, #aaa9bb);line-height:1.5715;background-image:none;border-radius:2px;transition:all 0.3s;text-align:start;font-weight:400;letter-spacing:normal;cursor:text;}.input-component .native-input,.input-component .display-value{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);flex:1;border:none;outline:none;background:0 0;height:100%;width:100%;cursor:inherit;padding:0.25rem 0.75rem}.input-component .native-input::placeholder,.input-component .display-value::placeholder{color:#bfbfbf}.input-component .input-actions{line-height:0;display:flex}.input-component .input-actions>*:last-child{margin-right:0.5rem}.input-component .input-actions>*{height:100%;background:transparent;border:none;box-shadow:none;margin-left:0.5rem;padding:0;line-height:0}.input-component .input-actions .input-clear-icon{cursor:pointer}.input-component:not(.disabled):hover{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff))}.input-component:not(.disabled):hover .input-clear-icon{display:inline-block}.input-component.size-lg .native-input,.input-component.size-lg .display-value{font-size:var(--font-size-5, 1rem)}.input-component.size-md .native-input,.input-component.size-md .display-value{font-size:var(--font-size-4, 0.875rem)}.input-component.size-sm .native-input,.input-component.size-sm .display-value{font-size:var(--font-size-3, 0.8125rem)}.input-component.variant-dashed{border-style:dashed}.input-component.disabled{background-color:#f5f5f5;cursor:not-allowed;opacity:1}:host(.has-focus) .input-component{color:var(--color-primary, var(--color-indigo-6, #4c48ff));border-color:var(--color-primary, var(--color-indigo-6, #4c48ff));outline:0;box-shadow:0 0 0 2px var(--color-blue-3, #afd4ff)}:host(.has-focus) .input-component .input-clear-icon{display:inline-block}:host(.danger){}:host(.danger) .input-component{border-color:var(--color-red-6, #ff4c47)}:host(.danger) .input-component:hover{border-color:var(--color-red-6, #ff4c47);box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-focus.danger) .input-component{box-shadow:0 0 0 2px var(--color-red-3, #ffbbb9)}:host(.has-value) .display-value{color:var(--color-gray-10, #36363e)}.textarea-component textarea.native-input{font-family:var(--font-normal, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol);resize:vertical}.textarea-component .input-actions{position:absolute;right:0;top:0;height:2rem}";

let inputIds$2 = 0;
const P4Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.p4Input = index.createEvent(this, "p4Input", 7);
    this.p4Change = index.createEvent(this, "p4Change", 7);
    this.p4Blur = index.createEvent(this, "p4Blur", 7);
    this.p4Focus = index.createEvent(this, "p4Focus", 7);
    this.inputId = `p4-textarea-${inputIds$2++}`;
    this.hasFocus = false;
    /**
     * The input field name.
     */
    this.name = this.inputId;
    /**
     * The button size.
     * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
     */
    this.size = 'md';
    /**
     * Button variants
     * Possible values are `"default"`, `"dashed"`. Defaults to `"default"`.
     */
    this.variant = 'default';
    /**
     * If true, the form will be in inline format. Defaults to `false`.
     */
    this.inline = false;
    /**
     * Button variants
     * Possible values are `"text"`. Defaults to `"text"`.
     */
    this.type = 'text';
    /**
     * If true, the user cannot interact with the button. Defaults to `false`.
     */
    this.disabled = false;
    /**
     * If true, required icon is show. Defaults to `false`.
     */
    this.required = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */
    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */
    this.debounce = 0;
    this.onInputChange = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.p4Input.emit(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.p4Blur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.p4Focus.emit(ev);
    };
    this.clearTextOnEnter = (ev) => {
      if (ev.key === 'Enter') {
        this.clearTextInput(ev);
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
  }
  debounceChanged() {
    this.p4Change = utils.debounceEvent(this.p4Change, this.debounce);
  }
  getCssClasses() {
    const cls = ['component input-component textarea-component'];
    cls.push('variant-' + this.variant);
    cls.push('size-' + this.size);
    cls.push('type-' + this.type);
    if (this.required)
      cls.push('required');
    if (this.disabled)
      cls.push('disabled');
    return cls.join(' ');
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Sets blur on the native `input` in `ion-input`. Use this method instead of the global
   * `input.blur()`.
   */
  async setBlur() {
    if (this.nativeInput) {
      this.nativeInput.blur();
    }
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.p4Change.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // ion-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }
  connectedCallback() {
    this.debounceChanged();
    document.dispatchEvent(new CustomEvent('p4InputDidLoad', {
      detail: this.el,
    }));
  }
  disconnectedCallback() {
    document.dispatchEvent(new CustomEvent('p4InputDidUnload', {
      detail: this.el,
    }));
  }
  getValue() {
    return (this.value || '').toString();
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = utils.findItemLabel(this.el);
    if (label) {
      label.id = labelId;
      if (this.required)
        label.classList.add('required');
    }
    return (index.h(index.Host, { "aria-disabled": this.disabled ? 'true' : null, class: { 'has-focus': this.hasFocus, 'has-value': this.hasValue() } }, index.h("div", { class: this.getCssClasses() }, index.h("textarea", { rows: 4, ref: input => this.nativeInput = input, required: this.required, class: "native-input", name: this.name, "aria-labelledby": labelId, placeholder: this.placeholder, value: value, tabindex: this.tabindex, onInput: this.onInputChange, onBlur: this.onBlur, onFocus: this.onFocus, disabled: this.disabled }), index.h("div", { class: "input-actions" }, (this.clearInput && !this.disabled && this.hasValue()) && index.h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput, onKeyDown: this.clearTextOnEnter }, index.h("p4-icon", { type: "x", size: "1.1rem", class: "icon" }))))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "debounce": ["debounceChanged"],
    "value": ["valueChanged"]
  }; }
};
P4Textarea.style = p4TextareaCss;

exports.p4_icon = P4Icon;
exports.p4_input = P4Input;
exports.p4_item = P4Item;
exports.p4_label = P4Label;
exports.p4_select = P4Select;
exports.p4_spinner = P4Spinner;
exports.p4_textarea = P4Textarea;
