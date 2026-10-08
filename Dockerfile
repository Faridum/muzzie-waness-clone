FROM php:7.4-apache

RUN sed -i \
        -e 's|deb.debian.org/debian|archive.debian.org/debian|g' \
        -e 's|deb.debian.org/debian-security|archive.debian.org/debian-security|g' \
        -e 's|security.debian.org/debian-security|archive.debian.org/debian-security|g' \
        /etc/apt/sources.list \
    && sed -i '/bullseye-updates/d' /etc/apt/sources.list \
    && echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99no-check-valid-until \
    && apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        unzip \
        libcurl4-openssl-dev \
        libicu-dev \
        libonig-dev \
        libxml2-dev \
        libzip-dev \
    && docker-php-ext-install -j"$(nproc)" \
        bcmath \
        curl \
        intl \
        mbstring \
        pdo_mysql \
        xml \
        zip \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer
COPY docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY docker/php/entrypoint.sh /usr/local/bin/muzzie-entrypoint
RUN chmod +x /usr/local/bin/muzzie-entrypoint

WORKDIR /var/www/html

ENTRYPOINT ["/usr/local/bin/muzzie-entrypoint"]
CMD ["apache2-foreground"]
