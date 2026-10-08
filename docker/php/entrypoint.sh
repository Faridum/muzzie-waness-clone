#!/bin/bash
set -e

cd /var/www/html

# Laravel's installer checks these permissions explicitly.
chmod -R 777 storage/framework storage/logs bootstrap/cache resources/lang 2>/dev/null || true

if [ ! -f vendor/autoload.php ]; then
    echo "Installing PHP dependencies..."
    composer install --no-interaction --prefer-dist
fi

exec "$@"
