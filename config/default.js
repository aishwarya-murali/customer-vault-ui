const ENV = process.env.NODE_ENV || 'development';

// server configuration
const config = {
  env:  ENV,
  api: {
    uri: {
      protocol: process.env.API_PROTOCOL || 'http',
      host: process.env.API_HOST || 'localhost:3001'
    }
  },
  logger: {
    console: {
      enabled: true,
      level: 'info',
      timestamp: true,
      prettyPrint: true
    }
  }
};

module.exports = config;