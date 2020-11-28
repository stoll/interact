# ✍️ Interact

Interact is a simple tool to ease interaction with smart contracts on Ethereum.

---

## 👏 Credits

Interact is built on top of amazing work done by [olekon on Github](https://github.com/olekon) in [olekon/justsmartcontracts](https://github.com/olekon/justsmartcontracts).

## ⚙️ Setup

This repository is one of two key repositories in the Interact "ecosystem".

* [stoll/interact](https://github.com/stoll/interact) - The app
* [stoll/interact-api](https://github.com/stoll/interact-api) - The API used by the app

## Prerequisites

Website was developed using Node.js 8.4.0.

## Getting started

1. Install dependencies

```
npm install
```

2. Generate `.env` file

```
cp .env.example .env
```

3. Fill out variables in `.env`

## Running locally

```
npm run dev
```

Website will be accessible on http://localhost:8080/

If you want website to use https instead of http, execute

```
npm run devs
```

To build the bundle, execute

```
npm run build
```

### Using local API server

You may want to use local backend application (API server). In that case please visit its [repository](https://github.com/stoll/interact-api) and follow launch instructions. 

Then open this project's `.env` file and locate `SERVER_BASE_URL` variable. Set url to your local API server, for example

```
SERVER_BASE_URL=http://localhost:8000
```

## Contributing

Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for details

## Authors

* Oleg Kondrakhanov - [olekon](https://github.com/olekon)
* Alexey Kuzmin - [32kaa](https://github.com/32kaa)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details.
