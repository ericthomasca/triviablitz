# Pull Docker Hub base image. 
# Alpine is a lightweight Linux distribution.
FROM node:lts-alpine
# Set working directory
WORKDIR /usr/src/app
# Copy app to container
COPY . .
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Expose port 8080
EXPOSE 8800
# Run the app
CMD [ "npm", "start" ]