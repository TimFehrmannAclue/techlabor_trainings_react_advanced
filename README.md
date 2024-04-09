# Setup
- start backend (See backend README.md)
- start frontend (See frontend README.md)

# ToDo
- React Features festlegen (Vorstellung, Training, Ausblick)
  1. Css-modules vs styled-components (15m, Leon?)
  2. Api-Generierung (10m + 15m, Tim?)
    - ToDo 1.1: Api Generation (Rtk-codegen & OpenApi.json)
    - ToDo 1.2: Import generated login endpoint & use it
  Kurze Pause (10m)
  3. Redux State Management (Slice - explain via flux?) (20m + 30m, Leon?)
    - ToDo 2.1: Writing Login Response into LoginSlice (RTK Slice & State Management)
    - ToDo 2.2: Reading LoginData from LoginSlice (React-Router, RTK Slice & State Management)
    - ToDo 2.3: LoginRoute Redirect based on LoginData (React-Router, Login-Guards)
  Pause & Essen bestellen (10m)
  4. Special React Hooks (Todo useCallback?) (20m + 40m, Tim?)
     - ToDo 2.1 useMemo
     - ToDo 2.2 useRef
     - ToDo 2.3 Fix Disabled / Force Rerendering
     - ToDo 2.4 Add Reset
     - ToDo 2.5 Tag Invalidation
     - nested state & pitfalls example?
  5. Ausblick (Signals, etc.) (20-30m)
  6. (Optional) error boundaries -> error page
  7. (Optional) Middleware Error Handling

# Training Responsive Webapp React-Mui-rtk
## Notes from talk with Johannes
- api calls
- error boundaries -> error page
- routing concept
- Zeitplan aufstellen und welche Zeiten als Puffer genommen werden können

- Tipps
  - Einer präsentiert -> kein presenter switch in teams
  - Einen beauftragen auf Fragen im Chat hinzuweisen
  - Mittagpause hintendran & vorab bestellen oder mittendrin Pause
  - Code & Bilder im Powerpoint

## ToDo (unsorted)
- documentation
  - add links in readme & code to useful documentation
  - code todos
    - split up into branches
  - diagram
    - Slice sequence diagram (f.e. Snackbar)
    - pitfalls with nested objects in useState due to direct references to memory?
- optimization
  - analyze build size & package sizes
  - set rtk error type for login in backend annotation
- presentation
  - explain project structure
  - entry slide: what makes someone advanced in react?
    - less boilerplate, less nesting, performance comes last
  - decide for german or english
  - Fragen für Teilnehmer einbauen
  - add file names to snippets & sources to links/images
- test
  - test on someone elses pc, also note whether nodejs version must be installed manually (f.e. Matthäus, Sandria)
- feedback
  - show to Johannes
### Optional
- use cache when changing back to pokemon tab to reduce load time
- move snackbar into branch
- localize response tokens / does backend/error stuff work?
- add parts of affinity designer for ui concepts steps to presentation
- extend IProps to reduce redundancy

## Preparation before Workshop
- have look at last training
- Clone git repo
- IDE for Js/Ts (Webstorm, VsCode, etc.)
  - Make sure auto complete works
- Setup frontend & backend (see README.md -> Setup)
