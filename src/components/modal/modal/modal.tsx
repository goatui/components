import { Component, Element, Event, EventEmitter, h, Host, Prop, Watch } from '@stencil/core';

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

  /*
   * Specify whether the Modal is currently open
   */
  @Prop({ reflect: true }) open: boolean = false;

  /*
   * Specify the content of the modal heading.
   */
  @Prop({ reflect: true }) heading: string;

  /*
   * Specify the content of the modal subheading.
   */
  @Prop({ reflect: true }) subheading: string;

  @Prop({ reflect: true }) hideClose: boolean = false;

  /**
   * On click of button, a CustomEvent 'goat:modal-close' will be triggered.
   */
  @Event({ eventName: 'goat:modal-close' }) goatModalClose: EventEmitter;

  @Watch('show')
  watchHandler(newValue: boolean) {
    if (newValue) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        this.elm.shadowRoot.querySelector('.modal').classList.add('open');
      }, 80);
    } else {
      document.body.style.overflow = 'visible';
      this.elm.shadowRoot.querySelector('.modal').classList.remove('open');
    }
  }

  render() {
    if (this.open)
      return (
        <Host>
          <div class="modal-container" aria-labelledby="modal-heading" role="dialog" aria-modal="true">
            <div class="modal-overlay" />
            <div class="modal--wrapper">
              <div class="modal">
                <div class="modal-header">
                  <div class="modal-heading-section">
                    {this.subheading && (
                      <goat-text class="modal-subheading" color="secondary" type="label">
                        {this.subheading}
                      </goat-text>
                    )}

                    {this.heading && (
                      <goat-text class="modal-heading" type="heading" heading-size="3">
                        {this.heading}
                      </goat-text>
                    )}
                  </div>
                  <div class="action-container">
                    {!this.hideClose && (
                      <goat-button
                        title="Close"
                        class="close-icon cancel-button"
                        color="dark"
                        dark-mode-color="light"
                        icon="close--large"
                        variant="ghost"
                        onGoat:click={() => {
                          this.goatModalClose.emit();
                        }}
                      ></goat-button>
                    )}
                  </div>
                </div>

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
