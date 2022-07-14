<h1>Recowd</h1>

<div style="display: flex; justify-content: normal; align-items: center">
  This project was generated using <a href="https://nx.dev">Nx</a>.

  <p style="text-align: center; margin-left: 2rem">
    <img alt="nx-logo" src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="50">
  </p>
</div>

<a href="https://gaetanrdn.github.io/recowd">Design system Storybook</a>

<h2>Description</h2>

This mono repo contains all my new projects.

Actually I work on a design-system and on my future website.

<h2>Architecture</h2>

<ul>
  <li>apps</li>
  <ul>
    <li><a href="https://gaetanrdn.github.io/recowd">design-system</a>(launches a storybook for all the design system)</li>
    <li>recowd-web (my future website)</li>
  </ul>
  <li>libs</li>
  <ul>
    <li>models (contains all the models)</li>
    <li>test/utils (contains utility classes for testing)</li>
    <li>ui/animations (contains all the animations of the design system)</li>
    <li>ui/atoms (contains all the atoms of the design system)</li>
    <li>ui/molecules (contains all the molecules of the design system)</li>
    <li>ui/organisms (contains all the organisms of the design system)</li>
    <li>utility-types (contains types, decorators...)</li>
  </ul>
</ul>

<h2>Testing</h2>

<a href="https://jestjs.io/">Jest</a>

<h2>Storybook</h2>

Used addons:

<ul>
  <li>@storybook/addon-essentials</li>
  <li>@geometricpanda/storybook-addon-badges</li>
  <li>@storybook/addon-jest</li>
  <li>@storybook/addon-a11y</li>
</ul>

<h2>Styles</h2>

SASS is used to style the components, and to build our own theme.

<h3>Theming</h3>
A config object is passed to all components, that allow centralizing all theming features.

Example

```scss
$config: (
  typography: (
    input: (
      font-family: 'Source Sans Pro',
      font-size: 1.6rem,
      font-weight: 400,
      line-height: 1.6rem,
    ),
    // ...
  ),
  colors: (
    primary: (
      color: #ffffff,
      background-color: #000000,
      border-color: #ffffff,
    ),
    // ...
  ),
);
```

First level: separate the typographies and the colors.

Second level: map for each element/color

<h3>Specificities</h3>

The default font-size is set to 10px. That allows to simplify the conversion from px to rem.

<h2>Translations</h2>

I use <a href="https://github.com/ngx-translate/core">ngx-translate</a>

For recowd-web, the language is based on the navigator first language in the parameters.
