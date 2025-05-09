
FROM node:18


WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .


RUN mkdir -p logs


VOLUME [ "/app/logs" ]


EXPOSE 3001


CMD ["node", "logger.js"]
