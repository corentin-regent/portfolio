FROM macbre/nginx-brotli

COPY build/ /app/www/

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
