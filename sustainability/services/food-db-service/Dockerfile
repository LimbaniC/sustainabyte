# Start from official MongoDB image
FROM mongo:6.0

# Set working directory inside container
WORKDIR /docker-entrypoint-initdb.d

# Copy any initialization scripts into MongoDB's special startup directory
# These will be run automatically the first time the container starts
#COPY ./init-scripts/ ./ 

# Optional: Install extra debugging tools (nano, curl, etc.)
RUN apt-get update && \
    apt-get install -y nano curl && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Mongo will automatically run any *.js or *.sh files in /docker-entrypoint-initdb.d
