pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'

            }
        }
        stage('Create Hello File') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'echo "hello jen" > hello.txt'
                    } else {
                        bat 'echo hello jen > hello.txt'
                    }
                }
            }
        }
    }
}
 
