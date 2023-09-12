import {Component, h, Host} from '@stencil/core';


@Component({
  tag: 'goat-cb-compound',
  styleUrl: 'cb-compound.scss',
  shadow: true,
})
export class CbCompound {

  render() {
    return (
      <Host>

        <div class="compound">

          <div class='compound-type'>
            <goat-cb-divider connect-start={true} connect-end={true}>
              <goat-tag color={'success'}>{"and"}</goat-tag>
            </goat-cb-divider>
          </div>

          <div class="compound-body">
            <slot/>
          </div>
        </div>

      </Host>
    );
  }

}
