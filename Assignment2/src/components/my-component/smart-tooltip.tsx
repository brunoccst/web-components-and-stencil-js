import { Component, h, Prop } from '@stencil/core';

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
  @Prop({ reflect: true, mutable: true }) _isOpen: boolean;

  /**
   * Toggles if the tooltip is opened or not.
   */
  _toggleIsOpenState() {
    this._isOpen = !this._isOpen;
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div class="container">
        <slot></slot>
        <button id="tooltip" onClick={this._toggleIsOpenState.bind(this)}>?</button>
        <span class={this._isOpen ? "" : "hide"}>{this.tooltipText}</span>
      </div>
    );
  }
}
