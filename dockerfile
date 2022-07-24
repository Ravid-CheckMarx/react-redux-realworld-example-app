FROM node:18.5.0-slim
ENV REACT_APP_BACKEND_URL=http://localhost:8000/api
EXPOSE 4100
WORKDIR /app
COPY . .
RUN npm install --force
CMD ["npm", "start"]