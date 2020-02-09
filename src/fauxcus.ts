function blurHandler(event: FocusEvent) {
    const { target } = event;

    if (target instanceof HTMLElement) {
        target.removeAttribute('tabindex');
        target.removeEventListener('blur', blurHandler);
    }
}

export function fauxcus(node: HTMLElement) {
    if (!node.hasAttribute('tabindex') && node.tabIndex === -1) {
        node.setAttribute('tabindex', '-1');
        node.addEventListener('blur', blurHandler);
    }
    node.focus();
}
