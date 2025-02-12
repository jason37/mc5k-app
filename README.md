# ✨Message Capsules 5000 App✨

## Tech Stack
- Vue 3
- Vue Router
- Vite
- Pinia
- Tailwind CSS
- PrimeVue – UI components
- PrimeBlocks – login form UI
- Cypress

## Project Setup

### Prerequisites
Setup the API service as described at [https://github.com/jason37/mc5k-api](https://github.com/jason37/mc5k-api).

```sh
git clone https://github.com/jason37/mc5k-app.git
cd mc5k-app
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
At this point the app should be available at [http://localhost:5173](http://localhost:5173). (The port may vary. See the Vite output after `npm run dev`).
Login as user `test@example.com` and password `password` (auto–filled for your convience). 

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```
This will take a minute upon the first run as the Cypress test runner has to be downloaded.
