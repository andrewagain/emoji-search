pipeline {
agent any
    
    stages{
    
stage('Imran') {
    // some block
    steps{
        script {
            
        echo 'hello world'
        sh 'chmod 777 ./changelog.sh'
        sh './changelog.sh master development'
          cleanWs()
          def version = readFile "${env.WORKSPACE}/CHANGELOG.md"
          echo $version

    }
    
    }
}
    
}
}

