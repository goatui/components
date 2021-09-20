import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'p4-spinner',
  styleUrl: 'p4-spinner.scss',
  shadow: true,
})
export class P4Spinner {

  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"`. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | string = 'md';

  getSize() {
    let size;
    if (!this.size || this.size === 'md')
      size = '1.5rem';
    else if (this.size === 'lg')
      size = '3rem';
    else if (this.size === 'sm')
      size = '1rem';
    else if (typeof this.size === 'string')
      size = this.size;
    return size;
  }

  render() {
    return (
      <Host>
        <div class="spinner">
          <svg version="1.1" class="loader icon-svg" x="0px" y="0px"
               width={this.getSize()} height={this.getSize()} viewBox="0 0 50 50" fill="currentColor">
            <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
              <animateTransform attributeType="xml"
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="0.6s"
                                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </Host>
    );
  }

}
