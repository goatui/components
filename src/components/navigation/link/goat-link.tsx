import { Component, ComponentInterface, Element, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { getGoatIndex } from '../../../utils/utils';

/**
 * @name Link
 * @description Links allow users to click their way from page to page.
 * @example <goat-link>Link</goat-link>
 */
@Component({
  tag: 'goat-link',
  styleUrl: 'goat-link.scss',
  shadow: true,
})
export class GoatLink implements ComponentInterface {

  gid = getGoatIndex();

  @Prop() inline: boolean = false;

  /**
   * Hyperlink to navigate to on click.
   */
  @Prop() href: string;

  /**
   * Sets or retrieves the window or frame at which to target content.
   */
  @Prop() target: string;


  @State() hasFocus = false;
  @State() isActive = false;

  @Element() elm!: HTMLElement;
  private tabindex?: string | number = 1;
  private nativeInput?: HTMLAnchorElement;

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive)
      this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt) {
    if (this.isActive && (evt.key == 'Enter' || evt.key == ' '))
      this.isActive = false;
  }

  @Method()
  async triggerClick() {
    if (this.nativeInput) {
      this.nativeInput.click();
    }
  }

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private mouseDownHandler = () => {
    this.isActive = true;
  };

  private keyDownHandler = (evt) => {
    if (evt.key == 'Enter' || evt.key == ' ') {
      this.isActive = true;
    }
  };

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // goat-input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }
  }


  render() {

    return (<Host has-focus={this.hasFocus} active={this.isActive}>
      <a class={{
        'link': true,
        'inline': this.inline,
        'has-focus': this.hasFocus,
        'active': this.isActive,
      }}
         href={this.href}
         target={this.target}
         ref={input => this.nativeInput = input}
         tabindex={this.tabindex}
         onBlur={this.blurHandler}
         onFocus={this.focusHandler}
         onMouseDown={this.mouseDownHandler}
         onKeyDown={this.keyDownHandler}>

        <slot />

      </a>
    </Host>);
  }

}
