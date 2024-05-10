# Xavi Fortes Portfolio

This repository contains the source code for Xavi Fortes portfolio website, built using Vue.js.

## Dockerfile

The Dockerfile in this repository allows you to containerize the website for deployment. It utilizes Node.js as the base image, installs dependencies, builds the Vue.js application, and exposes it on port 80.

```Dockerfile
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

# Build the app for production
RUN npm run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=80

# Expose port 80 for the app to listen on
EXPOSE 80

# Start the app
CMD ["npm", "run", "preview", "--", "--host", "--port", "80"]
```

## CI/CD Pipeline

The repository includes a GitHub Actions workflow (`CI-CD.yml`) for continuous integration and continuous deployment. The workflow is triggered on push and pull request events for the main branch. It consists of two main jobs:

1. **Test:** This job runs tests, including type checking and linting, to ensure code quality.
2. **Build:** This job builds the Docker image for the Vue.js application and pushes it to Docker Hub for deployment.

```yaml
name: CI-CD

# Trigger the workflow on push and pull request events for the main branch
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# Define the jobs that will run in the workflow
jobs:
  test:
    runs-on: ubuntu-latest
    environment: Runner
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Cache dependencies
      uses: actions/cache@v2
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-node-

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm run type-check && npm run lint

    - name: Upload coverage to Codecov (optional)
      uses: codecov/codecov-action@v3
      with:
        token: ${{ secrets.CODECOV_TOKEN }}

  build:
    runs-on: ubuntu-latest
    environment: Runner
    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Cache dependencies
      uses: actions/cache@v2
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('Dockerfile') }}
        restore-keys: |
          ${{ runner.os }}-node-
          ${{ runner.os }}-node-${{ hashFiles('Dockerfile') }}

    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: karasus15/xavifortes-web:latest
```

## Deployment with Kubernetes

After the Docker image is built and pushed to Docker Hub, it can be deployed to a Kubernetes cluster. Below is an example YAML file for a Kubernetes deployment that pulls the Docker image:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: xavifortes-portfolio
spec:
  replicas: 1
  selector:
    matchLabels:
      app: xavifortes-portfolio
  template:
    metadata:
      labels:
        app: xavifortes-portfolio
    spec:
      containers:
      - name: xavifortes-portfolio
        image: karasus15/xavifortes-web:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: xavifortes-portfolio
spec:
  selector:
    app: xavifortes-portfolio
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

This Kubernetes deployment defines a single replica of the application and exposes it via a service on port 80.

## Self-hosted

The website is hosted on a self-hosted server using Docker and Kubernetes (K3S). The website is available at [xavifortes.com](https://xavifortes.com).

## Usage

To build and run the Vue.js application locally, follow these steps:

1. Clone this repository.
2. Navigate to the repository directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run serve`.
5. Access the website at `http://localhost:8080`.

To deploy the application using Docker and Kubernetes, build the Docker image using the provided Dockerfile, push it to Docker Hub, and apply the Kubernetes deployment YAML file to your Kubernetes cluster.

## Contributors

- Xavi Fortes <xavifortes@xavifortes.com>

Feel free to contribute by submitting issues or pull requests!