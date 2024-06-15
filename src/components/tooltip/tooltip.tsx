import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Method,
  Prop,
} from '@stencil/core';
import { arrow, computePosition, flip, offset } from '@floating-ui/dom';

/**
 * @name Tooltip
 * @description The Tooltip component is used to display additional information on hover.
 * @category Data Display
 * @tag content
 * @img /assets/img/tooltip.webp
 * @imgDark /assets/img/tooltip-dark.webp
 */
@Component({
  tag: 'goat-tooltip',
  styleUrl: 'tooltip.scss',
  shadow: true,
})
export class Tooltip {
  @Prop() placements: string =
    'top,top-start,top-end,bottom,bottom-start,bottom-end,right,left';

  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  @Prop({ mutable: true, reflect: true }) managed: boolean = false;

  arrowEl: HTMLElement;
  @Element() elm!: HTMLElement;

  @Listen('mouseover', { target: 'window' })
  windowMouseOver(evt) {
    if (this.managed) return;
    const path = evt.path || evt.composedPath();
    for (const elm of path) {
      if (elm == this.elm) return;
    }
    let target: HTMLElement;
    for (const elm of path) {
      if (elm.hasAttribute && elm.hasAttribute('tooltip-target')) target = elm;
    }

    this.open = false;

    if (target) {
      if (
        target.getAttribute('tooltip-target') === this.elm.getAttribute('id')
      ) {
        this.openTooltip(target);
      }
    }
  }

  @Listen('goat:tooltip', { target: 'window' })
  windowTooltipEventHandler(evt) {
    if (!this.managed) return;

    let target: HTMLElement = evt.detail.target;

    if (target) {
      if (
        target.getAttribute('tooltip-target') === this.elm.getAttribute('id')
      ) {
        this.open = evt.detail.open;
        if (this.open) this.openTooltip(target);
      }
    }
  }

  @Method()
  openTooltip(target: any) {
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
            [middlewareData.offset.placement.includes('left')
              ? 'right'
              : 'left']: x ? `${x}px` : `${-this.arrowEl.offsetWidth / 2}px`,
            [!middlewareData.offset.placement.includes('left')
              ? 'right'
              : 'left']: null,
            [middlewareData.offset.placement.includes('top')
              ? 'bottom'
              : 'top']: y ? `${y}px` : `${-this.arrowEl.offsetHeight / 2}px`,
            [!middlewareData.offset.placement.includes('top')
              ? 'bottom'
              : 'top']: null,
          });
        }
      });
    }, 1);
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
