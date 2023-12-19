# Используем node:14 в качестве базового образа
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем только файл package.json внутрь контейнера
COPY package.json .

# Запускаем команду npm install
RUN npm install

# Копируем все остальные файлы внутрь контейнера
COPY . .

# Запускаем сервис командой node server.js
CMD ["node", "server.js"]
