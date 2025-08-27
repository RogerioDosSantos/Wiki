# Microsoft Authentication Library (MSAL)

The Microsoft Authentication Library (MSAL) enables developers to acquire tokens from the Microsoft identity platform in order to authenticate users and access secured web APIs. It can be used to provide secure access to Microsoft Graph, other Microsoft APIs, third-party web APIs, or your own web API. MSAL supports many different application architectures and platforms including .NET, JavaScript, Java, Python, Android, and iOS.

They are OAuth 2.0 and OpenID Connect Library using this library you get: 

- Single sign-on (SSO)
- Handles the mechanics for you 
- Helps you troubleshoot 
- Support any Microsoft identity 
- Quick starts and integration assistants in Azure Active Directory (Azure AD)
- Optimized for new innovations

## How-to 

### Get Token to access an M365 user resource from a blind device

#### Create an Azure App Registration

![](./resources/msal/app_registration_01.png)

#### On the API Permissions and add a Microsoft Graph Permission 

![](./resources/msal/app_registration_02.png)

#### On the Authentication add an Mobile and desktop application 

![](./resources/msal/app_registration_03.png)

#### Create an *OAuth 2.0* Authorization request 

For this you will need the following information: 

- Grant Type: Authorization Code (With PKCE)
- Auth URL: `https://login.microsoftonline.com/common/oauth2/v2.0/authorize`
- Access Token URL: `https://login.microsoftonline.com/common/oauth2/v2.0/token`
- Code Challenge Method: SHA-256
- Client ID: `<your_client_id>`
- Callback URL: `<your_callback_url>`
- Scope: `<your_scope_url>` (E.g.: offline_access Files.Read.All)

### Revoke access 

User can revoke access by visiting the [Microsoft account manage consent](https://account.live.com/consent/Manage)

## References

- [MSAL Overview](https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-overview#languages-and-frameworks)
- [MSAL Documentation and Quick Starts](https://aka.ms/msal-overview)
  - [Scenario: A web API that calls web APIs](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-api-call-api-overview)
