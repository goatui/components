import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @name Progress
 * @description Spinners provide a visual cue that an action is processing awaiting a course of change or a result.
 * @category Feedback
 * @tags feedback, loading, progress, spinner
 * @example <goat-progress value="45"></goat-spinner>
 */
@Component({
  tag: 'goat-progress',
  styleUrl: 'progress.scss',
  shadow: true,
})
export class Progress {
  /*
   * The progress value.
   */
  @Prop() value: number = null;

  @Prop() label: string;

  @Prop() helperText: string;

  /**
   *
   * Possible values are: `"sm"` and `"md"` in pixel. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' = 'md';

  @Prop() hideLabel: boolean = false;

  @Prop() status: 'active' | 'success' | 'error' = 'active';

  getRenderIcon() {
    if (this.status === 'success') {
      return <goat-icon class={'progress-icon'} name={'checkmark--filled'}></goat-icon>;
    } else if (this.status === 'error') {
      return <goat-icon class={'progress-icon'} name={'error--filled'}></goat-icon>;
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            progress: true,
            [`size-${this.size}`]: true,
            [`status-${this.status}`]: true,
            indeterminate: this.value === null && this.status === 'active',
          }}
        >
          {!this.hideLabel && <div class="progress-header">
            <label class="progress-label">{this.label}</label>
            {this.getRenderIcon()}
          </div>}
          <div class="progress-track">
            <div class="progress-bar" role="progressbar" style={{ width: `${this.value}%` }} aria-valuenow={this.value} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress-helper">{this.helperText}</div>
        </div>
      </Host>
    );
  }
}
