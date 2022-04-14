import { Component, ComponentInterface, Element, h, Host, Prop, State } from '@stencil/core';
import { isDarkMode, observeThemeChange } from '../../../utils/utils';


/**
 * @name Toast
 * @description Toasts are lightweight notifications.
 * @example <goat-toast state="success" message="Successful saved the record"></goat-toast>
 */
@Component({
  tag: 'goat-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class Toast implements ComponentInterface {

  @Element() elm!: HTMLElement;

  @Prop() message: string = '';

  @Prop({ reflect: true }) state: 'success' | 'error' | 'info' | 'warning' = 'info';

  @State() isDarkMode: boolean = isDarkMode();

  componentWillLoad() {
    observeThemeChange(() => {
      this.isDarkMode = isDarkMode();
    });
  }

  renderStateIcon() {
    if (this.state === 'success') {
      return <goat-icon class='inherit' name='check-circle-fill' size='sm' />;
    } else if (this.state === 'error') {
      return <goat-icon class='inherit' name='x-circle-fill' size='sm' />;
    } else if (this.state === 'info') {
      return <goat-icon class='inherit' name='info-circle-fill' size='sm' />;
    } else if (this.state === 'warning') {
      return <goat-icon class='inherit' name='exclamation-circle-fill' size='sm' />;
    }
  }

  render() {
    return (
      <Host>
        <div class={{ 'toast': true, 'dark-mode': this.isDarkMode }} role='alert'>
          <div class='state-icon'>
            {this.renderStateIcon()}
          </div>
          <div class='content'>
            <div class='message'>
              {this.message}
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
