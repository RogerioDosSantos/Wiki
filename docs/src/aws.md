# Amazon Web Services (AWS)

## Services Summary

- **AWS Elastic Compute Cloud (EC2)**: EC2 makes it easy to boot a virtualized server, called EC2 Instance, with just a few clicks.

- EC2 Container Services (ECS): [ECS](https://aws.amazon.com/ecs/). Allow you deploy containers in a cluster.

- Identity Access Management (IAM): [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html?icmpid=docs_iam_console) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

## Security Group

A [Security Group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html). is a set of firewall rules that control network traffic for your instance. By default, all incoming ports are blocked.

## AWS CLI Commands

`aws configure`: Configure AWS cli to communicate with an Amazon account. You will need (Access Key, Secret Access Key, AWS Region, Output format)

## How-to

### Run Docker containers into AWS (Using EC2)

Those steps allow you setup a single *EC2 instance* with docker on it. It is not recomended to use this setup in production, but this can be a development environment in the *cloud*

- Create an [EC2 instance]() using the [AWS Console](https://console.aws.amazon.com/console/home)
  - Pick *Amazon Linux AMI*
  - Pick the *t2.micro* instance type

![](http://tinyurl.com/yctmnsfw) 

  - Keep the default option for Instance Details, Storage, and Tags, so keep clicking the gray *Next* button until you get to the *Configure Security Group*

![](http://tinyurl.com/y8vftt6b)

  - Configure the *Security Group (Firewall)* to allow incoming requests to any host for the following:
    - SSH (port 22)
    - HTTP (port 80)

![](http://tinyurl.com/ybgpds9r)

  - Click to *Review and Launch*
  - Click in Launch. Then will popup the *Key Pair* window:

![](http://tinyurl.com/yccsslcg)  

  - Select create a new key pair, give a name, download the private key and store it into a safe place.
  - Click in the *Launch Instances*

![](http://tinyurl.com/ybz779wd)

- Install Docker in the *EC2 Instance*

```shell
# Change the permission of the private key to read only by sudo
chmod 400 <path_to_the_key_pair>

# Connect to the EC2 instance
ssh -i <path_to_the_key_pair> ec2-user@<ec2_instance_public_ip>

# Install Docker
sudo yum update -y
sudo yum install -y docker
sudo service docker start

# Add the ec2-user to the docker group so you can execute Docker
sudo usermod -a -G docker ec2-user

# Reload the ssh connection so the group configuration can take effect
exit
ssh -i <path_to_the_key_pair> ec2-user@<ec2_instance_public_ip>

# Check if you have access
docker info
docker ps
```

### Setup Kubernetes Cluster in AWS

- Setup an IAM
  - Go to AWS Console > IAM and create a new user
  - Attach to *Administrator Access Policy* (Too much access but quick).


## References 

- [Installing AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- [Create Access Keys](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)
- [Configuring AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)



