# Fauxcus

## Description

Fauxcus, pronounced focus, allows the focusing of all elements. This includes
elements that are normally not focusable such as `main` or `div`. It does this
by adding a `tabindex` attribute with a value of `-1`. In addition to this and
event listener is bound that will remove the `tabindex` attribute when the
element loses focus again.

This is particularly useful for skip links and other in-page links that are
currently (late 2018) [broken](http://axesslab.com/skip-links/) on mobile
devices. It is an implementation of the focusing bit of [Anika Henke's
solution](https://github.com/selfthinker/dokuwiki_template_writr/blob/master/js/skip-link-focus-fix.js)

## Installation

Install using npm or yarn.

```bash
$ npm install --save fauxcus
```

## Usage

```javascript
import { fauxcus } from 'fauxcus';

const main = document.querySelector('main');

fauxcus(main);
```
