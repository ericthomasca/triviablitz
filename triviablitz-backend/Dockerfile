# Pull Docker Hub base image. 
# Alpine is a lightweight Linux distribution.
FROM node:lts-alpine
# Set working directory
WORKDIR /app
# Copy app to container
COPY . .
# Install app dependencies
COPY package.json ./
RUN npm install -qy
# Expose port 80
EXPOSE 80
# Run the app
CMD [ "npm", "start" ]