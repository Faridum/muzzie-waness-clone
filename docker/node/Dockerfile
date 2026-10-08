FROM node:14-bullseye

WORKDIR /var/www/html

CMD ["bash", "-lc", "if [ ! -d node_modules ] || [ -z \"$(ls -A node_modules 2>/dev/null)\" ]; then npm ci; fi; npm run watch-poll"]
