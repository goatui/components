import {Component, h, Host, Prop} from '@stencil/core';

/**
 * @name ConditionBuilder
 * @description A condition builder is a component that allows users to build a condition using a set of rules.
 * @category Data Display
 * @tag content
 */
@Component({
  tag: 'goat-condition-builder',
  styleUrl: 'condition-builder.scss',
  shadow: true,
})
export class ConditionBuilder {

  @Prop() content: string;


  renderHeader() {
    return (
      <div class="condition-builder__header">
        <slot name="header"/>
      </div>
    )
  }

  renderCondition() {
    return (
      <div class="condition-builder__condition">

        <goat-select inline
                     placeholder="Select Operator"
                     items={[{
          label: 'Less than',
          value: 'new',
          icon: 'file-earmark'
        },
          {
            label: 'More than',
            value: 'save',
            icon: 'person-circle'
          },
          {
            label: 'Save As',
            value: 'save-as',
            icon: 'person-fill'
          },
          {
            label: 'Nadine Brooks',
            value: 'nadine',
            icon: 'person-check-fill',
          },
          {
            label: 'Laura Ballard',
            value: 'laura',
            icon: 'file-earmark-person',
          }]}/>

        <goat-input inline placeholder="Select Value"/>
      </div>
    );
  }

  renderConditions() {
    return (
      <div class="condition-builder__compound_conditions">
        <div class='field-name-container'>
          <goat-text inline>Field name</goat-text>
          <div class='compound-type-wrapper'>
            <div class='compound-type'>
              <div class="line"/>
              <div class='content'>
                <goat-tag color="warning">or</goat-tag>
              </div>
              <div class="line"/>
            </div>
          </div>
        </div>


        <div class="condition">
          {this.renderCondition()}
          {this.renderCondition()}
        </div>
      </div>
    );
  }

  renderCompound() {
    return (
      <div class="condition-builder__compound">
        <div class='compound-type-wrapper'>
          <div class='compound-type'>
            <div class="line"/>
            <div class='content'>
              <goat-tag color="primary">and</goat-tag>
            </div>
            <div class="line"/>
          </div>
        </div>

        <div class="compound-body">
          {this.renderConditions()}
          {this.renderConditions()}
        </div>
      </div>
    );
  }

  renderPredicates() {
    return (
      <div class="condition-builder__predicates">
        <div class={`condition-builder__predicate`}>
          {this.renderCompound()}
        </div>
        <goat-divider>
          <goat-tag>or</goat-tag>
        </goat-divider>
        <div class={`condition-builder__predicate`}>
          {this.renderCompound()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <Host>
        <div class='condition-builder'>
          {this.renderHeader()}
          <div class="condition-builder__body">
            {
              this.renderPredicates()
            }
          </div>
        </div>
      </Host>
    );
  }

}
