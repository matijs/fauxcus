import { fauxcus } from '../fauxcus';

describe('fauxcus', () => {
    const a = document.createElement('a');
    const div = document.createElement('div');
    a.href = 'https://example.org';
    document.body.appendChild(a);
    document.body.appendChild(div);

    test('The <a href="https://example.org"> should not get a tabindex attribute', () => {
        fauxcus(a);
        expect(a.hasAttribute('tabindex')).toBe(false);
    });
    test('The <a href="https://example.org"> should have focus', () => {
        expect(document.activeElement).toBe(a);
    });

    test('A <div> should get a tabindex attribute', () => {
        fauxcus(div);
        expect(div.hasAttribute('tabindex')).toBe(true);
        expect(div.getAttribute('tabindex')).toBe('-1');
    });

    test('The <div> should have focus', () => {
        expect(document.activeElement).toEqual(div);
    });

    test('the div should loose its tabindex attribute when it loses focus', () => {
        div.blur();
        expect(div.hasAttribute('tabindex')).toBe(false);
    });

    test('The div should keep its tabindex attribute and get focus', () => {
        div.setAttribute('tabindex', '-1');
        fauxcus(div);
        expect(div.hasAttribute('tabindex')).toBe(true);
        expect(div.getAttribute('tabindex')).toBe('-1');
    });

    test('The <div> should have focus', () => {
        expect(document.activeElement).toEqual(div);
    });

    test('The div should keep its tabindex attribute when it loses focus', () => {
        div.blur();
        expect(div.hasAttribute('tabindex')).toBe(true);
    });
});
