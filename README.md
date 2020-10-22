## Purpose

The purpose of this project is to provide a dev-ready starting point for modern React apps that utilize the [React Spectrum design system](https://spectrum.adobe.com/).

It includes support for [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/) within the Webpack DevServer.

It also includes certain development best practices such as,

-   Style guide enforcement with eslint and prettier
-   Git hooks to lint, test, and format staged changes pre-commit and pre-push
-   A number of helpful npm scripts to make development smooth

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br> Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

### `npm run start:https`

Runs the app in the development mode in a secure environment.<br> Open [https://localhost:1234](https://localhost:1234) to view it in the browser.

Given that `localhost` wont have a valid certificate, Chrome might throw some errors when loading the page, visit [chrome://flags](chrome://flags/#allow-insecure-localhost) and **enable** `allow-insecure-localhost`

### `npm test`

Launches the test runner in the interactive watch mode.<br> See the section about
[running tests](https://jestjs.io/docs/en/webpack) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.<br> It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br> Your app is ready to be deployed!

See the section about [deployment](https://webpack.js.org/guides/production/) for
more information.

### `npm run storybook`

This will start the [storybook](https://storybook.js.org/) server listening on port 6006. Using storybook to build components is encouraged as it offers more flexibility in the states you start your components with, enforces isolation between components, and makes a more testable set of components.

### `npm run generate` || `npm run g`

Leverages [Plop](https://www.npmjs.com/package/plop) to generate a new component, in addition to generating a new component it will create a `.test.tsx`, `.story.tsx`, `story.mdx`, `.css` and `index.tsx`. Using this command is encouraged to enforce best development practices by always creating tests and stories for each component.

**Note:** not both of the `.story.(mdx | tsx)` files are required. They are both included for your convenience but you can safely remove whichever you don't want to maintain.

To remove it from the `npm run generate` command, delete the desired file from the `templates` folder and remove the corresponding block from the `plopfile.js` file.

---

## Creating a component

### Testing  🧪

[Jest Testing Framework](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) are included in this repo; using these two tools for testing is strongly recommended but they can be replaced with any other of your choosing.

### Stories  📚

This repo supports `.story.mdx` and `.story.tsx` stories!

-   `MDX` stories allow you to create documentation for your component while also generating individual stories for each of the component's states that are mentioned within the documentation!

-   `TSX` stories allows you to create stories for different states of your component but no documentation for it.

### Styling 🎨

-   Ideally use Spectrum components for layouts if that's not possible, use [flex](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) or [grid](https://css-tricks.com/snippets/css/complete-guide-grid/) for layout.

-   [Styled-Components](https://styled-components.com/) is included in this repo, ideal for minor component customizations.

-   Avoid deep customization on default Spectrum styling as this can potentially break the built-in accessibility features each component has. If you find yourself customizing the components too much, it might be worth to revisit your design.

## Contributing 🙏

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **[Squash](https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History#_squashing)** all your commits
5.  **Push** your work back up to your fork
6.  Submit a **Pull request** so that your changes can be reviewed!

## Questions ❓

Feel free to file an issue or send me an email
