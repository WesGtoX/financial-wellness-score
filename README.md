<h1 align="center">
  <a href="https://github.com/WesGtoX/financial-wellness-score">
    <img src=".github/logo.svg" alt="Financial Wellness Score" title="Financial Wellness Score" width="150px">
  </a>
</h1>

<p align="center">
  <a href="#about-the-project">About</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#technology">Technology</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#usage">Usage</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#roadmap">Roadmap</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img alt="Financial Wellness Score CI" src="https://github.com/WesGtoX/financial-wellness-score/actions/workflows/docker-image.yml/badge.svg" />
  <img alt="codecov" src="https://codecov.io/gh/WesGtoX/financial-wellness-score/branch/main/graph/badge.svg?token=CODECOV_TOKEN" />
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wesgtox/financial-wellness-score?style=plastic" />
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/wesgtox/financial-wellness-score?style=plastic" />
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wesgtox/financial-wellness-score?style=plastic" />
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/wesgtox/financial-wellness-score?style=plastic" />
  <img alt="License" src="https://img.shields.io/github/license/wesgtox/financial-wellness-score?style=plastic" />
</p>


# Financial Wellness Score

Financial Wellness Score is an application that shows the user their financial health.

## About the Project

Through the annual gross income and average monthly costs, the application can tell you if your financial health is going well or bad.

The statuses returned by the application are based on three types:
- `HEALTHY`: _Your financial health is very good, keep up the good work;_
- `MEDIUM`: _Attention! Your financial health is average, but there is room for improvement;_
- `LOW`: _Careful! Your financial health is not good._


## Technology 

This project was developed with the following technologies:

- [Python](https://www.python.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## Layout

You can view the project layout in the format through this [LINK](https://www.figma.com/file/eysSLDJFaEgGRWqHTFVehu/Take-Home-Assignment-v3?node-id=0%3A1).  
Remembering that you will need to have an account at [Figma](http://figma.com/).  


## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)


### Build and Run

1. Clone the repository:
```bash
git clone https://github.com/WesGtoX/financial-wellness-score.git
```
2. Build docker images:
```bash
make build
```
3. Run:
```bash
make run
```
4. Run backend tests:
```bash
make test
```
5. Access the api documentation through the link:
- http://0.0.0.0:8000/docs/

6. Access the web application through the link:
- http://localhost:5173/


## Usage

Once the project is running, the API documentation can be accessed through the following links:
- http://0.0.0.0:8000/docs/
- http://0.0.0.0:8000/redoc/

The web application can be accessed through the link:
- http://localhost:5173/


## Roadmap
- More information about the development process: [CHANGELOG](CHANGELOG.md)


## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [Wesley Mendes](https://wesleymendes.com/) :wave:
