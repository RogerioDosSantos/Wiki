# OpenSSL

## Commands

`curl --insecure -v <url> 2>&1 | awk 'BEGIN { cert=0  } /^\* SSL connection/ { cert=1  } /^\*/ { if (cert) print  }'`: Get certificate details from a URL. E.g.: `curl --insecure -v https://www.google.com 2>&1 | awk 'BEGIN { cert=0  } /^\* SSL connection/ { cert=1  } /^\*/ { if (cert) print  }'`

## How-To

### Install an untrusted certificate

On this example we will add the certificate file *~/zscale.crt* from the company *ZScale*

```sh
sudo cp ~/zscale.crt /usr/local/share/ca-certificates
sudo update-ca-certificates

# The certificate is installed in the following folders:
/etc/ssl/certs/
/etc/ssl/certs/ca-certificates.crt
```

### Create Self-signed certificate (Public and Private)

```sh
# Create x509 certificate and key (PEM)
openssl req -x509 -newkey rsa:2048 -days <period> -keyout <key_name>.pem -out <certificate_name>.pem

# Put the certificate and key into a single file (PFX) - This file contains both private and public keys
openssl pkcs12 -export -in <certificate_name>.pem -inkey <key_name>.pem -out <certificate_with_keys>.pfx

# Export the public key
openssl pkcs12 -in <certificate_with_keys>.pfx -clcerts -nokeys -out <public_certificate_name>.pem
```

