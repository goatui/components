import { Component, h, Host, Prop } from '@stencil/core';

enum SpinnerSize {
  SM = 0.75,
  MD = 1,
  LG = 5.5,
}

/**
 * @name Spinner
 * @description Spinners provide a visual cue that an action is processing awaiting a course of change or a result.
 * @category Feedback
 * @tags feedback, loading, progress, spinner
 * @example <goat-spinner class="rainbow" size="2rem"></goat-spinner>
 */
@Component({
  tag: 'goat-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class Spinner {
  /**
   * The Icon size.
   * Possible values are: `"sm"`, `"md"`, `"lg"` and size in pixel. Defaults to `"md"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' | string = 'md';

  @Prop() hideBackground: boolean = false;

  @Prop() description: string = 'Loading';

  private getSize() {
    let size;
    if (!this.size || this.size === 'md') size = SpinnerSize.MD;
    else if (this.size === 'sm') size = SpinnerSize.SM;
    else if (this.size === 'lg') size = SpinnerSize.LG;
    else if (this.size.endsWith('px'))
      size = parseInt(this.size.replace('px', '')) / 16;
    else if (this.size.endsWith('rem'))
      size = parseInt(this.size.replace('rem', ''));
    else size = this.size;
    return size;
  }

  render() {
    let radius: number = 57.3 * this.getSize();
    let strokeWidth = 5;
    if (this.getSize() >= 5.5) strokeWidth = 10;
    strokeWidth = strokeWidth / ((this.getSize() * 16) / 100);

    let strokeDashoffset = 50 * this.getSize();
    if (this.getSize() <= 1) {
      strokeDashoffset = 180 * this.getSize();
    }

    return (
      <Host>
        <div
          class={'spinner'}
          style={{
            width: this.getSize() + 'rem',
            height: this.getSize() + 'rem',
          }}
          title={this.description}
        >
          <svg
            viewBox={`0 0 ${2 * (radius + strokeWidth + 5 * this.getSize())} ${
              2 * (radius + strokeWidth + 5 * this.getSize())
            }`}
            class="spinner__svg"
          >
            <title>{this.description}</title>
            {!this.hideBackground && (
              <circle
                cx="50%"
                cy="50%"
                class="spinner__background"
                r={radius}
                style={{
                  strokeWidth: `${strokeWidth * this.getSize()}`,
                }}
              ></circle>
            )}

            <circle
              cx="50%"
              cy="50%"
              class="spinner__stroke"
              r={radius}
              style={{
                strokeWidth: `${strokeWidth * this.getSize()}`,
                strokeDasharray: `${360 * this.getSize()}`,
                strokeDashoffset: `${strokeDashoffset}`,
              }}
            ></circle>
          </svg>
        </div>
      </Host>
    );
  }
}
