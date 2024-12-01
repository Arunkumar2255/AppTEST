FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm install connect-flash

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]
