<h1 align="center">
  <img src=".github/logo.png" alt="Logo"><br /><br />
  <img src=".github/pessoinhas.png" alt="Logo Image" height="200">
</h1>

<h3 align="center">
  Ecoleta - The easiest way to throw away your trash
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/puera/ecoleta?color=%2334CB79">

  <a href="https://github.com/puera">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-puera-%2334CB79">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/puera/ecoleta?color=%2334CB79">
  
  <a href="https://github.com/puera/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/puera/ecoleta?color=%2334CB79">
  </a>
  
  <a href="https://github.com/puera/ecoleta/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/puera/ecoleta?color=%2334cb79">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/puera/ecoleta?color=%2334CB79">
</p>

<p align="center">
  <a href="#recycle-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a
    href="https://insomnia.rest/run/?label=Run%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fpuera%2Fecoleta%2Fmaster%2FInsomnia.json"
    target="_blank"
  >
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>

<img alt="Layout" src=".github/mockup.png">

## :recycle: About the project

This project was developed on the Next Level Week event by [Rocketseat](https://rocketseat.com.br/) &nbsp;🚀💜

With the idea to help world ecosystem, this software provide a flow to create recyclable garbage collection points and show in a map around you. In the end, you can send a text message using the whatsapp or an email, and make the world better without trash.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Expo](https://expo.io/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [EditorConfig](https://editorconfig.org/)
- [React Native Picker](https://github.com/react-native-community/react-native-picker)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [Expo](https://expo.io/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/puera/ecoleta.git && cd ecoleta
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to server folder
$ cd server

# Install the dependencies
$ yarn

# Use the script to run the migrations
$ yarn knex:migrate

# Use the script to run the seeds
$ yarn knex:seed

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

### Web

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to frontend web folder
$ cd frontend

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the client
$ yarn start
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to mobile folder
$ cd mobile

# Install the dependencies
$ yarn

# Be sure the file 'src/services/api.ts' have the IP to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn start
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork puera/ecoleta
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd ecoleta

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜&nbsp; by Renann Souza 👋 &nbsp;
