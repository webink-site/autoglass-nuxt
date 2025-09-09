module.exports = {
  apps: [
    {
      name: 'AUTOGLASS',
      port: '3000',
      exec_mode: 'cluster',
      instances: '2',
      script: '.output/server/index.mjs',
      listen_timeout: '3000',
    },
  ],
}
