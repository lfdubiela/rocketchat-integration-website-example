# rocketchat-integration-website-example
Rocket Chat - integration via ddp protocol in website / Integração via protocolo ddp em website

# Integration website and rocket

This is a very poor implementation of how integrate rocket chat and website without meteor framework

## Prerequisites

For that we need just a project [meteor-ddp](https://github.com/EddieFloresLive/meteor-ddp) 
```
I don't know why but for somehow when ddp fires 'change' (_changeDoc) the collection watched is not initialized yet, so I had to modify the meteor-ddp.js to works fine.
```

## Authors

* **Luiz Dubiela** 
