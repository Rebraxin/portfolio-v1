FROM node:14

RUN mkdir -p /srv/app
WORKDIR /srv/app
COPY . .
RUN yarn
RUN yarn build
RUN npm install -g serve
EXPOSE 3000
CMD [ "serve", "-l", "tcp://0.0.0.0:3000", "-s", "/srv/app/build"]
