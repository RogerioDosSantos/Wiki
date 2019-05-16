# IdentityServer

[IdentityServer](https://identityserver.github.io/Documentation/) is a framework and a hostable component that allows implementing single sign-on and access control for modern web applications and APIs using protocols like OpenID Connect and OAuth2. It supports a wide range of clients like mobile, web, SPAs and desktop applications and is extensible to allow integration in new and existing architectures.

## OpenID Connect 

**Authentication** is different of **Authorization**.

- *Authentication*: Validates a claimed identity 
- *Authorization*: Controls access of an identity to resources. 

OpenID Connect provides both authentication and authorization in one protocol by layering authentication on top of the [OAuth2](https://oauth.net/2/) authorization protocols. Both protocols uses HTTP and JSON.

![](http://tinyurl.com/y4qwqbx6)

### Tokens Types

- Identity Token: Impersonate a successfull user. *Identity token* is issue to the *client* by an *Authorization Server* and must be validated by the *client*. Any request that send a *valid token* will be accepted, therefore the channed to where the *token* is transmitted should be secure (using TLS/SSL) so a *main in the middle attack* cannot intercept the *token* being sent.

- Access Token: Credential used to access protected resources. It contains specific scope and durations of access. Access tokens may be either a JWT (JSON Web Token) or a reference token, which is an identifier for the actual token held in the authorization server.

- Reflesh Token: Credential used to obtain *Access Tokens*. When the current *Access Token* expire, the *Client* can use the *Reflesh Token* to get a new *Access Token*. *Reflesh Tokens* also contains a lifetime (Default is usually 30 days). Once it is expired, there is not way to the *Client* to get another *Token* but authenticate again. If the *Reflesh token* is provided with a **sliding reflesh expire date (Default 15 days)**, each time the *token* is used, its *sliding* information is replaced with another one. In this way if the tokens is always used within the *sliding period*, it will never expire.

### Scopes

Scopes are identifiers for resources that a client wants to access. When a client request a *token* to the *identity Server*, it should include in the request the list of *scopes* that it want to have access to.

There are 02 types of *scopes*:

- Resource Scopes: Define access to *resources* (E.g.: read database, write file, etc.)
- Identity Scopes: Define access to the *Identity Information (E.g.: adminitrator user, anonymous user, etc.). With this *scope* granted, a *client* can access the information of the *Identity* (E.g.: e-mail, name, phone, etc.)

### Workflow

![](./identity_server_workflow.svg)

- Each *client* registered has an unique *client id*
- *Clients* can authenticate themselves using *secrets* or *certificates* (In this case, the [*certificate thumbprint*](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/how-to-retrieve-the-thumbprint-of-a-certificate) is used as secret)
- The *User* consent form can be configure to be displayed or not.
- After *authentication*, the *token* returned can be either JWT (JSON Web Token) or a reference token. If a *reference token* is returned, the *client* has to validate it with the *Authorization Server*. If JWT is returned, it is not required an additional call to the *Authorization Server*.

#### Authorization Code Flow

Most suitable for *server-side clients* where the *client* can *securely maintain a secret*

![](./identity_server_workflow_authorization_code.svg)

#### Implicit Flow

Most suitable for *browser based clients* which cannot sensibly maintain a client secret and cannot therefore authenticate themselves with the *authorization server*

![](./identity_server_workflow_implicity_flow.svg)

Because an *authenticated session* exists between the *browser* and the *authorization server* it is possible to resubmit the *authentication request* and receive a new set of *tokens* when the current *access token* expires.

#### Hybrid Flow

Most suitable for native and mobile apps. It is best used combined with [PKCE, (Proof Key for Code Exchange)](https://oauth.net/2/pkce/), which ensures that another client cannot use the Code to request tokens. 

#### Resource Owner (Credentials) Flow

Used in highly trusted applications if the password is stored

![](./identity_server_workflow_resource_owner_flow.svg)

A *reflesh token* cannot be requested, the client must re-authenticate itself and request another access token when necessary

#### Client Credentials Flow

Used for highly trusted clients when no other flow can be used.

![](./identity_server_workflow_client_credential_flow.svg)

A *reflesh token* cannot be requested, the client must re-authenticate itself and request another access token when necessary

### Single Sign On 

On *Single Sign On*, the user authenticated with an *authorization server* is not requested to enter the credentials when running another application that connects to the same *authorization server*. 

## References

- [IdentityServer3 Example](https://github.com/IdentityServer/IdentityServer3.Samples.git)
