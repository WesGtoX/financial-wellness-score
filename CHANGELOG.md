# Development Process

- Environment used for development:
   - Python 3.10
   - FastAPI
   - React
   - ViteJs
   - Docker
   - Docker Compose

## INFRA
It was chosen to work with `Docker` and `Docker Compose` in order to facilitate the execution of the process.

With just a few commands, it is possible to run the `Backend` and `Frontend`, so that they can be used through the browser.

### Docker file
Two `Dockerfiles` were created, one in the `backend` folder and the other in the `frontend`.

They separate application images and configurations, making it easier if you need to switch to specific repositories in the future.

### Docker-compose file
`Docker compose` was used to manage the application images, in this way it is possible to run and manage the two projects together, configuring the interaction between them, so that the `frontend` depends on the `backend` to run.


## BACKEND

For the development of the API, the `FastAPI` framework was chosen, because it is a small api, this framework facilitates the creation without having to load or configure many complex things for a simple project.

Unlike `Django`, which has a much more complex structure, I didn't see much sense in using it for this specific project, since the application only has a simple endpoint.

Poetry was used to manage the project's dependencies, some specific configuration files were also created, such as pytest's and requirements were generated through poetry's export command.

In this way, development dependencies are fully managed by it, and in the end it is possible to generate specific files to be used in production, without having to load the server with more configurations and installation, in addition to `Python` configurations.

## FRONTEND

For the development of the web application, `React` was used in conjunction with `ViteJS`, which is a leaner and faster tool for developing modern web applications, it has several advanced features in native ES modules.

In terms of architecture, the application was separated into small and specific components, to facilitate their integration with the main page.

`Styled-components` was also used, to better manage and organize the styling of the created components.

As it is a simple page, it was decided to manage the status of the result, according to the request in the API (which is carried out with `fetch()`), through the state of the application, without the need to work with routes in this case.

The application was built with `TypeScript`, using typing, for better assurance and code quality.

## MONOREPO

For configuration reasons, a `monorepo` was used, using two folders, backend and frontend.

In this way, the `docker-compose` file was created in the root of the project and the `dockerfile` in each folder of the project, joining the application in one.

The way it was configured does not prevent the project from being separated in the future, so that the applications are in specific repositories.

## MAKEFILE

To facilitate the execution of the commands to run and test the project, a makefile was created in the root, for example, to make the build, it is not necessary to type the whole command to execute, just with a `make build`, the command is executed (more details on how to run it was specified in [README](README.md)).

## DOCS

Documentation was created in the [README](README.md), explaining how to run the project in a simplified way, with the help of docker and makefile.

Access to the documentation (OpenAPI) of the API was also left in the readme.
