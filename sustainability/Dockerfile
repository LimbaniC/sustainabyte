FROM node:23-alpine

WORKDIR /app

COPY . .

COPY package*.json .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]
