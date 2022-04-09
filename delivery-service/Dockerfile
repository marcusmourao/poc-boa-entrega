FROM node:14.11.0-alpine3.11

WORKDIR /usr/src/app

COPY . /usr/src/app

ARG HOST=0.0.0.0

EXPOSE 3000

ARG ENV=prod
ARG NODE_ENV=production

RUN apk update \
	&& apk add --no-cache curl

RUN echo "Node version:" $(node --version)
RUN echo "npm version:" $(npm --version)

RUN npm install --only=production

CMD npm start


