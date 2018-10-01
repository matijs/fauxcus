import { blurHandler } from './blur-handler';

export default function fauxcus(node) {

  if (!(node instanceof HTMLElement)) throw new Error('Valid node needed');

  if (!node.hasAttribute('tabindex') && node.tabIndex === -1) {

    node.setAttribute('tabindex', '-1');
    node.addEventListener('blur', blurHandler);

  }

  node.focus();

}

