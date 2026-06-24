FROM dunglas/frankenphp:php8.2-bookworm

RUN install-php-extensions \
    gd \
    pdo_mysql \
    mbstring \
    xml \
    curl \
    zip

WORKDIR /app

COPY . .

RUN composer install --optimize-autoloader --no-interaction

RUN npm ci && npm run build

RUN php artisan storage:link || true

RUN chmod -R 777 storage bootstrap/cache

EXPOSE 8080

CMD ["frankenphp", "php-server", "--listen", ":8080", "--root", "public"]