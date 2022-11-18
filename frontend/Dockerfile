FROM node:16-alpine as builder

#add curl
RUN apk --no-cache add curl 
WORKDIR /app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# pnpm fetch does require only lockfile
COPY pnpm-lock.yaml ./

RUN pnpm fetch --prod
ADD . ./

RUN pnpm install -r --offline --prod
RUN pnpm build

# Bundle static assets with nginx
FROM nginx:1.23.2-alpine as production

ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


