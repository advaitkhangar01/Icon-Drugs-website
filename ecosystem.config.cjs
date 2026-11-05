module.exports = {
  apps: [
    {
      name: "icondrugs-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3005 -H 127.0.0.1",
      cwd: "/var/www/icondrugs.com",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3005,
      },
    },
  ],
};
