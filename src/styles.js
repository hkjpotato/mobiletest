/*
 * DO NOT make any changes without contacting lli@cvent.com
 * This is copied from nucleus-core, and should be removed once nucleus-core is released.
 */

import classNames from 'classnames';

/**
  ## Description
  Build a className string and an inline style object to pass to
  a react component using the provided keys and props.

  ## Example Usage

```js
  props =  { classes : { button: 'myButtonClass',
                         primary : 'myPrimaryClass',
                         secondary: 'secondaryClass'},
             style: { button: {background:'red'}, primary: {fontFace: 'blah'} } }
  resolve(props, 'button', 'primary')
```

Would return:

```js
{className: 'myButtonClass myPrimaryClass' style: {background: 'red', fontFace: 'blah'}}
```

**/
export function resolve(props, ...keys) {
  const { classes = {}, style = {} } = props;

  const classList = keys.map((k) => {
    if (classes.hasOwnProperty(k)) { return classes[k]; }
  });

  const styleList = keys.map((k) => {
    if (style.hasOwnProperty(k)) { return style[k]; }
  });
  return {
    className: classNames(classList),
    style: Object.assign({}, ...styleList)
  };
}

/**
  ## Description
  Select a subset of values from classes and style in the passed in props object.
  Useful for styling children objects.


  ## Example Usage

```js
  props =  { classes : {  button1:  { button: { a: 'red'} },
                          button2: { button: {a :'bluw'}} },
                          style : { button1: { c: 'green'}} }
  select(props, 'button1')
```

Would return:

```js
{classes: { button: { a: 'red'} } style: {c: 'green'}}
```

**/
export function select(props, ...keys) {
  const { classes = {}, style = {} } = props;
  const newStyles = keys.map((k) => {
    if (style.hasOwnProperty(k)) {
      return style[k];
    }
  });
  const newClasses = keys.map((k) => {
    if (classes.hasOwnProperty(k)) {
      return classes[k];
    }
  });
  return {
    classes: Object.assign({}, ...newClasses),
    style: Object.assign({}, ...newStyles)
  };
}
