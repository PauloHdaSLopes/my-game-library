FROM nginx:latest
MAINTAINER Douglas Quintanilha
COPY /public /var/www/public
COPY /docker/config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]