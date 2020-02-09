export function blurHandler(event) {
    const { target } = event;

    target.removeAttribute('tabindex');
    target.removeEventListener('blur', blurHandler);
}
