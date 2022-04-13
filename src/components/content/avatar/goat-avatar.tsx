import { Component, Element, h, Host, Prop } from '@stencil/core';

/**
 * @name Avatar
 * @description Avatars in their simplest form display content within a circular container.
 * @example <goat-avatar size="5rem" name="Shivaji Varma" src="/assets/img/avatar.png"></goat-avatar>
 */
@Component({
  tag: 'goat-avatar',
  styleUrl: 'goat-avatar.scss',
  shadow: true,
})
export class GoatAvatar {

  @Element() elm!: HTMLElement;

  /**
   * Avatar size.
   */
  @Prop() size: string = '2rem';

  @Prop() name: string = '';

  @Prop() src: string = '';

  private getInitials() {
    const name = this.name.split(' ');
    let firstName = name[0] ? name[0].charAt(0).toUpperCase() : '';
    let lastName = name[1] ? name[1].charAt(0).toUpperCase() : '';
    return `${firstName}${lastName}`;
  }


  private getFontSize() {
    const size = this.size;
    const fontSize = this.size.match(/^\d+(\.\d{1,2})?/)[0];
    // @ts-ignore
    return (fontSize * 4 / 10) + size.replace(/^\d+(\.\d{1,2})?/, '');
  }


  render() {
    const cssCls = ['avatar'];
    if (this.src) {
      cssCls.push('avatar-image');
    } else {
      cssCls.push('avatar-initials');
    }
    return (
      <Host title={this.name}>
        <div class='avatar-container'>
          <div class={cssCls.join(' ')}
               style={{ width: this.size, height: this.size, fontSize: this.getFontSize() }}>
            {
              (() => {
                if (this.src) {
                  return <img class='image' src={this.src} alt={this.name} />;
                } else {
                  return <div class='initials'>
                    {this.getInitials()}
                  </div>;
                }
              })()
            }
          </div>
        </div>
      </Host>
    );
  }

}
