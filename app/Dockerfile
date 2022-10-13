FROM node:lts-alpine3.15 as builder
WORKDIR /app
COPY . .
RUN yarn build

FROM node:lts-alpine3.15
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/dist /app/dist