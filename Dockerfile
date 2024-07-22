FROM alpine AS builder

RUN apk add gzip brotli

COPY build/ /app/www/

RUN find /app/www/ \( -name '*.html' -or -name '*.css' -or -name '*.js' -or -name '*.json' -or -name '*.svg' \) \
    -exec gzip   -k --best '{}' + \
    -exec brotli -k     -9 '{}' +

FROM macbre/nginx-brotli

COPY --from=builder /app/www/ /app/www/

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
