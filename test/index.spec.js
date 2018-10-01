import { fauxcus } from '../src/index';

describe('fauxcus', () => {
  let anchor;
  let div;
  let divWithTabIndex;

  beforeAll(() => {
    document.body.innerHTML = `
      <a href="#foo"></a>
      <div></div>
      <div tabindex="1"></div>
    `;
    anchor = document.querySelector('a');
    div = document.querySelector('div');
    divWithTabIndex = document.querySelector('div[tabindex]');
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });

  describe('throwing', () => {

    test('should throw when fauxcus is called without arguments', () => {
      expect(() => {
        fauxcus();
      }).toThrow();
    });

    test('should throw when fauxcus is called without an HTMLElement', () => {
      expect(() => {
        fauxcus(0);
      }).toThrow();
    });

  });

  describe('handling already focusable elements', () => {

    test('the anchor should not get a tabindex attribute but still get focus', () => {

      fauxcus(anchor);
      expect(anchor.hasAttribute('tabindex')).toBe(false);
      expect(document.activeElement).toEqual(anchor);

    });

  });

  describe('handling non-focusable elements with a tabindex attribute', () => {

    test('the div should keep its tabindex attribute and get focus', () => {

      fauxcus(divWithTabIndex);
      expect(divWithTabIndex.hasAttribute('tabindex')).toBe(true);
      expect(divWithTabIndex.getAttribute('tabindex')).toBe('1');
      expect(document.activeElement).toEqual(divWithTabIndex);

    });

    test('the div should keep its tabindex attribute when it loses focus', () => {

      expect(divWithTabIndex.hasAttribute('tabindex')).toBe(true);
      divWithTabIndex.blur();
      expect(divWithTabIndex.hasAttribute('tabindex')).toBe(true);

    });

  });

  describe('handling non-focusable elements', () => {

    test('the div should get a tabindex attribute and get focus', () => {

      fauxcus(div);
      expect(div.hasAttribute('tabindex')).toBe(true);
      expect(div.getAttribute('tabindex')).toBe('-1');
      expect(document.activeElement).toEqual(div);

    });

    test('the div should loose its tabindex attribute when it loses focus', () => {

      expect(div.hasAttribute('tabindex')).toBe(true);
      div.blur();
      expect(div.hasAttribute('tabindex')).toBe(false);

    });

  });

});
