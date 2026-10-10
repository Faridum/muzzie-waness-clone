# Muzzie

Muzzie is a music and podcast website built with Laravel and Vue.

## Run with Docker

You need Docker and Docker Compose. Make sure ports `8080`, `3307`, and `8081` are free.

1. Create your local environment file:

   ```bash
   cp .env.example .env
   ```

   If you already have a working `.env` file, keep it.

2. Set the app and database values in `.env`:

   ```dotenv
   APP_NAME=Muzzie
   APP_ENV=local
   APP_DEBUG=true
   APP_URL=http://localhost:8080

   DB_CONNECTION=mysql
   DB_HOST=mysql
   DB_PORT=3306
   DB_DATABASE=muzzie
   DB_USERNAME=muzzie
   DB_PASSWORD=muzzie
   ```

   These database values match the local settings in `docker-compose.yml`.

3. Build and start the services:

   ```bash
   docker compose up -d --build
   ```

4. Open [http://localhost:8080/install](http://localhost:8080/install) and follow the setup steps. Then open [http://localhost:8080](http://localhost:8080).

The app runs on port `8080`. phpMyAdmin is at `http://localhost:8081`. MySQL is available to tools on the host at port `3307`.

The Node service watches the frontend files while you work. To view logs, run:

```bash
docker compose logs -f app mysql node
```

To stop the services without deleting the database, run:

```bash
docker compose down
```

## Run without Docker

You need PHP 7.4, Composer, Node.js 14, npm, and a MySQL database.

1. Create `.env` from `.env.example` and set your app and database values.
2. Install the dependencies:

   ```bash
   composer install
   npm ci
   ```

3. Start Laravel:

   ```bash
   php artisan serve --host=127.0.0.1 --port=8080
   ```

4. In another terminal, start the frontend watcher:

   ```bash
   npm run watch-poll
   ```

5. Open [http://localhost:8080/install](http://localhost:8080/install) and follow the setup steps.

To build the frontend for production, run `npm run production`.

## Project files

- `app/` contains the Laravel application.
- `routes/API_V1/` contains the API routes.
- `resources/js/` contains the Vue app.
- `resources/sass/` contains the styles.
- `public/js/` and `public/css/` contain the built frontend files.
- `docker-compose.yml` contains the local Docker setup.
- `docs/` contains the user and installation guides.
