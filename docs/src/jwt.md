# Json Web Token (JWT)

## Selecting the proper cryptographic algorithm

### Security concerns

![](http://tinyurl.com/y6a7gn4n)

### Algorithm based on the concerns

![](http://tinyurl.com/y225l36z)

- **HMAC algorithms**: A special super efficient *hash (HMAC)* for ensuring the integrity and authenticity of data. In order to compute an *HMAC* you need a *secret key*.

- **Digital signatures**: Offer the properties of *HMAC*, plus *cryptographic non-repudiation* (enabling others than the signer to check the signature's validity). *Digital signatures* are based on *public / private key* cryptography. Require a *public / private key pair* (of type *RSA*, *elliptic curve (EC)*, or *Edwards-curve Octet Key Pair (OKP)*).

- **Authenticated encryption**: Encrypt data, while also ensuring its integrity and authenticity (like *HMAC*). 

## References

- [Article that allow to proper select the diferent types of cryptographic algorithm](https://connect2id.com/products/nimbus-jose-jwt/algorithm-selection-guide)
