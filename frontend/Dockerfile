FROM node:18.14.2-alpine

# set work directory
WORKDIR /app

# set env variables
ENV PATH="./node_modules/.bin:$PATH"

# install dependencies
COPY ./package.json /app/package.json

RUN npm install

# copy project
COPY . /app

EXPOSE 5173

CMD ["npm", "run", "host"]
