# Base image
FROM oven/bun:1.1.13

# Create app directory
WORKDIR /app

# Copy package.json and bun.lockb (Bun equivalent of package-lock)
COPY package.json bun.lockb ./

# Install app dependencies
RUN bun install

# Copy the rest of your application code
COPY . .

# Expose the port (if using Bun.serve or HTTP server)
EXPOSE 5001

# Run the bot
CMD ["bun", "run", "index.ts"]
