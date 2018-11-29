Emoji Search CI CD case study for Prudential Global Services This application is developed in react js and hosted in Azure App service. The URL for this application is as below. https://prudentialemojisearch.azurewebsites.net/

Hosting the application:

I have selected Azure App Service for hosting this application. We can host the app in a Virtual machine as well, but we need to install IIS and install the required sofwares, Instead we can host without any software installations using app service. I have created a Free subscription in Azure for this case study.

CI CD setup:

I have selected Azure Devops for creating the CI CD pipeline. Since I have a free subscription, I have decided to use Azure Devops. By configuring the subscription as a service endpoint, we can access all resources in CI CD pipeline.

I have configured the CI to the repo https://github.com/vishumalepati/ahfarmer.git as I dont have write access to https://github.com/ahfarmer/emoji-search, I have made changes to few files in my account and created a pull request and also requested access to the repo. Once I get the access, I will configure the CI to the specified repo in the case study.

I am installing the npm in the build agent and running the build using NPM package in the build. The build definition URL is as shown below. https://dev.azure.com/vishalimalepati/prudential/_apps/hub/ms.vss-ciworkflow.build-ci-hub?_a=edit-build-definition&id=2

The commands I used are as follows: Install : npm install Build: npm run-script build

I am using the artifact created at the build time and deploying it to the App service using FTP. I have set up the ftp credentials details as the variables and accessed them in the release template. The release template URL is as below. https://dev.azure.com/vishalimalepati/prudential/_releaseDefinition?definitionId=2&_a=definition-tasks&environmentId=2

I will be working on deploying the code to a virtual machine and will try to make it containerized. I will try to make changes to the html page as well.
