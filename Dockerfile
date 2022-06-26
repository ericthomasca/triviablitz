# Pull Docker Hub base image. 
# Alpine is a lightweight Linux distribution.
FROM node:lts-alpine
# Set working directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install -qy
# Copy app to container
COPY . .
# Run the build script in package.json
CMD ["npm", "run", "build"]
# Copy build output to host
COPY . /usr/app/build