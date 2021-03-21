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
   * Renders the component.
   */
  render() {
    return (
      <div class="container">
        <slot></slot>
        <button id="tooltip" onClick={this._toggleIsOpenState.bind(this)}>?</button>
        <span class={this.isOpen ? "" : "hide"}>{this.tooltipText}</span>
      </div>
    );
  }
}
