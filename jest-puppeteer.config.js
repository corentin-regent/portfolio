export default {
  launch: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    dumpio: true,
    headless: true,
  },
  server: {
    command: 'npm run dev',
    port: 5173,
    debug: true,
    launchTimeout: 30 * 1000,
    protocol: 'http',
    host: 'localhost'
  },
};
