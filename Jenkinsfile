pipeline {
agent any
    
    stages{
    
stage('Imran') {
    // some block
    steps{
        script {
            
        echo 'hello world'
            
        def retryAttempt = 0
            retry(2) {
                sh './jenkinsinstall.sh'
                 retryAttempt = retryAttempt + 1
            }     
            
            if ( retryAttempt > 2)
             sh 'chmod 777 ./jenkinsinstall.sh'
             sh './jenkinsinstall.sh'
    }
    }
}
    
}
}

