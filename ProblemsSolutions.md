# List of Problems and Solutions Faced During Development of the DIY Project.


## Development Environment
**Programming Languages**
Python, Javascript, Html, Scss, SQL.

**Frameworks**
Angular Js
Flask

## Coding Milestones.
**Authentication and Authorizaton**
- Building the Sign Up and Sign In system for a user.
- Ensuring I protect all routes in the sytem to ensure I only logged in users can access certain features.

**Set Up the Simple Editor**
- Create New Website
- Create Customer Account
- Grant Customer Access
- Generate SSO Link
The steps outlined below require the developer to consume the endpoints exposed by duda. You can find more information here, 
[Link Text](https://developer.duda.co/docs/how-to-set-up-simple-editor)

**Payment Integration**
- Create Token
- Redirect User to DPO page
- Verify Transaction
The following steps require the developer to consume endpoints from DPO Payment Gateway. You can find the endpoints here,
[Link Text](https://docs.dpopay.com/api/index.html)

**Publish Site for user with own domain**
- Publish Site
- Update Site
- Redirect to client site.
After a user provides their domain we publish the site, then update it using the clients domain. You can find more information about this endpoint here,
[Link Text](https://developer.duda.co/reference/getting-started-with-the-duda-api)


**Publish Site for a user who'll buy a domain**
If the user has their domain we can call this function, *window.publishOverlayAPI.connectDomain()*


## Problems I faced during development

I faced Several Problems during development. Most were related to the consumption of 3rd party API's.

**Set Up the Simple Editor**
- During the Setting up of the Simple Editor, I wrongly assumed that we're required to provide the user with templates to choose from. I therefore used this endpoint which pulls all templates from duda, [Link Text](https://developer.duda.co/reference/templates-list-templates). I would them use this template ID during the creating the website process.

- The next mistake was to create the SSO without a target. This meant that we were now leading our Users to the normal editor and not the simple editor.

- I fixed the 2 mistakes by first abadoning the step where users had to choose a template and next for a first time user I used *target=RESET_BASIC* and *target=EDITOR* for a returning user.
The sso_link may look something like this for a first time user, *"https://api.duda.co/api/accounts/sso/account_name/link?target=RESET_BASIC"*


**Payment Integration**
- Here I had directly consumed the API's for *Charging Mobile Payment* and *Charge Credit Card Payments*. However it is not necessary to consume this endpoints but we only need the Create Token Enpoint, Redirect the user to DPO's Payment page and they will do the rest.

- To redirect the user you will be provided with a payment url.



