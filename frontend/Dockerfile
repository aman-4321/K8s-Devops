FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

FROM node:alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist"]