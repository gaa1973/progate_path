# TweetApp

## Install prerequisites

- Node.js (22.12.0 or newer)

## Install

call install command on project root.

```:console
npm clean-install
```

## Start api with development mode

call watch command on project root.

```:console
npm run watch -w api
```

and access to `http://localhost:8000`

## Start front with development mode

call watch command on project root.

```:console
npm run start -w front
```

and access to `http://localhost:3000`

## Start e2e test

call start command on project root.

```:console
npm run test:e2e -w e2e
```

## Command

npm command list. call `npm run [command] -w [dir]`. for example:

```:console
npm run format:fix -w front
```
