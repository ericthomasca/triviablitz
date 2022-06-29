# Pull Docker Hub base image. 
# Alpine is a lightweight Linux distribution.
FROM node:lts-alpine
# Set working directory
WORKDIR /app
# Install app dependencies
COPY package.json ./
RUN npm install
# Copy app to container
COPY . .
# Expose port 80
EXPOSE 80
EXPOSE 443
# Run the app
CMD [ "npm", "start" ]