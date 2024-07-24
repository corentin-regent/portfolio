export default {
  launch: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    dumpio: true,
    headless: true,
  },
  server: {
    command: 'npm run dev',
    port: 8080,
    debug: true,
  },
};
