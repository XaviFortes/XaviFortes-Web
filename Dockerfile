# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# Expose port 80 for the app to listen on
EXPOSE 80

# Start the app
CMD ["npm", "run", "preview", "--host", "--port", "80"]