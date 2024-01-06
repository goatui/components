import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';

/**
 * @name Modal
 * @description  Modals are used to display content in a layer above the app.
 * @category Feedback
 * @tags controls
 * @img /assets/img/modal.png
 * @imgDark /assets/img/modal-dark.png
 */
@Component({
  tag: 'goat-modal',
  styleUrl: 'modal.scss',
  shadow: true,
})
export class Modal {
  @Element() elm!: HTMLElement;

  @Prop({ reflect: true }) show: boolean = false;

  @Watch('show')
  watchHandler(newValue: boolean) {
    if (newValue) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        this.elm.shadowRoot.querySelector('.modal').classList.add('is-open');
      }, 80);
    } else {
      document.body.style.overflow = 'visible';
      this.elm.shadowRoot.querySelector('.modal').classList.remove('is-open');
    }
  }

  render() {
    if (this.show)
      return (
        <Host>
          <div class="modal-container" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="modal-overlay" />
            <div class="modal--wrapper">
              <div class="modal">
                <div class="modal__content">
                  <slot />
                </div>
                <div class="modal__footer">
                  <slot name="footer"></slot>
                </div>
              </div>
            </div>
          </div>
        </Host>
      );
  }
}
