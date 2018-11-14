# OpenSSL

## Commands

`curl --insecure -v <url> 2>&1 | awk 'BEGIN { cert=0  } /^\* SSL connection/ { cert=1  } /^\*/ { if (cert) print  }'`: Get certificate details from a URL. E.g.: `curl --insecure -v https://www.google.com 2>&1 | awk 'BEGIN { cert=0  } /^\* SSL connection/ { cert=1  } /^\*/ { if (cert) print  }'`

## How-To

### Install an untrusted certificate

On this example we will add the certificate file *~/zscale.crt* from the company *ZScale*

```bash
sudo cp ~/zscale.crt /usr/local/share/ca-certificates
sudo update-ca-certificates

# The certificate is installed in the following folders:
/etc/ssl/certs/
/etc/ssl/certs/ca-certificates.crt
```
