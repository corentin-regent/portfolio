FROM node:alpine AS builder

COPY . /app
WORKDIR /app

RUN apk add gzip brotli

RUN npm ci
RUN npm run build

RUN find /app/build/ \( -name '*.html' -or -name '*.css' -or -name '*.js' -or -name '*.svg' \) \
    -exec gzip   -k --best '{}' + \
    -exec brotli -k     -9 '{}' +

FROM macbre/nginx-brotli

COPY --from=builder /app/build/ /app/www/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
