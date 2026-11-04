# VPS Deployment & Hosting Guide for icondrugs.com

- **Domain:** `icondrugs.com` / `www.icondrugs.com`
- **VPS Server IP:** `46.202.162.79`
- **GitHub Repository:** [https://github.com/advaitkhangar01/Icon-Drugs-website.git](https://github.com/advaitkhangar01/Icon-Drugs-website.git)
- **Application Port:** `3000` (Reverse proxied through Nginx on Port 80/443)

---

## 1. DNS Configuration (Domain Registrar / Cloudflare)

Go to your DNS provider (GoDaddy, Namecheap, Cloudflare, Hostinger, etc.) and add the following `A` records:

| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `46.202.162.79` | Auto / 3600 |
| **A** | `www` | `46.202.162.79` | Auto / 3600 |

*(Wait a few minutes for DNS propagation. Verify using `ping icondrugs.com` or `nslookup icondrugs.com`)*

---

## 2. Connect to your VPS via SSH

```bash
ssh root@46.202.162.79
```

---

## 3. Server Prerequisites Installation (Ubuntu / Debian)

Run the following commands on the VPS:

```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Git, Curl, Nginx, Certbot
sudo apt install -y git curl ufw nginx certbot python3-certbot-nginx

# Install Node.js 20.x LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify versions
node -v
npm -v

# Install PM2 globally
sudo npm install -g pm2
```

---

## 4. Setup Project Directory & Clone Repository

```bash
# Create directory
sudo mkdir -p /var/www/icondrugs.com
sudo chown -R $USER:$USER /var/www/icondrugs.com

# Clone repository
git clone https://github.com/advaitkhangar01/Icon-Drugs-website.git /var/www/icondrugs.com
cd /var/www/icondrugs.com

# Install dependencies and build
npm ci
npm run build
```

---

## 5. Start the Application with PM2

```bash
cd /var/www/icondrugs.com

# Start using the included ecosystem file
pm2 start ecosystem.config.cjs

# Setup PM2 to auto-start on server reboots
pm2 save
pm2 startup
# (Run the sudo env PATH=... command printed on screen by pm2 startup)
```

---

## 6. Configure Nginx Reverse Proxy

Copy the pre-configured Nginx config to sites-available:

```bash
sudo cp /var/www/icondrugs.com/nginx/icondrugs.com.conf /etc/nginx/sites-available/icondrugs.com

# Enable the site configuration
sudo ln -s /etc/nginx/sites-available/icondrugs.com /etc/nginx/sites-enabled/

# Remove the default site if active
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx syntax
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## 7. Install Free SSL Certificate (HTTPS) via Let's Encrypt

Once DNS points to `46.202.162.79`, run:

```bash
sudo certbot --nginx -d icondrugs.com -d www.icondrugs.com
```

- Enter your email address for renewal notifications.
- Agree to the Terms of Service.
- Certbot will automatically configure HTTPS redirect and SSL certificates in Nginx.

Certbot sets up an automatic renewal timer. Test it anytime with:
```bash
sudo certbot renew --dry-run
```

---

## 8. Configure UFW Firewall

Ensure ports 22 (SSH), 80 (HTTP), and 443 (HTTPS) are allowed:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

## 9. Future Updates & Continuous Deployment

Whenever you push code updates to GitHub, simply run the deployment script on the VPS:

```bash
cd /var/www/icondrugs.com
bash deploy.sh
```
