# Azure App Services

## App Services for Container - Troubleshooting with Advanced Tools

![](http://tinyurl.com/wjzfgdt)
![](http://tinyurl.com/st854zz)

## App Services Slots - How to use deployment Slots

![](http://tinyurl.com/r7527zs)

- The URL does not change. The slot URL and the Production URL will always be the same
- On the Slot you can have diferences in code as well diferences in configuration
- The Slots allows you to define the amount of traffic that is on production to go to the slot 

E.g.: 50% of the traffic is goint to the slot: 

![](http://tinyurl.com/rk6wv28)

- You can access the slots using the production URL by using the following links: `<url>/?x-ms-routing-name=<slot_name>`

![](http://tinyurl.com/vm9mqrl)

- When you Swap, the slot will be your deployment but the DNS will point to the proper deployment. Active connections will stay on the previous deployment

![](http://tinyurl.com/w4ub584)

## App Services deployment center 

It is a centralized way to put your code into an App Service

In the future will be deployment center.

Basically you can link the deployment center with your source control (E.g.: Git) and once you do a check-in, the deployment center will run your pipeline and deploy it for you. 

Since you have the deployment on every check-in, the deployment center can redeploy any previous deployment. 

This is an alternative to Slots but does not give 0 downtime deployment since everytime it is redeployed the system will go down

## References 

- [Video explaining Slots](https://www.youtube.com/watch?v=0cgy4GplC4I)
- [Video explaining Deployment Center](https://www.youtube.com/watch?v=QdI_BJHMadU)

