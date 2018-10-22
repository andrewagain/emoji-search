// Powered by Infostretch 

timestamps {

node () {

	stage ('react-app - Checkout') {
 	 checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '70414697-69ba-4b9e-aaa4-74df29d3d604', url: 'https://github.com/Nilesh108/emoji-search.git']]]) 
	}
	stage ('react-app - Build') {
 	
// Unable to convert a build step referring to "jenkins.plugins.nodejs.NodeJSBuildWrapper". Please verify and convert manually if required.		// Shell build step
sh """ 
npm install -g yarn
yarn install 
 """ 
	}
}
}