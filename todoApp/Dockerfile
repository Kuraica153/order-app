# Build frontend application
FROM node:lts-alpine AS vitebuilder
WORKDIR /app
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Setup nginx server for frontend
FROM nginx:stable-alpine AS nginx
COPY --from=vitebuilder /app/dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;" ]