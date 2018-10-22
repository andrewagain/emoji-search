node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'sudo gpasswd -a $USER docker'
     sh 'docker build -t react-app-pipeline -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-app-pipeline'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-app-pipeline'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-app-pipeline --no-cache .'
        sh 'docker tag react-app localhost:5000/react-app-pipeline'
        sh 'docker push localhost:5000/react-app'
        sh 'docker rmi -f react-app localhost:5000/react-app-pipeline'
      }
    }
  }
  catch (err) {
    throw err
  }
}
