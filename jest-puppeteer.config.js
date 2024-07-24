export default {
  launch: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    dumpio: true,
    headless: true,
  },
  server: {
    command: 'npm run preview',
    port: 3000,
    debug: true,
    launchTimeout: 30 * 1000,
  },
};
