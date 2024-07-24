export default {
  launch: {
    dumpio: true,
    headless: true,
  },
  server: {
    command: 'npm run dev',
    launchTimeout: 5 * 60 * 1000,
    port: 5173,
    debug: true,
  },
};
