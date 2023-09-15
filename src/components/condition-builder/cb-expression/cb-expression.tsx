import {Component, h, Host, Prop} from '@stencil/core';


@Component({
  tag: 'goat-cb-expression',
  styleUrl: 'cb-expression.scss',
  shadow: true,
})
export class CbExpression {


  @Prop() operators: any[] = [];

  @Prop() operatorValue: string = '';


  render() {
    return (
      <Host>

        <div class="expression">
          <goat-select inline={true}
                       value={this.operatorValue}
                       placeholder="Select Operator"
                       items={this.operators}/>

          <slot/>
        </div>
      </Host>
    );
  }

}
