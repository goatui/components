import { r as registerInstance, h, e as Host, g as getElement } from './index-a0beba19.js';
import { c as isDarkMode, o as observeThemeChange } from './utils-5b2b26db.js';

const notificationManagerCss = "*{box-sizing:border-box}:host{font-family:var(--font-family-base)}::selection{color:var(--color-white, #ffffff);background:var(--color-primary, var(--color-blue-60, #0f62fe))}::-webkit-scrollbar{width:1rem;height:1rem}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb :hover{background:#555}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.center-content{display:flex;align-items:center;justify-content:center}:host([hidden]){display:none}@keyframes reveal{0%{opacity:0;transform:translateY(8px)}}@keyframes reveal{0%{opacity:0;transform:translateY(1rem)}}@keyframes hide{100%{opacity:0;transform:translateY(-1rem);visibility:hidden}}:host{display:block;position:absolute;z-index:var(--z-index-notification-manager, 100)}:host([name=global]){position:fixed;width:300px}.notification-manager{display:flex;flex-direction:column;margin:var(--spacing-4, 1rem)}.notification-manager .notification{animation:reveal 0.5s ease-in}.notification-manager .notification.hidden{visibility:hidden;opacity:0;transition:visibility 0s ease-out 1s, opacity 1s ease-out}:host([position=bottom-right]){bottom:0;right:0}:host([position=bottom-right]) .notification-manager{align-items:flex-end}:host([position=bottom-left]){bottom:0;left:0}:host([position=bottom-left]) .notification-manager{align-items:flex-start}:host([position=top-left]){top:0;left:0}:host([position=top-left]) .notification-manager{align-items:flex-start}:host([position=top-right]){top:0;right:0}:host([position=top-right]) .notification-manager{align-items:flex-end}";

const getNotificationIndex = (() => {
  let counter = 1;
  return (function () {
    return `${counter++}`;
  });
})();
const NotificationManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = 'global';
    this.position = 'bottom-right';
    this.notifications = [];
    this.isDarkMode = isDarkMode();
  }
  listenToast(evt) {
    if ((evt.detail.target === this.name || this.name === 'global') && !evt.detail.procced) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.detail.procced = true;
      const notification = {
        id: getNotificationIndex(),
        type: 'toast',
        message: evt.detail.message,
        state: evt.detail.state,
        hide: false,
      };
      this.notifications = this.notifications.concat([notification]).filter(n => !n.hide);
      setTimeout(() => {
        notification.hide = true;
        this.notifications = [...this.notifications];
      }, 5000);
    }
  }
  listenNotification(evt) {
    if ((evt.detail.target === this.name || this.name === 'global') && !evt.detail.procced) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.detail.procced = true;
      const notification = {
        id: getNotificationIndex(),
        type: 'notification',
        title: evt.detail.title,
        subtitle: evt.detail.subtitle,
        messageType: evt.detail.messageType,
        state: evt.detail.state,
        hide: false,
      };
      this.notifications = this.notifications.concat([notification]).filter(n => !n.hide);
      setTimeout(() => {
        notification.hide = true;
        this.notifications = [...this.notifications];
      }, 5000);
    }
  }
  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }
  renderNotification(notification) {
    if (notification.type) {
      switch (notification.type) {
        case 'toast':
          return (h("goat-toast", { id: `${notification.id}`, state: notification.state, message: notification.message }));
        case 'alert':
          return (h("goat-alert", Object.assign({}, notification.props)));
        case 'notification':
          return (h("goat-notification", { id: `${notification.id}`, state: notification.state }, h("div", { innerHTML: notification.title, slot: "title" }), h("div", { innerHTML: notification.subtitle, slot: "subtitle" })));
        default:
          return null;
      }
    }
  }
  render() {
    return (h(Host, null, h("div", { class: { 'notification-manager': true, [`position-${this.position}`]: true } }, this.notifications.map((notification) => (h("div", { class: { 'notification': true, 'hidden': notification.hide } }, this.renderNotification(notification)))))));
  }
  get elm() { return getElement(this); }
};
NotificationManager.style = notificationManagerCss;

export { NotificationManager as goat_notification_manager };

//# sourceMappingURL=goat-notification-manager.entry.js.map