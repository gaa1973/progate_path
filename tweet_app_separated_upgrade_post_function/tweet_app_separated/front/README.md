# front

## Install prerequisites

- Node.js (22.12.0 or newer)

## Install

call install command on front directory.

```:console
npm clean-install
```

## Start development mode

call watch command on front directory.

```:console
npm run start
```

and access to `http://localhost:8000`

## build for production

call build command on front directory.

```:console
npm run build
```

and access to `http://localhost:8000`

## Command

npm command list. call `npm run [command]`. for example:

```:console
npm run test:e2e
```

will run all tests in this project.

- `lint:check`: check code style by eslint,
- `lint:fix`: check code style by eslint with auto fix,
- `format:check`: check format by prettier,
- `format:fix`: check format by prettier with auto fix,
- `start`: start development mode
