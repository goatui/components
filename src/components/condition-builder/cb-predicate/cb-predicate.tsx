import {Component, h, Host, Prop} from '@stencil/core';


@Component({
  tag: 'goat-cb-predicate',
  styleUrl: 'cb-predicate.scss',
  shadow: true,
})
export class CbPredicate {

  @Prop() position: 'first' | 'last' | 'middle' = 'middle';

  render() {
    return (
      <Host>

        <div class="predicate">

          <slot/>

        </div>

        {(() => {
          if (this.position !== 'last') {
            return (
              <goat-cb-divider vertical={true} class="predicate-divider">
                <goat-tag color={'warning'}>{"or"}</goat-tag>
              </goat-cb-divider>
            )
          }
        })()}


      </Host>
    );
  }

}
