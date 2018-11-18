Emoji Search
---

Created with *create-react-app*. See the [full create-react-app guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



Install
---

`npm install`



Usage
---

`npm start`



# Instructions for implementing CI/CD for this project.

Below are the details which you should use for setting up this project with CI/CD implementation.

## Tools Used for CI/CD 

Jenkins and Git.

## Jenkins Plugins used 

GitHub Integration, GitHub and AWS Codedeploy

## Application Server Used 

AWS Ec2 Amazon Linux AMI instance.

## Continuous Deployment Done with

 - AWS CodeDeploy Service - It is used for deploying application from S3 bucket to Ec2 instance
 - AWS S3 Service - A bucket and directory inside it is created for storing the zip files of every release build.`



# Install required software for CI/CD setup


You can install the softwares required from the bash script placed in installing_cicd_tools run below command to install

```bash
$ sudo ./cicdtools_install.sh
```



# Screens for configuring Jenkins CI/CD project


Refer to the screens in folder jenkins_cicd_setup_screens to configure your project in Jenkins


# How it works

Once you push the changes on GitHub repo, The web hook will be invoked and it will post back the build to your Jenkins
Build release will be deployed when any changes in code are pushed to Git Hub   
Used AWS CodeDeploy plugin in Jenkins for connecting to AWS CodeDeploy Application.
Used S3 Bucket details in Jenkins for connecting to AWS S3 and storing release builds in zip format there.
Once the release build is deployed at S3 Bucket directory, AWS CodeDeploy service deploys the application to Ec2 instance and executes scripts for after install and application start configuration from appspec.yml file 

# Note

As localhost is not accessible by GitHub for its Web Hooks, If you are setting up Jenkins on your local machine you can use ngrok for generating a host which will be accesible from GitHub Web Hooks. 





