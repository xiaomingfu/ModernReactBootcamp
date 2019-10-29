#### Create React App

- create-reate-app: is built on top of "Webpack", a JavaScript utility:
  - create a skeleton react project
  - set it up so JS files run through Balbel automatically
  - let us use super-modern JavaScript features
  - make testing and deployment much easier

##### Module

- CRA uses ES2015 "modules", it is a newer, standardized version of Node's require(), it use `import` & `export` classes/data/functions between JS files

##### Style

- Good Style:
  - each react component goes in separate file
  - Components extends Component(import from React)
  - Skeleton assumes top object is App in App.js

##### CSS

- Make a CSS file for each React component
- import it at the top of js file
- conventional to add `className=""`, and use that as prefix for sub-items to style

##### Images

- Store images in src/folder with the components, use imported name where path should go
