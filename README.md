# Simple Discogs App

A simple app to search and list albums

https://alep.dev/discogs-app/

This Project uses:

Redux Toolkit / Query as state manager library because it provides a good way of making http request and caching them

https://redux-toolkit.js.org/rtk-query/overview

TwinMacro (Twailwind + Emotion) as Styling Library

https://github.com/ben-rogerson/twin.macro

PlopJs as generator

https://plopjs.com/documentation/#getting-started

## Before Running the App

You will need a discogs `key` and a `secret` to be able to fetch records

For more information: [Discogs Auth Flow](https://www.discogs.com/developers#page:authentication,header:authentication-oauth-flow)

After registering your application you will need to create an `.env` file and put your `key` and `secret` there

An `.env.example` file is provided as an example

## Install dependencies

```bash
npm i
```

## Run on Dev mode

```bash
npm start
```

### Note:

The discogs api requires an `https` connection, therefore the application will run over https with a self sign certificate, you will need to accept the certificate in order to proceed.

## Run tests

```bash
npm run test
```

```bash
npm run test:watch
```

## Scaffold components

```bash
npm run plop component
```

## Build for production

```bash
npm run build
```
