import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { arrow, computePosition, flip, offset } from '@floating-ui/dom';

/**
 * @name Tooltip
 * @description The Tooltip component is used to display additional information on hover.
 * @category Data Display
 * @tag content
 * @img /assets/img/tooltip.png
 * @imgDark /assets/img/tooltip-dark.png
 */
@Component({
  tag: 'goat-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  @Prop() placements: string = 'top,top-start,top-end,bottom,bottom-start,bottom-end,right,left';

  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  arrowEl: HTMLElement;
  @Element() elm!: HTMLElement;

  @Listen('mouseover', { target: 'window' })
  windowClick(evt) {
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) return;
    }
    let target = evt.target;
    for (const elm of path) {
      if (elm.hasAttribute && elm.hasAttribute('tooltip-target')) target = elm;
    }
    if (target.hasAttribute('tooltip-target') && target.getAttribute('tooltip-target') === this.elm.getAttribute('id')) {
      this.open = true;
      const positions = this.placements.split(',');
      const placement: any = positions[0];
      const fallbackPlacements: any = positions.splice(1);

      setTimeout(() => {
        computePosition(target, this.elm, {
          placement: placement,
          middleware: [
            flip({
              fallbackPlacements: fallbackPlacements,
            }),
            offset(10),
            arrow({ element: this.arrowEl }),
          ],
        }).then(({ x, y, middlewareData }) => {
          Object.assign(this.elm.style, {
            top: `${y}px`,
            left: `${x}px`,
          });
          if (middlewareData.arrow) {
            const { x, y } = middlewareData.arrow;

            Object.assign(this.arrowEl.style, {
              [middlewareData.offset.placement.includes('left') ? 'right' : 'left']: x ? `${x}px` : `${-this.arrowEl.offsetWidth / 2}px`,
              [!middlewareData.offset.placement.includes('left') ? 'right' : 'left']: null,
              [middlewareData.offset.placement.includes('top') ? 'bottom' : 'top']: y ? `${y}px` : `${-this.arrowEl.offsetHeight / 2}px`,
              [!middlewareData.offset.placement.includes('top') ? 'bottom' : 'top']: null,
            });
          }
        });
      }, 1);
    } else {
      this.open = false;
    }
  }

  contentEl: HTMLElement;

  render() {
    return (
      <Host>
        <div
          ref={elm => (this.contentEl = elm)}
          class={{
            tooltip: true,
            open: this.open,
          }}
        >
          <slot />
          <div
            class={{
              arrow: true,
              open: this.open,
            }}
            ref={elm => (this.arrowEl = elm)}
          ></div>
        </div>
      </Host>
    );
  }
}
