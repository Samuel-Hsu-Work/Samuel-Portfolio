// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';
import { TextEncoder, TextDecoder } from 'util';

expect.extend(toHaveNoViolations);

// jsdom's test environment doesn't expose TextEncoder/TextDecoder globally
// (unlike a real browser or Node's global scope) — react-router's modern
// build needs them at import time.
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// jsdom doesn't implement matchMedia. Framer Motion's useReducedMotion()
// and Navbar's desktop-breakpoint listener both call it on every render,
// so without this stub every test in the suite would fail immediately.
//
// CRA's default Jest config sets `resetMocks: true`, which wipes a mock's
// implementation before every test — so this has to be (re)installed in
// beforeEach, not just once here at module scope, or every test after the
// first would see a bare jest.fn() that returns undefined.
beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

// jsdom (at least the version bundled with react-scripts' Jest) doesn't
// implement HTMLDialogElement.showModal()/close() — polyfill the minimal
// behavior the app and its tests rely on: toggling the `open` attribute,
// and close() firing a 'close' event (real browsers also move focus and
// trap it, which jsdom can't meaningfully simulate anyway).
if (typeof window.HTMLDialogElement !== 'undefined') {
  if (!window.HTMLDialogElement.prototype.showModal) {
    window.HTMLDialogElement.prototype.showModal = function showModal() {
      this.setAttribute('open', '');
    };
  }
  if (!window.HTMLDialogElement.prototype.close) {
    window.HTMLDialogElement.prototype.close = function close() {
      this.removeAttribute('open');
      this.dispatchEvent(new Event('close'));
    };
  }
}
