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

## How-To

### CI/CD from local git repository

Share a volume with Jenkins Server Docker container. E.g.: `-v $/c/Users:/var/jenkins_home/host`

On Jenkins, configure to monitor the pipeline:

![](http://tinyurl.com/yblfcvbm){width=80% heigh=auto}

Enable the *Pool SCM* trigger but do not put any schedule there.

![](http://tinyurl.com/yazn2r74){width=80% heigh=auto}

Now, the [Git Plugin](https://wiki.jenkins.io/display/JENKINS/Git+Plugin) will allow you to trigger a build calling the following url:

`http://yourserver/git/notifyCommit?url=<path_of_git_repository>[&branches=branch1[,branch2]*][&sha1=<commit ID>]`

E.g.: 

`http://localhost:8080/git/notifyCommit?url=~/host/roger/git/roger/examples/jenkins`

Once this url is called you should be able to see some activity on the *Git Pooling Log*:

![](http://tinyurl.com/y9qnole6){width=80% heigh=auto}

Now you can create a *git hook* that will trigger this *URL* on every commit.

```bash
# Add a hook command on git
echo 'curl http://yourserver/git/notifyCommit?url=<path_of_git_repository>' >> <your_repository>/.git/hooks/post-commit
```

**Note** if you are in a *sub-module*, your hooks folder will be inside the main repository:

`<main_repository>/.git/modules/<your_submodule_location>/hooks`

### Pipeline - Run commands from Container

```jenkins
pipeline {
    agent {
        label 'master'
    }
    stages {
        stage('build') {
            agent {
                docker {
                    image 'conanio/gcc49-x86'
                }
            }
            steps {
                echo " - Building"
                sh 'conan -v'
            }
        }
    }
}
``` 

### Pipeline - Run commands from Container file

```jenkins
pipeline {
    agent {
        label 'master'
    }
    stages {
        stage('build') {
            agent {
                dockerfile {
                    filename 'build.docker'
                    additionalBuildArgs '--build-arg version=0.0.1'
                    args '-v builder_data:/home/conan/.conan/data'
                }
            }
            steps {
                echo " - Building"
                sh 'conan -v'
            }
        }
    }
}
``` 

### Pipeline - Cleanup of Images, Volumes and Containers

```jenkins
pipeline {
    agent {
        label 'master'
    }

    stage('Dangling Containers') {
        sh 'docker ps -q -f status=exited | xargs --no-run-if-empty docker rm'
    }

    stage('Dangling Images') {
        sh 'docker images -q -f dangling=true | xargs --no-run-if-empty docker rmi'
    }

    stage('Dangling Volumes') {
        sh 'docker volume ls -qf dangling=true | xargs -r docker volume rm'
    }
}
``` 

### Configure Global Pipelines

The descriptions below has a summary on how to configure *Global Pipelines*, limited to its basic. [Here](https://jenkins.io/doc/book/pipeline/syntax/) you can find the full document for additional information. 

#### Create the Global Pipeline project

The project should have at least the following folder structure

```
/<project_directory>
└── vars
    └── <function_name>.groovy
```

The function name should be in the following format:

```groovy
//vars/<function_name>.groovy

def call(String project_name) {
    pipeline {
        agent any
        parameters {
            string(name: 'string_parameter', defaultValue: 'default_value', description: 'description')
            choice(name: 'choice_parameter', choices: ['value_0', 'value_2', 'value_2'], description: 'description')
        }
        ...
    }
}
```

#### Add your function in the Global Pipelines configuration

Then *Global Pipelines configuration* can be found in the *Configure System*

![](http://tinyurl.com/y8vd8ogn)

#### Use the Global Pipeline

You can consume the configuration in the following way into the *Jenkins* file:

```groovy
// JenkinsFile

@Library('common_pipelline') _
<function_name>('build')
```

### Pipeline - Run steps in parallel

```groovy
stage('S1') {
    parallel {
        stage('S11') {
            steps {
                echo "Stage S11"
            }
        }
        stage('S12') {
            steps {
                echo "Stage S12"
            }
        }
    }
}
```

### Pipeline - Create parallel steps dynamically

```groovy
stage('Dynamic Parallel Steps') {
    steps {
        script {
            def tests = [:]
            for (int i = 0; i < 10; i++) {
                tests["${i}"] = {
                    node {
                        stage("Step ${i}") {
                            echo "Step ${i}"
                        }
                    }
                }
            }
            parallel tests
        }
    }
}
```

### Pipeline - Request user input

```groovy
input {
    message "Shoud we publish the changes"
    ok "Publish it!"
    submitter "alice,bob,roger"
    parameters {
        string(name: 'deployment_server', defaultValue: 'www.docker.com', description: 'What is the server you would like to publish?')
    }
}
```

