FROM node:latest
MAINTAINER Paulo Lopes
ENV NODE_ENV=prd
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000