FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .          # ← INI YANG KURANG
RUN npm run build

EXPOSE 8080

CMD ["npx", "serve", "-s", "dist", "-l", "tcp://0.0.0.0:8080"]
