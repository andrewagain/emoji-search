#!/bin/sh

#Install Jenkins on Ubuntu on AWS Machine
sudo apt-get update

#Install Java on the box
sudo add-apt-repository ppa:webupd8team/java

sudo apt update; sudo apt install oracle-java8-installer
sudo apt install oracle-java8-set-default
javac -version

#Installing Jenkins 
sudo wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -

sudo echo deb https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list

sudo apt-get update

sudo apt-get install jenkins
#Get Jenkins Admin pwd
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

#Install GIT on the box
sudo apt-get install git

#Install AWS CLI

sudo apt-get install awscli

#Install Node on the box
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm
sudo apt-get install

