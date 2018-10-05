# Fauxcus (fōˈkəs) [![Build status](https://travis-ci.com/matijs/fauxcus.svg?branch=master)](https://travis-ci.com/matijs/fauxcus)

## Description

Fauxcus allows the focusing of all elements. This includes elements that are
normally not focusable such as the `main` element or `div` elements. It does so
by adding a `tabindex` attribute with a value of `-1`. In addition to adding
the `tabindex` attribute an event listener is bound that will remove the
`tabindex` attribute when the element loses focus.

The functionality that fauxcus provides is particularly useful for skip links
and other in-page links that are currently (as of late 2018)
[broken](http://axesslab.com/skip-links/) on mobile devices. It is a vanilla
JavaScript implementation of the focusing functionality of [Anika Henke's
solution](https://github.com/selfthinker/dokuwiki_template_writr/blob/master/js/skip-link-focus-fix.js).
Her solution also deals with hash changes and URLs that contain a fragment
identifier when opened. fauxcus only handles setting focus.

## Installation

Install using npm or yarn.

```bash
$ npm install --save fauxcus
```

## API

### `fauxcus(node)`

Put focus on `node`.

When `node` is already focusable, either because it is by default or it already
has a `tabindex` attribute, it will only get focus.

If it is not focusable it will be made focusable by adding a `tabindex="-1"`
attribute and get focus. It will lose the `tabindex` attribute upon losing focus.

## Example

```javascript
import { fauxcus } from 'fauxcus';

const main = document.querySelector('main');

fauxcus(main);
```
