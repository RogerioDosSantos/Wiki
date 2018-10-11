# Jenkins

The [Jenkins]( https://jenkins.io/ ) Continuous Integration and Delivery server

## Commands

`docker run --rm -d --name jenkins -p 8080:8080 -p 50000:50000 -v jenkins_data:/var/jenkins_home jenkins/jenkins:lts`: Run *Jenkins* server using docker. The persistent data and configuration will be stored into a volume called *jerkins_data*. The container name will be called *jenkins*

`docker logs jenkins` : Display the status of the server.

`docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword` : Retrieve the initial Administrator password


## Proxy

If even after the proxy is configured in the docker image you still getting the **Offiline** message because the *proxy certificate* is not installed. You can change the configuration to do not use *SSL* by executing the commands below:

`docker cp jenkins:/var/jenkins_home/hudson.model.UpdateCenter.xml .` : Copy the configuration file to your local machine

Change the line: `<url>https://updates.jenkins.io/update-center.json</url></url>` to `<url>http://updates.jenkins.io/update-center.json</url>`

`docker cp ./hudson.model.UpdateCenter.xml jenkins:/var/jenkins_home/`: Copy the configuration file back to the docker container

Restart the Server



