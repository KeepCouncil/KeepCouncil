FROM nginx:1.23.0-alpine

RUN apk add openssl && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /etc/nginx/conf.d
HEALTHCHECK --interval=10s --start-period=10s --timeout=4s --retries=3 \
  CMD nc -vz -w1 localhost 80 || exit 1

RUN openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Company, Inc./CN=mydomain.com" -addext "subjectAltName=DNS:mydomain.com" -newkey rsa:2048 -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt;
# Expected Output
# Generating a RSA private key
# .......................................+++++
# ....+++++
# writing new private key to '/etc/ssl/private/nginx-selfsigned.key'
# -----

# Copy backend source into working directory
COPY ./packages/proxy/ /etc/nginx/conf.d

# For documentation to developers - EXPOSE command doesn't actually do anything, but tells what should be made open
EXPOSE 80 443
