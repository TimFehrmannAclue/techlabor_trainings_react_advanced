# Setup
- install vite globally (f.e. via npm)
- yarn start

# Directories & Files
## dist
Stands for distributable, is not tracked in git and contains a complete build.
## node_modules
Packages installed by running *yarn* and not tracked in git.
## src
### endpoint
Contains web endpoints like /login via POST.
Endpoints have Swagger annotations to be included in the swagger.json.
### repository
Storing data (In memory database).
### service
Accessing & validating data from repository.
### swagger
Generate swagger.json & provide it via web endpoint.
### util
Custom directory for general purpose functions on strings, files, arrays, objects, json, etc.
### config.ts
Custom file to store configuration values in a singular place.
### index.ts
Entry point of backend application. Setup backend & start server.
## type
All Types are located outside src dir as they are not needed in a build.
Only Typescript uses types and builds only contain Javascript.
### backend
All backend types.
### frontend
These types can be passed to the frontend via swagger.json.
F.e. the jwt provided by the /login endpoint is a string, but it contains data in form of IUser.
This type can not be part of an endpoint annotation due to swagger limitations but is added via magic.
This is not relevant for the training.
## typeObject
Custom directory for generated TypeObjects (Not a common directory).
## .gitignore
Contains all files to not be tracked by git.
## package.json
### scripts
They can f.e. be run using *yarn start*
- *yarn start* starts a local server (stores build in memory).
- *yarn build* compiles backend into dist dir.
- *yarn startFromBuild* start a local server from dist dir.
### dependencies
Used during runtime & part of build
- bcrypt: Used for hashing & salting the user password.
- cors: Cors blocks web requests based on origin and is required for node.js server.
- express: The node.js server which accepts web requests via public endpoints.
- jsonwebtoken: Used to create an authentication token for each user.
- swagger-jsdoc: Creates an openapi 3.0 documentation from a config file & endpoints annotations.
- swagger-ui-express: Provides a web endpoint to access the swagger.json.
- typescript-json-schema: Compiles .ts files into json objects (f.e. interfaces which are added to swagger.json).
### devDependencies
Not Used during runtime & not part of build
- @types/*: Additional package types for Typescript.
- eslint: Enforces code styling based on config. Airbnb provides good config.
- ts-node: To start node.js server with Typescript.
- typescript: A common typescript version for all developers of this project.
## tsconfig.json
Configuration file to compile Typescript to executable Javascript.
Is configured to:
- include src dir
- exclude node_modules dir,
- create builds into dist dir
- enforce some semantic conventions
## yarn.lock
Stores the yarn package.json install history.
Replaces the package-lock.json.

# links
https://zyro.com/de/tools/image#upscaler
https://cssgradient.io/
