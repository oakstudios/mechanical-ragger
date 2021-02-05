# Mechanical Ragger

## Installation

```
npm i @oakstudios/mechanical-ragger
```

### Web Component

load the web component:

```html
<!-- this automatically registers the component in the window as mechanical-ragger -->
<script src="@oakstudios/mechanical-ragger/web-component-auto-register"></script>
```

_OR import in JS and register the component manually_

js:

```js
import MechanicalRagger from "@oakstudios/mechanical-ragger/web-component";

customElements.define("mechanical-ragger", MechanicalRagger);
```

then in html:

```html
<mechanical-ragger>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</mechanical-ragger>
```

### React Component

jsx:

```jsx
import MechanicalRagger from "@oakstudios/mechanical-ragger/react";

// ...

export default () => {
  return <MechanicalRagger>Lorem ipsum dolor sit amet.</MechanicalRagger>;
};
```

### Other Frameworks

While web components can be used in most any framework, if you'd like deep integration with the framework of your choosing, you can reference `src/web-component.js` and `src/react.jsx` to reference in implementing mechanical-ragger elsewhere. The npm package also exposes the MechanicalRaggerCore module that these use. eg:

```js
import MechanicalRaggerCore from "@oakstudios/mechanical-ragger/core";
```

## Options

### `--ragging-width`

`mechanical-ragger` inherits the depth of the mechanical ragging from a CSS custom property. To set this to a value other than the default, apply the custom property anywhere in the DOM containing the `mechanical-ragger`.

```css
/* Globally... */
body {
  --ragging-width: 3rem;
}

/* Or locally */
mechanical-ragger:nth-child(1) {
  --ragging-width: 4rem;
}
mechanical-ragger:nth-child(2) {
  --ragging-width: 2rem;
}
```

## Best Practices

### ℹ️ You may hope for text lines to reach closer to the end of each line to make the ragging cleaner.

HTML and CSS both offer tools to manage this. In CSS:

```css
mechanical-ragger {
  /* Inserts hyphens according to browser hyphenation dictionaries */
  hyphens: auto;

  /* OR */

  /* Only inserts hyphens at the author's request */
  hyphens: manual;
}
```

[With `hyphens: manual`, use the `&shy;` HTML entity](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens#suggesting_line_break_opportunities) in your text to suggest hyphenation breakpoints to the browser.

In HTML, [the `<wbr>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr) can be used to suggest a word breakpoint _without_ hyphenation.

### ⚠️ Chrome and other browsers do not allow for floating-point decimal line-heights. All line-heights are rounded to the nearest CSS pixel (px values that do not factor in screen pixel-density).

To ensure that the ragging does not fall out of sync with the text it controls, opt for line-heights that evaluate to whole pixels.
