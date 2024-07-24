export default {
  launch: {
    headless: true,
  },
  server: {
    command: 'npm run dev',
    launchTimeout: 60 * 1000,
    port: 5173,
  },
};
