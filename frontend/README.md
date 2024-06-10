# Setup
- install vite globally (f.e. via npm)
- yarn
- yarn start (takes a while to render on initial start)

# Directories & Files
## dist
Stands for distributable, is not tracked in git and contains a complete build.
## node_modules
Packages installed by running *yarn* and not tracked in git.
## public
Images & configuration files used by index.html.
### favicon.ico
The small icon on the browser tab.
### manifest.json
Information for search engines & browser about this website.
## src
### component
Custom general purpose react components.
### config
Custom files to store configuration values in a singular place.
### image
Images used by react components.
### page
Each page has a url route like f.e. /login and content for it.
Pages use and configure react-components for custom behaviour.
### state
Contains all files for global state management using redux-toolkit
#### api
State management for data received from the backend using redux-toolkit-query
##### pokemon
- emptyPokemonApi.ts: The rtk web-client generated from swagger.json will be injected into this api boilerplate.
- enhancedPokemonApi.ts: Manually edit generated rtk endpoints & query cache invalidation using tags.
- pokemonApi.ts: Rtk web-client & types generated from swagger.json.
- openapi-config.ts: Config for redux-toolkit-query-codegen to generate pokemonApi.ts.
##### error
Error handling for redux-toolkit-query. 
#### slice
State management for data without web requests. 
F.e. storing login data after receiving it to avoid using login queries on all pages.
### theme
Contains configs for global Mui theme and provides default styling & colors for all mui ui elements.
### util
Custom directory for general purpose functions on strings, files, arrays, objects, json etc.
### App.tsx
Contains your core functionality for theming, routing, global state management and global components.
### index.tsx
Boilerplate to integrate App.tsx into the dom of the index.html.
### react-app-env.d.ts
Tell the compiler understand that images can be imported.
## type
All Types are located outside src dir as they are not needed in a build.
Only Typescript uses types and builds only contain Javascript.
## .eslintrc.js
Configuration for code styling. Just copy some config and edit it until you like the stylings.
They can be automatically applied depending on your IDE.
## .gitignore
Contains all files to not be tracked by git.
## App.css
Global stylings for components & classes that are hard to style using Mui.
## index.html
Entry point of the application. Contains meta data & starts index.tsx.
## package.json
### scripts
They can f.e. be run using *yarn start*
- *yarn start* starts a local web server (stores build in memory).
- *yarn build* compiles frontend into dist dir.
- *yarn startFromBuild* start a local server from dist dir.
- *codegen* Generates a http-web-client from backend swagger.json & runs codegenCleanup.
- *codegenCleanup* Applies Eslint onto the generated http-web-client.
### dependencies
Used during runtime & part of build.
- @emotion: Styling Library used by Mui
- @hookform/resolvers: extends react-hook-form to allow custom validation using f.e. yup.
- @mui/icons-material: Icons as react components.
- @mui/material: Provides pre-styled components & builds on Css.
- @reduxjs/toolkit: Redux with way less boilerplate.
- jwt-decode: Decode jwt tokens.
- react: Wraps html elements using components & provides state management.
- react-dom: Integrates react into the browser dom.
- react-hook-form: handles form state & reduces boilerplate.
- react-redux: Global state management.
- react-router-dom: Routing to pages f.e. /login -> LoginPage.
- styled-components: Required by Mui & allows styling of react components.
- vite-plugin-svgr: Import .svg as react component.
- yup: Input validation for form.
### devDependencies
Not Used during runtime & not part of build.
- @rtk-query/codegen-openapi: Generates web-client from f.e. swagger.json.
- @types/*: Additional package types for Typescript.
- @vitejs/plugin-react: Fast refresh of browser page for code changes.
- eslint: Enforces code styling based on config. Airbnb provides good config.
- http-server: Run build from dist dir locally.
- ts-node: Required by Rtk Codegen.
- typescript: A common typescript version for all developers of this project.
- vite: A very fast build tool. sue
