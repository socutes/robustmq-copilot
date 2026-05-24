# RobustMQ-Copilot

The one-step RobustMQ operation and maintenance management platform.

## Quick Start

### Prerequisites

- Node >= 20.0
- pnpm >= 10.0

### Installation

1. Clone the project and install dependencies:

```bash
git clone <repository-url>
cd robustmq-copilot
pnpm install
```

2. Start the development server:

```bash
pnpm ui:dev
```

The web UI will be available at `http://localhost:4000`

## Usage Guide

### Development Commands

```bash
# Start development server (default port 4000)
pnpm ui:dev

# Start development server on custom port
PORT=8080 pnpm ui:dev

# Build for production
pnpm ui:build

# Preview production build
pnpm ui:preview
```

### Configuration

The project supports flexible configuration through environment variables and configuration files.

#### Port Configuration

```bash
# Set server port
PORT=8080 pnpm ui:dev
PORT=8080 pnpm ui:preview
```

#### API Address Configuration

The system automatically detects the current page address for API requests, but you can override this with environment variables:

```bash
# Set custom HTTP API address
API_BASE_URL=http://localhost:8080 pnpm ui:dev
```

### Predefined Scripts

The project includes several predefined scripts for common configurations:

```bash
# Development with custom ports
pnpm run dev:8080    # Start dev server on port 8080
pnpm run dev:3001    # Start dev server on port 3001

# Preview with custom ports
pnpm run preview:8080  # Start preview server on port 8080
pnpm run preview:3001  # Start preview server on port 3001
```

### Configuration Priority

For API addresses:

1. **Environment Variable API Address** (Highest Priority)
2. **Current Page Address** (Medium Priority)
3. **Default Fallback Address** (Lowest Priority)

### Configuration Files

Configuration is managed through `packages/web-ui/config/app.js`. You can view the current configuration in the browser console via `window.__APP_CONFIG__`.

### Common Use Cases

#### Local Development

```bash
# Standard local development
pnpm ui:dev
# Access at http://localhost:4000
```

#### Development with Custom Backend

```bash
# Connect to remote API server
API_BASE_URL=http://192.168.1.100:8080 pnpm ui:dev
# Frontend at http://localhost:4000, API calls to http://192.168.1.100:8080
```

#### Network Access Development

```bash
# Use a different port
PORT=8080 pnpm ui:dev
```

## Development

### Project Structure

```
robustmq-copilot/
├── packages/
│   ├── web-ui/           # Frontend React application
│   │   ├── src/          # Source code
│   │   ├── config/       # Configuration files
│   │   └── dist/         # Build output
│   └── services/         # gRPC service definitions
└── package.json          # Root package configuration
```

### Development Setup

1. Clone the project:

```bash
git clone <repository-url>
cd robustmq-copilot
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development:

```bash
pnpm ui:dev
```

### Configuration Development

The configuration system is located in `packages/web-ui/config/`:

- `app.js` - Main configuration file
- `README.md` - Detailed configuration documentation

### Build and Deployment

```bash
# Development build
pnpm ui:dev

# Production build
pnpm ui:build

# Preview production build
pnpm ui:preview
```

### Troubleshooting

#### Port Already in Use

If you encounter port conflicts:

```bash
# Use a different port
PORT=8080 pnpm ui:dev

# Or kill existing processes
pkill -f "rsbuild dev"
```

#### API Connection Issues

If API requests fail:

1. Check if the backend service is running
2. Verify API address configuration:
   ```bash
   # Use custom API address
   API_BASE_URL=http://your-api-server:8080 pnpm ui:dev
   ```
3. Check browser console for configuration: `window.__APP_CONFIG__`

#### Build Issues

If builds fail:

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules
   pnpm install
   ```
2. Clear build cache:
   ```bash
   rm -rf packages/web-ui/dist
   pnpm ui:build
   ```

## Technology Stack

- **Frontend**: React 19, TypeScript, TanStack Router, TanStack Query
- **UI Components**: Radix UI, Tailwind CSS
- **Build Tool**: Rsbuild
- **Package Manager**: pnpm
- **State Management**: Zustand

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test them thoroughly
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/your-feature-name`
6. Submit a pull request

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for new features
- Update configuration documentation when adding new environment variables
- Test your changes with different configuration scenarios
- Ensure backward compatibility when possible

## License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
