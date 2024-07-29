export default {
  launch: {
    dumpio: true,
    headless: true,
  },
  server: {
    command: 'npm run dev',
    host: 'localhost',
    port: 5173,
    protocol: 'http',
    timeout: 30_000,
  },
};
