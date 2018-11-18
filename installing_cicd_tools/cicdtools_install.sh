#!/bin/bash
# This script install Jenkins and Git in your Ubuntu System
#
# This script must be run as root:
#   $ sudo ./cicdtools_install.sh

#Install Jenkins on Ubuntu Machine
sudo apt-get update

#Install Java on the box
sudo apt install openjdk-8-jdk

#Installing Jenkins 
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -

sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'

sudo apt update
sudo apt install jenkins

#Get Jenkins Admin pwd
sudo cat /var/lib/jenkins/secrets/initialAdminPassword

#Install GIT on the box
sudo apt-get install git