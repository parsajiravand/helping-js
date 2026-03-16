'use strict';

const { HAS_WINDOW_SUPPORT, HAS_DOCUMENT_SUPPORT, IS_BROWSER } = require('../core/support');

describe('support (Node environment)', () => {
  it('HAS_WINDOW_SUPPORT is false in Node', () => {
    expect(HAS_WINDOW_SUPPORT).toBe(false);
  });
  it('HAS_DOCUMENT_SUPPORT is false in Node', () => {
    expect(HAS_DOCUMENT_SUPPORT).toBe(false);
  });
  it('IS_BROWSER is false when window or document is missing', () => {
    expect(IS_BROWSER).toBe(false);
  });
});
