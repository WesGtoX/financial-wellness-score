build:
	docker-compose build

backend-bash:
	docker-compose run --rm backend bash

frontend-bash:
	docker-compose run --rm frontend bash

run:
	docker-compose up

test:
	docker-compose run --rm backend bash -c 'pytest'

down:
	docker-compose down -v
