FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production

ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


