import {Component, h, Host, Prop} from '@stencil/core';


@Component({
  tag: 'goat-cb-expression',
  styleUrl: 'cb-expression.scss',
  shadow: true,
})
export class CbExpression {

  @Prop() field: string = '';

  @Prop() operators: any[] = [];


  renderCondition() {
    return (
      <div class="condition-builder__condition">

        <goat-select inline={true }
                     value={this.operators[0]}
                     placeholder="Select Operator"
                     items={this.operators}/>

        <goat-input inline placeholder="Select Value"/>
      </div>
    );
  }

  render() {
    return (
      <Host>

        <div class="expression">

          <div class='field-name-container'>
            <goat-text inline={true}>{this.field}</goat-text>
            <div class='field-compound-type'>
              <goat-cb-divider connect-end={true}>
                <goat-tag color={'warning'}>{"or"}</goat-tag>
              </goat-cb-divider>
            </div>
          </div>


          <div class="conditions">
            {this.renderCondition()}
            {this.renderCondition()}
          </div>

        </div>
      </Host>
    );
  }

}
