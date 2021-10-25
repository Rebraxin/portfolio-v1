FROM node:14-alpine as builder

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -f ./Dockerfile -t rebraxin/portfolio-react . 
# docker push rebraxin/portfolio-react 