module.exports = {
  apps: [
    {
      name: "icondrugs-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "/var/www/icondrugs.com",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      watch: false,
      max_memory_restart: "1G",
      restart_delay: 4000,
    },
  ],
};
