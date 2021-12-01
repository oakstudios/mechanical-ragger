# Mechanical Ragger

## Installation

```
npm i @oakstudios/mechanical-ragger
```

### Web Component

1. Load the web component. Choose the option that best suits your needs:
    
    Using a `script` tag placed at the end of the `body`:
    
    ```html
    <!-- this automatically registers the component in the window as mechanical-ragger -->
    <script src="https://unpkg.com/@oakstudios/mechanical-ragger@0.2.2/dist/web-component-auto-register.js"></script>
    ```
    
    _OR_ importing the same auto-register function in JS:
    
    ```js
    import "@oakstudios/mechanical-ragger/web-component-auto-register";
    ```
    
    _OR_ registering the component manually:
    
    ```js
    import MechanicalRagger from "@oakstudios/mechanical-ragger/web-component";
    
    customElements.define("mechanical-ragger", MechanicalRagger);
    ```

2. Then add it to your HTML:

   ```html
   <mechanical-ragger>
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
   </mechanical-ragger>
   ```

### React Component

```jsx
import MechanicalRagger from "@oakstudios/mechanical-ragger/react";

export default () => {
  return <MechanicalRagger>Lorem ipsum dolor sit amet.</MechanicalRagger>;
};
```

### Other Frameworks

While web components can be used in most any framework, if you'd like deep integration with the framework of your choosing, you can use [`src/web-component.js`](src/web-component.js) and [`src/react.jsx`](src/react.jsx) to reference in implementing `mechanical-ragger` elsewhere.

The npm package also exposes the `MechanicalRaggerCore` module that these use. eg:

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

/* Or Locally */
mechanical-ragger:nth-child(1) {
  --ragging-width: 4rem;
}
mechanical-ragger:nth-child(2) {
  --ragging-width: 2rem;
}
```

Because this is a CSS custom property, you can change this value in the same place that you set the rest of your styles. The value will also respect other runtime conditions like media queries and application state.

```css
mechanical-ragger {
  --ragging-width: 2rem;
}
/* Media Queries */
@media (min-width: 480px) {
  mechanical-ragger {
    --ragging-width: 3rem;
  }
}
/* User Preferences */
body.no-ragging mechanical-ragger {
  --ragging-width: 0px;
}
```

You can also use any css unit (`ch`, `em`, `rem`, `vw`, etc)

## Best Practices

### ℹ️ Tidying line-ends

You may hope for text lines to reach closer to the end of each line to make the ragging cleaner. HTML and CSS both offer tools to manage this.

In CSS:

```css
mechanical-ragger {
  /* Insert hyphens according to browser hyphenation dictionaries */
  hyphens: auto;

  /* Or only inserts hyphens at the author's request */
  hyphens: manual;
}
```

[With `hyphens: manual`, use the `&shy;` HTML entity](https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens#suggesting_line_break_opportunities) in your text to suggest hyphenation breakpoints to the browser.

In HTML, [the `<wbr>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr) can be used to suggest a word breakpoint _without_ hyphenation.

### ⚠️ Browser handling of line-heights.

Chrome and other browsers do not allow for floating-point decimal line-heights. All line-heights are rounded to the nearest CSS pixel (px values that do not factor in screen pixel-density). To ensure that the ragging does not fall out of sync with the text it controls, opt for line-heights that evaluate to whole pixels.

## Development

### Package

`npm run build` in the root directory. To see the resulting modules generated from the `src/` directory, check `dist/`.

### Docs

`cd` into the `docs/` directory, where you can interact with the `create-react-app` instance.

```
cd docs

npm run start
```
