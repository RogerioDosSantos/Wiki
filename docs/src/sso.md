# Single Sign-On (SSO) 

*Single Sign-On (SSO)* is an alternative access method which allows users to have access to several *service providers (SP)* (for example *WebSites or Services*) without having to manually login when accessing the site via an agreed route. 

## SSO with Federated IdPs 

*Federated Access Management* builds a trust relationship between *identity providers (IdP)* and *service providers (SP)*. It devolves the responsibility for *authentication* to a *user's home organisation*, and establishes *authorisation* through the secure exchange of information (known as *attributes*) between the two parties.

![](https://media.githubusercontent.com/media/RogerioDosSantos/Wiki/master/docs/src/sso/federation_example.png)

### Access Federation 

Federation members needing access to resources install *identity provider (IdP)* software, and members providing resources install *service provider (SP)* software. Members sign up to an agreed set of policies for exchanging information about *users* and *resources*. The *federation operator* acts as a *registrar* for this information, which describes the configuration of the members' identity and *service providers*. The information is known as *metadata*.

How *authentication* is carried out by the *identity provider* and how *rights management* is carried out by the *service provider* is left up to the respective parties. Thus, *federated access management* depends on a *certain level of trust*. These *trust agreements* are managed by *federations*. *Federations* are typically being established at a national level.

Examples of other federations include: 

- [InCommon](https://enterprise.ft.com/en-gb/sso-support-portal/guide-sso-federated-idps/). Located in the US
- [SWITCHaai](http://www.switch.ch/aai/docs/AAI_Org_Processes.pdf). Located in Switzerland
- [HAKA](http://www.csc.fi/english/institutions/haka). Located in Finland
- [OpenAthens](https://docs.openathens.net/display/public/OAHF/Joining+the+federation) - not tied to a location

## References 

- [FT.com Guide to SSO with Federated IdPs](https://enterprise.ft.com/en-gb/sso-support-portal/guide-sso-federated-idps/)


