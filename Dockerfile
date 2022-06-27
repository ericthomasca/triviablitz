# Pull Docker Hub base image. 
# Alpine is a lightweight Linux distribution.
FROM node:lts-alpine
# Set working directory
WORKDIR /usr/src/app
# Copy app to container
COPY triviablitz-client/ ./build/
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Run the build script in package.json
RUN cd build && npm install && npm run build
# Copy build output to host
COPY build/ /usr/src/app/
# Expose port 8080
EXPOSE 8800
# Run the app
RUN cd /usr/src/app/ && npm start