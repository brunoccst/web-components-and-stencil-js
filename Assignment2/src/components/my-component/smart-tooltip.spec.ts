import { newSpecPage } from '@stencil/core/testing';
import { SmartTooltip } from './smart-tooltip';

describe('smart-tooltip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SmartTooltip],
      html: '<smart-tooltip></smart-tooltip>',
    });
    expect(root).toEqualHtml(`
      <smart-tooltip>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </smart-tooltip>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SmartTooltip],
      html: `<smart-tooltip first="Stencil" last="'Don't call me a framework' JS"></smart-tooltip>`,
    });
    expect(root).toEqualHtml(`
      <smart-tooltip first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </smart-tooltip>
    `);
  });
});
