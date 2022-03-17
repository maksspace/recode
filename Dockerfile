FROM node:lts-alpine

WORKDIR /app/api
COPY ./api/package*.json ./
RUN npm ci

COPY ./dist ./dist

CMD ["npm", "run", "start:prod"]
