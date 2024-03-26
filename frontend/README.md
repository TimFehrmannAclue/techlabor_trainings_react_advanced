# ToDo
- React Features festlegen (Vorstellung, Training, Ausblick)
  1. Css-modules vs styled-components
  2. Api-Generierung
     - ToDo 1.1: Api Generation (Rtk-codegen & OpenApi.json)
     - ToDo 1.2: Login Mutation (RTK-Query)
     - ToDo 1.3: (Optional) Tag-Invalidierung
  3. State Management (state explained flux?)
    - ToDo 2.1: Writing Login Response into LoginSlice (RTK Slice & State Management)
    - ToDo 2.2: Reading LoginData from LoginSlice (React-Router, RTK Slice & State Management)
    - ToDo 2.3: Redirect based on LoginData (React-Router, Login-Guards)
  4. UseMemo, useRef (triggers rerenders?)
    - ToDo 3.1: f.e. child has cached arrays using useMemo
    - ToDo 3.2: but to update one of that elements useRef can be used
  5. (Optional) error boundaries -> error page
  6. (Optional) Middleware Error Handling

- isLoading
- files for TabContents
- document tab dir
- add query
  - add tag invalidations
- localize response tokens
- add parts of affinity steps to presentation
- extend IProps to reduce redundance
- loading while query
- diagram
  - complete architecture
  - Login sequence diagram
  - Slice sequence diagram (f.e. Snackbar)
- analyze build size & package sizes
- remove outdated dir
- test on someone elses pc, also note whether nodejs version must be installed manually
- does backend/error stuff work?
- ReadMe in root dir

# Preparation before Workshop
- have look at last training
- Clone git repo
- IDE for Js/Ts (Webstorm, VsCode, etc.)
  - Make sure auto complete works
- Setup frontend & backend (see README.md -> Setup)


# Setup
- start backend (See backend README.md)
- install vite globally (f.e. via npm)
- yarn start

# Directories & Files
## dist
Stands for distributable, is not tracked in git and contains a complete build.
## node_modules
Packages installed by running *yarn* and not tracked in git.
## public
Images & configuration files used by index.html.
### favicon.cio
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
### localisation
Translating tokens into text for user (f.e. SERVER_ERROR -> 'Server error').
### page
Each page has a url route like f.e. /login and content for it.
Pages use and configure react-components for custom behaviour.
### state
Contains all files for global state management using redux-toolkit
#### api
State management for data received from the backend using redux-toolkit-query
##### backend
- emptyApi.ts: The rtk web-client generated from swagger.json will be injected into this api.
- enhancedApi.ts: Manually edit generated rtk endpoints & query cache invalidation using tags.
- rawApi.ts: Rtk web-client & types generated from swagger.json.
- swagger.json: This is a local backup file in case backend swagger.json is not available.
- openapi-config.ts: Config for redux-toolkit-query-codegen to generate rawApi.ts.
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
- @hookform/resolvers: extends react-hook-form to allow custom validation using f.e. yup.
- @mui/icons-material: Icons as react components.
- @mui/material: Provides pre-styled components & builds on Css.
- @mui/styled-engine: required to use Mui as styling library since default is now @Emotion.
- @mui/system: Provides more styling utility like f.e sx prop.
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
- vite: A very fast build tool.
### resolutions
Sometimes there are incompatibilities between package dependencie.
Like two packages using same package with different version.
These issues can be resolved using resolutions.
- "@mui/styled-engine: npm:@mui/styled-engine-sc@latest": Fix of open Mui issue


# Training Responsive Webapp React-Mui-rtk

## Notes from talk with Johannes
- testing?,
- api calls
- error boundaries -> error page
- routing concept
- Zeitplan aufstellen und welche Zeiten als Puffer genommen werden können

- Tipps
  - Einer präsentiert -> kein presenter switch in teams
  - Einen beauftragen auf Fragen im Chat hinzuweisen
  - Mittagpause hintendran & vorab bestellen oder mittendrin Pause
  - Code & Bilder im Powerpoint

## Own Notes
Backend
- useLocation?, useNavigate?
- Api generation
- Endpoints
- Login
  - Swagger.json
    Frontend
  - Content
    - LoginPage (yup, react-hook-form)
    - MenuPage Tabs (Url SearchParams, Tabs)
      - Tab1: Config based form generation
      - Tab2: ?
  - Routing
    - LoginRoute, ProtectedRoute
  - State
    - LoginSlice (rtk query & localstorage)
    - SnackbarSlice ()
    - codegen Api generation (Queries, Mutations, Tags)
  - Design
    - Mui
      - Styling (sx vs styled vs theme)
  - QoL
    - EsLint
  - Optional
    - How to Responsive (mobile -> desktop) (when leftover time)
    - automated form generation (config -> react component -> validated form)
    - Charts (recharts)
    - Mui DataGrid
    - localization
    - color theming
    - Cookies
    - Dialog/Prompt
    - Signals (got to read into it myself)
    - Deployment
    - Reusability of components
    - Seo
    - Web Security
    - Build Size & optimization
    - rtk transformResponse

Questions:
- Was ist bei react training gewünscht?
- Was kann ich an Wissen voraussetzen?
  - Routing
  - Custom Components
  - Local State Management
  - Global State Management
  - Api Usage
  - Css basics
  - Typescript Types
- scss vs mui? wie viele verwenden mui jetzt/zeitnah?
- auf pokedex projekt aufbauen oder separat?
