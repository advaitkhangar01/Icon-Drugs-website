#!/usr/bin/env bash
# Production deployment script for Icon Drugs on VPS
set -e

APP_DIR="/var/www/icondrugs.com"
echo ">>> Starting deployment in $APP_DIR..."

cd $APP_DIR

echo ">>> Fetching latest code from GitHub..."
git fetch origin main
git reset --hard origin/main

echo ">>> Installing dependencies..."
npm ci --legacy-peer-deps || npm install

echo ">>> Building Next.js application..."
npm run build

echo ">>> Reloading PM2 process..."
pm2 reload ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs

echo ">>> Saving PM2 process list..."
pm2 save

echo ">>> Deployment successfully completed!"
