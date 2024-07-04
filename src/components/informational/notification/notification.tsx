import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { isDarkMode, observeThemeChange } from '../../../utils/utils';

/**
 * @name Notification
 * @description Notifications are messages that communicate information to the user.
 * @category Feedback
 * @tags notification
 * @example <goat-notification state="success">
 *               <div slot='title'>Successful saved the record</div>
 *             </goat-notification>
 */
@Component({
  tag: 'goat-notification',
  styleUrl: 'notification.scss',
  shadow: true,
})
export class Notification implements ComponentInterface {
  @Element() elm!: HTMLElement;

  @Prop() state: 'success' | 'error' | 'info' | 'warning' = 'info';

  @Prop() highContrast: boolean = false;

  @Prop() dismissible: boolean = false;

  @Prop() actionable: boolean = true;
  @Prop() actionName: string = 'dismiss';
  @Prop() actionLabel: string = 'Dismiss';

  @Event({ eventName: 'goat:dismiss' }) goatDismiss: EventEmitter;

  @State() hidden: boolean = false;

  @State() isDarkMode: boolean = isDarkMode();

  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }

  render() {
    return (
      <Host hidden={this.hidden}>
        <div
          class={{
            'notification': true,
            'high-contrast': this.highContrast,
            [`state-${this.state}`]: true,
          }}
          role="alert"
        >
          <div class="state-icon">{this.renderStateIcon()}</div>
          <div class="content">
            <div class="title">
              <slot name="title" />
              <slot />
            </div>
            <div class="subtitle">
              <slot name="subtitle" />
            </div>
          </div>
          {this.renderAction()}
          {this.renderCloseButton()}
        </div>
      </Host>
    );
  }

  renderAction() {
    if (this.actionable)
      return (
        <div class="action">
          <slot name="action" />
        </div>
      );
  }

  renderCloseButton() {
    if (this.dismissible) {
      return (
        <div class="close-button-container">
          <goat-button
            class="close-button color-secondary"
            aria-label="Close alert"
            variant="link"
            kind="simple"
            onGoat-button-click={evt => {
              this.hidden = true;
              this.goatDismiss.emit(evt);
            }}
          >
            <goat-icon class="icon" size="1.5rem" name="close" />
          </goat-button>
        </div>
      );
    }
  }

  renderStateIcon() {
    if (this.state === 'success') {
      return <goat-icon class="inherit" name="checkmark--filled" />;
    } else if (this.state === 'error') {
      return <goat-icon class="inherit" name="error--filled" />;
    } else if (this.state === 'info') {
      return <goat-icon class="inherit" name="information--filled" />;
    } else if (this.state === 'warning') {
      return <goat-icon class="inherit" name="warning--filled" />;
    }
  }
}
