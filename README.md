# Wild News

The Wild News App is a React app that allows you to create posts. The basic structure is already implemented but there is no interactivity.
[app example]: https://res.cloudinary.com/diogofgr/image/upload/v1555059513/Screenshot_from_2019-04-12_09-56-33_fbwuwc.png

1. - Start by turning `<Form />` into a controlled component.
Create a `submitForm()` function inside of this component that will be called when the form is submitted. Maybe listen to the `submit` event?


2. - Pass a prop `onCreatePost` from app to `<Form />`.
This function should be called when the form is submitted.

3. - App should be responsible for adding a new post to the `posts` array.
 This should be done in `onCreatePost`.

4. - `<PostsList />` should automatically update. If not, start debugging! :tada

5. - fix all the lint problems and deploy to your github. Share the link!

## Scripts

Start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

Lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

Build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
