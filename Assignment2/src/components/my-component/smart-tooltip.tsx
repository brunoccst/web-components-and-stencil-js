import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'smart-tooltip',
  styleUrl: 'smart-tooltip.css',
  shadow: true,
})
export class SmartTooltip {

  /**
   * Tooltip text to be displayed when open.
   */
  @Prop({ reflect: true }) tooltipText: string;

  /**
   * Tooltip is open.
   */
  @State() isOpen: boolean;

  /**
   * Toggles if the tooltip is opened or not.
   */
  _toggleIsOpenState() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Gets the tooltip class according to the current open state.
   * @returns Tooltip class.
   */
  _getTooltipClass(): string {
    let classList = ["text"];
    if (!this.isOpen)
      classList.push("hide");

    return classList.join(" ");
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div class="container">
        <slot></slot>
        <div class="tooltip">
          <div class="label" onClick={this._toggleIsOpenState.bind(this)}>?</div>
          <span class={this._getTooltipClass()}>{this.tooltipText}</span>
        </div>
      </div>
    );
  }
}
