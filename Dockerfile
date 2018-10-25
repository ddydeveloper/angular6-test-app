FROM node:alpine as builder 
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run prod

FROM nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]